import { searchAnidex } from "@/_utils/searchAnidex";
import type { Anima } from "@/_types/types";

describe("searchAnidex", () => {
  const anima: Anima[] = [
    {
      id: 1,
      name: "Firebird",
      aspect: "Weakness",
      trait: "Blaster",
      height: 30,
      energy: 50,
      description: "This is a description",
    },
    {
      id: 2,
      name: "Fluffycat",
      aspect: "Weakness",
      trait: "Striker",
      height: 30,
      energy: 50,
      description: "This is also a description",
    },
    {
      id: 3,
      name: "Catkittyfloof",
      aspect: "Hate",
      trait: "Striker",
      height: 30,
      energy: 50,
      description: "This is another description",
    },
  ];

  it("returns all items when query and filters are empty", () => {
    const result = searchAnidex(anima, "", [], []);
    expect(result.length).toBe(3);
  });

  it("filters by name match (case insensitive) and sorts results by index of name match", () => {
    const result = searchAnidex(anima, "cat", [], []);
    expect(result.map((a) => a.name)).toEqual(["Catkittyfloof", "Fluffycat"]);
  });

  it("filters aspect and trait match through query, but does not sort (keeps original object order)", () => {
    const result = searchAnidex(anima, "striker", [], []);
    expect(result.map((a) => a.name)).toEqual(["Fluffycat", "Catkittyfloof"]);
  });

  it("filters by aspect only", () => {
    const result = searchAnidex(anima, "", ["Weakness"], []);
    expect(result.map((a) => a.name)).toEqual(["Firebird", "Fluffycat"]);
  });

  it("filters by trait only", () => {
    const result = searchAnidex(anima, "", [], ["Blaster"]);
    expect(result.map((a) => a.name)).toEqual(["Firebird"]);
  });

  it("filters by query and aspect together", () => {
    const result = searchAnidex(anima, "cat", ["Weakness"], []);
    expect(result.map((a) => a.name)).toEqual(["Fluffycat"]);
  });

  it("filters by query and trait together", () => {
    const result = searchAnidex(anima, "cat", [], ["Striker"]);
    expect(result.map((a) => a.name)).toEqual(["Catkittyfloof", "Fluffycat"]);
  });

  it("filters by aspect and trait together", () => {
    const result = searchAnidex(anima, "", ["Weakness"], ["Blaster"]);
    expect(result.map((a) => a.name)).toEqual(["Firebird"]);
  });

  it("filters by query, aspect and trait together", () => {
    const result = searchAnidex(anima, "cat", ["Weakness"], ["Striker"]);
    expect(result.map((a) => a.name)).toEqual(["Fluffycat"]);
  });

  it("returns empty when no matches are found", () => {
    const result = searchAnidex(anima, "unicorn", [], []);
    expect(result).toEqual([]);
  });
});
