export const traits = [
  "Explorer",
  "Striker",
  "Mastermind",
  "Protector",
  "Cherubim",
  "Gladiator",
  "Hothead",
  "Blaster",
  "Mascot",
] as const;

export type Trait = (typeof traits)[number];
