"use client";

import ToggleButton from "@/anima/toggleButton";
import { aspects } from "@/data/aspects";
import { traits } from "@/data/traits";
import styles from "./animaFilters.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Aspect } from "@/data/aspects";
import type { Trait } from "@/data/traits";

export default function AnimaFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const toggleFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    // Get current values as a Set
    const current = params.get(key)?.split("&").filter(Boolean) ?? [];
    const currentValues = new Set(current);

    // Toggle value
    if (currentValues.has(value)) {
      currentValues.delete(value);
    } else {
      currentValues.add(value);
    }

    // Update or delete the param
    if (currentValues.size === 0) {
      params.delete(key);
    } else {
      params.set(key, Array.from(currentValues).join("&"));
    }

    router.push(`?${params.toString()}`);
  };

  const initialQuery = searchParams.get("query") ?? "";
  const [query, setQuery] = useState(initialQuery);
  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (query) {
        params.set("query", query);
      } else {
        params.delete("query");
      }

      router.push(`?${params.toString()}`, { scroll: false });
    }, 100);

    return () => clearTimeout(handler);
  }, [query, router, searchParams]);

  return (
    <div className={styles.filters}>
      <div className={styles.search}>
        <input
          type="search"
          value={query}
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <title>Search Icon</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <ul>
        {aspects?.map((aspect: Aspect) => (
          <ToggleButton
            key={aspect}
            value={aspect}
            imgCategory="aspects"
            toggle={toggleFilter}
          />
        ))}
      </ul>

      <ul>
        {traits?.map((trait: Trait) => (
          <ToggleButton
            key={trait}
            value={trait}
            imgCategory="traits"
            toggle={toggleFilter}
          />
        ))}
      </ul>
    </div>
  );
}
