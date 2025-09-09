export const aspects = [
  "Satiation",
  "Weakness",
  "Love",
  "Regret",
  "War",
  "Competition",
  "Right",
  "Change",
  "Pride",
  "Insatiability",
  "Peace",
  "Memory",
  "Dark",
  "Beauty",
  "Hate",
  "Light",
] as const;

export type Aspect = (typeof aspects)[number];
