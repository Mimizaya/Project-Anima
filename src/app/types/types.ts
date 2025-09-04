import type { Aspect } from "@/data/aspects";
import type { Trait } from "@/data/traits";

export type Anima = {
  id: number;
  name: string;
  aspect: Aspect;
  trait: Trait;
  height: number;
  energy: number;
};
