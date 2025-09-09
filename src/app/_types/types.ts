import type { Aspect } from "@/_data/aspects";
import type { Trait } from "@/_data/traits";

export type Anima = {
  id: number;
  name: string;
  aspect: Aspect;
  trait: Trait;
  height: number;
  energy: number;
  description: string;
};
