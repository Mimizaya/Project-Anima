"use client";

import { useMemo, useState } from "react";
import { useMultiSelect } from "@/_hooks/useMultiSelect";
import type { Anima } from "@/_types/types";
import { searchAnidex } from "@/_utils/searchAnidex";
import AnidexCard from "@/anidex/_components/AnidexCard";
import AnidexFilters from "@/anidex/_components/AnidexFilters";
import styles from "@/anidex/_styles/Anidex.module.css";

export default function Anidex({ data }: { data: Anima[] }) {
  const [query, setQuery] = useState<string>("");

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

  const filteredData = useMemo(() => {
    return searchAnidex(data, query, aspectSelection, traitSelection);
  }, [data, query, aspectSelection, traitSelection]);

  const clearFilters = () => {
    setQuery("");
    setAspectSelection([]);
    setTraitSelection([]);
    // Other future states here
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
        <section className={styles.list}>
          {filteredData.map((anima: Anima) => (
            <AnidexCard key={anima.id} anima={anima} />
          ))}
        </section>
      ) : (
        <section className={styles.noResults}>
          <h2>Sorry, no results found.</h2>
          <button type="button" onClick={clearFilters}>
            Clear filters
          </button>
        </section>
      )}
    </>
  );
}
