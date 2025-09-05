import ToggleButton from "@/anima/toggleButton";
import { aspects } from "@/data/aspects";
import { traits } from "@/data/traits";
import styles from "./animaFilters.module.css";

export default function AnimaFilters({
  setQuery,
  aspectSelection,
  handleAspectSelection,
  traitSelection,
  handleTraitSelection,
}: {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  aspectSelection: string[];
  handleAspectSelection: (aspect: string) => void;
  traitSelection: string[];
  handleTraitSelection: (trait: string) => void;
}) {
  return (
    <div className={styles.filters}>
      <div className={styles.search}>
        <input
          type="search"
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
            imgCategory="aspects"
            selected={aspectSelection}
            toggleSelection={handleAspectSelection}
          />
        ))}
      </ul>
      <ul>
        {traits?.map((trait) => (
          <ToggleButton
            key={trait}
            value={trait}
            imgCategory="traits"
            selected={traitSelection}
            toggleSelection={handleTraitSelection}
          />
        ))}
      </ul>
    </div>
  );
}
