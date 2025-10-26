"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const inc = () => setCount((c) => c + step);
  const dec = () => setCount((c) => Math.max(0, c - step));
  const reset = () => setCount(0);

  const onStepInput = (e) => {
    const n = Number(e.target.value);
    setStep(Number.isFinite(n) && n >= 1 ? Math.floor(n) : 1);
  };

  const onPreset = (n) => setStep(n);

  const decDisabled = count - step < 0;

  return (
    <div className="counter-container">
      <h2 className="counter-title">Simple Counter</h2>

      <p className="counter-display" aria-live="polite" role="status">
        {count}
      </p>

      <div className="button-group">
        <button className="btn decrement" onClick={dec} disabled={decDisabled}>
          − Decrement
        </button>
        <button className="btn increment" onClick={inc}>
          + Increment
        </button>
        <button className="btn reset" onClick={reset}>
          Reset
        </button>
      </div>

      <div className="step-row">
        <label htmlFor="step-input" className="step-label">Step</label>
        <input
          id="step-input"
          type="number"
          min={1}
          inputMode="numeric"
          className="step-input"
          value={step}
          onChange={onStepInput}
        />
        <select
          aria-label="Choose step preset"
          className="step-select"
          value={String(step)}
          onChange={(e) => onPreset(Number(e.target.value))}
        >
          <option value="1">×1</option>
          <option value="2">×2</option>
          <option value="5">×5</option>
          <option value="10">×10</option>
        </select>
      </div>
    </div>
  );
}
