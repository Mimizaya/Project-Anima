"use client";

import { useState, useMemo } from "react";
import AnimaFilters from "@/anima/animaFilters";
import AnimaCard from "@/anima/animaCard";
import type { Anima } from "@/types/types";
import { filterAndSortAnima } from "@/utils/searchAnima";
import { useMultiSelect } from "@/hooks/useMultiSelect";
import styles from "./animaPage.module.css";

export default function AnimaPage({ anima }: { anima: Anima[] }) {
  const {
    selection: aspectSelection,
    setSelection: setAspectSelection,
    toggleSelection: handleAspectSelection,
  } = useMultiSelect();
  const {
    selection: traitSelection,
    setSelection: setTraitSelection,
    toggleSelection: handleTraitSelection,
  } = useMultiSelect();

  const [query, setQuery] = useState<string>("");
  const filteredData = useMemo(() => {
    return filterAndSortAnima(anima, query, aspectSelection, traitSelection);
  }, [anima, query, aspectSelection, traitSelection]);

  const clearFilters = () => {
    setQuery("");
    setAspectSelection([]);
    setTraitSelection([]);
  };

  return (
    <>
      <AnimaFilters
        setQuery={setQuery}
        aspectSelection={aspectSelection}
        handleAspectSelection={handleAspectSelection}
        traitSelection={traitSelection}
        handleTraitSelection={handleTraitSelection}
      />
      {filteredData.length > 0 ? (
        <ul className={styles.list}>
          {filteredData
            // NOTE: Filter can be removed once all anima are in the dataset
            // For now we remove the missing ones this way
            ?.filter((a) => a.name !== null)
            .map((anima) => (
              <AnimaCard key={anima.id} anima={anima} />
            ))}
        </ul>
      ) : (
        <div className={styles.noResults}>
          <p>Sorry, no results found.</p>
          <button type="button" onMouseDown={clearFilters}>
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
