import { useCounterState } from './CustomHooks/useCounterState';
/**
 * Counter component demonstrating the use of the useCounterState custom hook.
 */

interface UseCounterStateType {
  count: number;
  increment: () => void;
  decrement: () => void;
}
export function Counter() {
  /**
   * Counter state for the first counter.
   */

  const CounterState1: UseCounterStateType = useCounterState({ initialCount: 0 });
  /**
   * Counter state for the second counter.
   *
   */
  const CounterState2: UseCounterStateType = useCounterState({ initialCount: 0 });
  return (
    <>
      <h1>Counter App example</h1>
      <div>
        <p>Count: {CounterState1.count}</p>
        <button onClick={() => CounterState1.increment()}>Increment</button>
        <button onClick={() => CounterState1.decrement()}>Decrement</button>
      </div>
      <h1>Counter App example 2</h1>
      <div>
        <p>Count: {CounterState2.count}</p>
        <button onClick={() => CounterState2.increment()}>Increment</button>
        <button onClick={() => CounterState2.decrement()}>Decrement</button>
      </div>
    </>
  );
}
