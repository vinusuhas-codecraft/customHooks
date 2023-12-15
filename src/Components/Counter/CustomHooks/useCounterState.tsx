import { useState } from 'react';

interface UseCounterProps {
  initialCount: number;
}

export const useCounterState = ({ initialCount = 0 }: UseCounterProps) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
};
