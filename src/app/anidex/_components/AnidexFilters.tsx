import { aspects } from "@/_data/aspects";
import { traits } from "@/_data/traits";
import ToggleButton from "@/anidex/_components/AnidexFiltersToggleButton";
import styles from "@/anidex/_styles/AnidexFilters.module.css";
import { revalidataAnimaData } from "@/revalidateAnimaData";

export default function AnidexFilters({
  query,
  setQuery,
  aspectSelection,
  handleAspectSelection,
  traitSelection,
  handleTraitSelection,
}: {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  aspectSelection: string[];
  handleAspectSelection: (aspect: string) => void;
  traitSelection: string[];
  handleTraitSelection: (trait: string) => void;
}) {
  return (
    <section className={styles.filters}>
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
        {aspects?.map((aspect) => (
          <ToggleButton
            key={aspect}
            value={aspect}
            group="aspects"
            selected={aspectSelection}
            handleSelection={handleAspectSelection}
          />
        ))}
      </ul>
      <ul>
        {traits?.map((trait) => (
          <ToggleButton
            key={trait}
            value={trait}
            group="traits"
            selected={traitSelection}
            handleSelection={handleTraitSelection}
          />
        ))}
      </ul>
      <button type="button" onClick={revalidataAnimaData}>
        DEV: Revalidate data
      </button>
    </section>
  );
}
