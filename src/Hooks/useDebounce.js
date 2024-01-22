import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const hangler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => clearTimeout(hangler);
  }, [value]);
  return debounceValue;
}

export default useDebounce;
