import { useState, useEffect, useCallback } from "react";

export interface UseWordCarouselOptions {
  words: string[];
  interval?: number;
}

export function useWordCarousel({
  words,
  interval = 2500,
}: UseWordCarouselOptions) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [next, interval]);

  return {
    currentWord: words[index],
    key: `${index}-${words[index]}`,
    index,
    next,
  };
}
