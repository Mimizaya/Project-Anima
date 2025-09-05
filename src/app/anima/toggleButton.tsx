import { useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "./animaFilters.module.css";

export default function ToggleButton({
  value,
  imgCategory,
  toggle,
}: {
  value: string;
  imgCategory: string;
  toggle: (key: string, value: string) => void;
}) {
  const searchParams = useSearchParams();

  const values = searchParams.get(imgCategory);
  const selected = values?.split("&") ?? [];
  return (
    <li
      className={`${styles.button} ${value.toLowerCase()} ${
        selected.length > 0
          ? selected.includes(value)
            ? ""
            : "unselected"
          : ""
      }`}
      onMouseDown={() => toggle(imgCategory, value)}
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
