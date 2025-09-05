import AnimaCard from "@/anima/animaCard";
import type { Anima } from "@/types/types";
import styles from "./animaPage.module.css";

export default function AnimaPage({ anima }: { anima: Anima[] }) {
  return (
    <>
      {anima.length > 0 ? (
        <ul className={styles.list}>
          {anima
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
          <button type="button">Clear filters</button>
        </div>
      )}
    </>
  );
}
