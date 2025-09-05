import Image from "next/image";
import styles from "./anidexFilters.module.css";

export default function AnidexFiltersToggleButton({
  value,
  imgCategory,
  selected,
  toggleSelection,
}: {
  value: string;
  imgCategory: string;
  selected: string[];
  toggleSelection: (value: string) => void;
}) {
  return (
    <li
      className={`${styles.button} ${value.toLowerCase()} ${
        selected.length > 0
          ? selected.includes(value)
            ? ""
            : "unselected"
          : ""
      }`}
      onClick={() => toggleSelection(value)}
      onKeyDown={() => toggleSelection(value)}
    >
      <Image
        src={`/icons/${imgCategory}/${value}.png`}
        alt={`${value} Icon`}
        height={24}
        width={24}
      />
      {selected.includes(value) && <div className={styles.selected}></div>}
      <span>{value}</span>
    </li>
  );
}
