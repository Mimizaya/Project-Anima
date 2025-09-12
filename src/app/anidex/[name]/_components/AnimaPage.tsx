import Image from "next/image";
import type { Anima } from "@/_types/types";
import styles from "@/anidex/[name]/_styles/Anima.module.css";

export default function AnimaPage({ anima }: { anima: Anima }) {
  return (
    <section className={styles.section}>
      <Image
        src={`/anima/${anima.name}.png`}
        alt={`${anima.name} Image`}
        height={450}
        width={450}
        className={styles.mainImage}
      />
      <div className={styles.info}>
        <h2 className={styles.name}>{anima.name}</h2>
        <span className={styles.number}>
          #{String(anima.id).padStart(3, "0")}
        </span>

        <div className={styles.aspecttrait}>
          <div className={`${styles.aspect} ${anima.aspect.toLowerCase()}`}>
            <Image
              src={`/icons/aspects/${anima.aspect}.png`}
              alt={`${anima.aspect} Icon`}
              width={20}
              height={20}
            />
            <span>{anima.aspect}</span>
          </div>
          <div className={`${styles.trait} ${anima.trait.toLowerCase()}`}>
            <Image
              src={`/icons/traits/${anima.trait}.png`}
              alt={`${anima.trait} Icon`}
              width={20}
              height={20}
            />
            <span>{anima.trait}</span>
          </div>
        </div>

        <p className={styles.description}>{anima.description}</p>
        <p className={styles.description}>{anima.description}</p>
        <p className={styles.description}>{anima.description}</p>
      </div>
    </section>
  );
}
