import { useEffect } from "react";

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    return () => {};
  }, [ref, handler]);
}
