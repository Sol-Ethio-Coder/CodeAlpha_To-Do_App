/**
 * storage.js
 * Handles all localStorage read/write operations.
 * Provides a clean API so the rest of the app never
 * touches localStorage directly.
 */
const Storage = (() => {
  const KEY = 'tasko_tasks_v2';

  /** Load tasks array from localStorage. Returns [] on failure. */
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  /** Persist tasks array to localStorage. */
  function save(tasks) {
    try { localStorage.setItem(KEY, JSON.stringify(tasks)); } catch (e) {}
  }

  /** Remove all stored tasks. */
  function clear() {
    try { localStorage.removeItem(KEY); } catch (e) {}
  }

  return { load, save, clear };
})();
