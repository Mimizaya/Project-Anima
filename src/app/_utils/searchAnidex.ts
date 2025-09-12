import type { Anima } from "@/_types/types";

export function searchAnidex(
  anima: Anima[],
  query: string,
  aspectSelection: string[],
  traitSelection: string[],
): Anima[] {
  const queryLower = query.toLowerCase();
  return anima
    .filter((anima: Anima) => {
      const matchesQuery =
        anima.name?.toLowerCase().includes(queryLower) ||
        anima.aspect?.toLowerCase().includes(queryLower) ||
        anima.trait?.toLowerCase().includes(queryLower);

      const matchesAspect =
        aspectSelection.length === 0 || aspectSelection.includes(anima.aspect);
      const matchesTrait =
        traitSelection.length === 0 || traitSelection.includes(anima.trait);

      return matchesQuery && matchesAspect && matchesTrait;
    })
    .sort((a: Anima, b: Anima) => {
      const indexA = a.name?.indexOf(queryLower) ?? -1;
      const indexB = b.name?.indexOf(queryLower) ?? -1;

      return indexA - indexB;
    });
}
