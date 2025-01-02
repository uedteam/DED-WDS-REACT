import { useEffect, useState } from 'react';

export const useCounter = (initialValue: number, limit: number) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= limit) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 0);
    return () => clearInterval(interval);
  }, []);

  return count;
};
