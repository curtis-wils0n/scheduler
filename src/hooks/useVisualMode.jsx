import { useState } from "react";
/**
 * Handles switching between various display modes in <Application/>
 * @param {*} initialMode
 * @returns 
 */
export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);
  // Transitions to new display, or replaces current (bool)
  function transition(newMode, replace = false) {
    if (replace) {
      setHistory(prev => prev.slice(0, -1));
    }
    setHistory(prev => [...prev, newMode]);
    setMode(newMode);
  }
  // Reverts to previous display
  function back() {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
      setMode(history[history.length - 2]);
    }  
  }

  return { mode, transition, back };
}