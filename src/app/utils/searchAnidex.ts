import type { Anima } from "@/types/types";

export function searchAnidex(
  anima: Anima[],
  query: string,
  aspectSelection: string[],
  traitSelection: string[]
): Anima[] {
  const queryLower = query.toLowerCase();
  return anima
    .filter((a: Anima) => {
      const matchesQuery =
        a.name?.toLowerCase().includes(queryLower) ||
        a.aspect?.toLowerCase().includes(queryLower) ||
        a.trait?.toLowerCase().includes(queryLower);

      const matchesAspect =
        aspectSelection.length === 0 || aspectSelection.includes(a.aspect);
      const matchesTrait =
        traitSelection.length === 0 || traitSelection.includes(a.trait);

      return matchesQuery && matchesAspect && matchesTrait;
    })
    .sort((a: Anima, b: Anima) => {
      const indexA = a.name?.indexOf(queryLower) ?? -1;
      const indexB = b.name?.indexOf(queryLower) ?? -1;

      return indexA - indexB;
    });
}
