import styles from "./animaCard.module.css";
import Image from "next/image";
import type { Anima } from "@/types/types";

export default function AnimaCard({ anima }: { anima: Anima }) {
  return (
    <div className={styles.card}>
      <h2>{anima.name}</h2>
      <p className={styles.number}>#{String(anima.id).padStart(3, "0")}</p>

      <div className={styles.imageContainer}>
        <Image
          src={`/anima/${anima.name}.png`}
          alt={`${anima.name} Icon`}
          fill={true}
        />
      </div>

      <div className={styles.types}>
        <p className={`${styles.aspect} ${anima.aspect.toLowerCase()}`}>
          <Image
            src={`/icons/aspects/${anima.aspect}.png`}
            alt={`${anima.aspect} Icon`}
            width={20}
            height={20}
          />
          {anima.aspect}
        </p>
        <p className={`${styles.trait} ${anima.trait.toLowerCase()}`}>
          <Image
            src={`/icons/traits/${anima.trait}.png`}
            alt={`${anima.trait} Icon`}
            width={20}
            height={20}
          />
          {anima.trait}
        </p>
      </div>

      <div className={styles.types}>
        <p className={styles.height}>
          Height: <span className={styles.teal}>{anima.height}</span> cm
        </p>
        <p className={styles.energy}>
          Energy: <span className={styles.teal}>{anima.energy}</span> Joules
        </p>
      </div>
    </div>
  );
}
