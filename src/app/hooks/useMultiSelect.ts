import { useState } from "react";

export function useMultiSelect<T = string>() {
  const [selection, setSelection] = useState<T[]>([]);

  const toggleSelection = (item: T) => {
    setSelection((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return {
    selection,
    setSelection,
    toggleSelection,
  };
}
