import { renderHook, act } from "@testing-library/react";
import { useMultiSelect } from "@/_hooks/useMultiSelect";

describe("useMultiSelect", () => {
  it("should initialize with an empty selection", () => {
    const { result } = renderHook(() => useMultiSelect());

    expect(result.current.selection).toEqual([]);
  });

  it("should add an item when toggled", () => {
    const { result } = renderHook(() => useMultiSelect<string>());

    act(() => {
      result.current.toggleSelection("apple");
    });

    expect(result.current.selection).toEqual(["apple"]);
  });

  it("should remove an item when toggled twice", () => {
    const { result } = renderHook(() => useMultiSelect<string>());

    act(() => {
      result.current.toggleSelection("apple"); // add
      result.current.toggleSelection("apple"); // remove
    });

    expect(result.current.selection).toEqual([]);
  });

  it("should allow manual setting of selection", () => {
    const { result } = renderHook(() => useMultiSelect<string>());

    act(() => {
      result.current.setSelection(["banana", "orange"]);
    });

    expect(result.current.selection).toEqual(["banana", "orange"]);
  });

  it("should support generic types (number)", () => {
    const { result } = renderHook(() => useMultiSelect<number>());

    act(() => {
      result.current.toggleSelection(1);
      result.current.toggleSelection(2);
    });

    expect(result.current.selection).toEqual([1, 2]);
  });
});
