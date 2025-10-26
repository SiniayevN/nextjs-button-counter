"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => (c > 0 ? c - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h2 className="counter-title">Simple Counter</h2>

      <p className="counter-display" aria-live="polite" role="status">
        {count}
      </p>

      <div className="button-group">
        <button className="btn decrement" onClick={decrement} disabled={count === 0}>
          - Decrement
        </button>
        <button className="btn increment" onClick={increment}>
          + Increment
        </button>
        <button className="btn reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
