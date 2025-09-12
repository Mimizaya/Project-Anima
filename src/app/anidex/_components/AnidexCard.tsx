import Image from "next/image";
import Link from "next/link";
import type { Anima } from "@/_types/types";
import styles from "@/anidex/_styles/AnidexCard.module.css";

export default function AnidexCard({ anima }: { anima: Anima }) {
  return (
    <div className={styles.card}>
      <h2>{anima.name}</h2>
      <p className={styles.number}>#{String(anima.id).padStart(3, "0")}</p>

      <button type="button" className={styles.viewDetailsButton}>
        <Link href={`/anidex/${anima.name.toLowerCase()}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>View Details</title>
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </Link>
      </button>

      <div className={styles.animaImageContainer}>
        {" "}
        <Image
          src={`/anima/${anima.name}.png`}
          alt={`${anima.name} Icon`}
          width={250}
          height={250}
          priority={true}
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
