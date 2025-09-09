import Image from "next/image";
import styles from "@/anidex/_styles/AnidexFiltersToggleButton.module.css";

export default function AnidexFiltersToggleButton({
  value,
  group,
  selected,
  handleSelection,
}: {
  value: string;
  group: string;
  selected: string[];
  handleSelection: (value: string) => void;
}) {
  return (
    <li
      className={`${styles.button} ${value.toLowerCase()} ${
        selected.length > 0
          ? selected.includes(value)
            ? ""
            : `${styles.buttonUnselected}`
          : ""
      }`}
      onClick={() => handleSelection(value)}
      onKeyDown={() => handleSelection(value)}
    >
      <Image
        src={`/icons/${group}/${value}.png`}
        alt={`${value} Icon`}
        height={24}
        width={24}
      />
      {selected.includes(value) && <div className={styles.selected}></div>}
      <span>{value}</span>
    </li>
  );
}
