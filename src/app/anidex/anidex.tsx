"use client";

import { useState, useMemo } from "react";
import AnidexFilters from "@/anidex/anidexFilters";
import AnidexCard from "@/anidex/anidexCard";
import type { Anima } from "@/types/types";
import { filterAndSortAnima } from "@/utils/searchAnima";
import { useMultiSelect } from "@/hooks/useMultiSelect";
import styles from "./anidex.module.css";

export default function Anidex({ anima }: { anima: Anima[] }) {
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
      <AnidexFilters
        query={query}
        setQuery={setQuery}
        aspectSelection={aspectSelection}
        handleAspectSelection={handleAspectSelection}
        traitSelection={traitSelection}
        handleTraitSelection={handleTraitSelection}
      />
      {filteredData.length > 0 ? (
        <main className={styles.list}>
          {filteredData.map((anima: Anima) => (
            <AnidexCard key={anima.id} anima={anima} />
          ))}
        </main>
      ) : (
        <main className={styles.noResults}>
          <h2>Sorry, no results found.</h2>
          <button type="button" onClick={clearFilters}>
            Clear filters
          </button>
        </main>
      )}
    </>
  );
}
