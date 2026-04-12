import { useState } from 'react';

export function useSlider(length = 0) {
  const [current, setCurrent] = useState(1);

  const next = () => {
    if (!length) return;
    setCurrent((prev) => (prev + 1) % length);
  };

  const prev = () => {
    if (!length) return;
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  return { current, next, prev, setCurrent };
}
