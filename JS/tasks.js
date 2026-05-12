/**
 * tasks.js
 * Pure task data layer — no DOM, no side-effects.
 * Handles all CRUD operations on the task array.
 *
 * Task shape: { id, text, category, priority, done, createdAt }
 */
const TaskManager = (() => {
  let _tasks = [];

  const _id  = () => `t_${Date.now()}_${Math.random().toString(36).slice(2,6)}`;
  const _idx = id  => _tasks.findIndex(t => t.id === id);

  /** Seed the manager from a stored array (e.g. from Storage). */
  function init(tasks) {
    _tasks = Array.isArray(tasks) ? [...tasks] : [];
  }

  /** Create and prepend a new task. Returns the new task object. */
  function add(text, category = 'work', priority = 'medium') {
    const task = { id: _id(), text: text.trim(), category, priority, done: false, createdAt: Date.now() };
    _tasks.unshift(task);
    return task;
  }

  /** Toggle the done state of a task by id. */
  function toggle(id) {
    const i = _idx(id);
    if (i < 0) return null;
    _tasks[i] = { ..._tasks[i], done: !_tasks[i].done };
    return _tasks[i];
  }

  /** Update text, category, and priority of a task. */
  function update(id, text, category, priority) {
    const i = _idx(id);
    if (i < 0) return null;
    _tasks[i] = { ..._tasks[i], text: text.trim(), category, priority };
    return _tasks[i];
  }

  /** Remove a task by id. */
  function remove(id) {
    const i = _idx(id);
    if (i < 0) return false;
    _tasks.splice(i, 1);
    return true;
  }

  /** Remove all completed tasks. */
  function clearCompleted() {
    const before = _tasks.length;
    _tasks = _tasks.filter(t => !t.done);
    return before - _tasks.length;
  }

  /** Remove every task. */
  function clearAll() { _tasks = []; }

  /**
   * Return a filtered copy of tasks.
   * @param {string} filter — 'all' | 'active' | 'completed' | category name
   */
  function getFiltered(filter) {
    return _tasks.filter(t => {
      if (filter === 'all')       return true;
      if (filter === 'active')    return !t.done;
      if (filter === 'completed') return t.done;
      return t.category === filter;
    });
  }

  /** Return all tasks (copy). */
  function getAll() { return [..._tasks]; }

  /** Return counts for sidebar badges. */
  function getCounts() {
    const total = _tasks.length;
    const done  = _tasks.filter(t => t.done).length;
    return { all: total, active: total - done, completed: done };
  }

  return { init, add, toggle, update, remove, clearCompleted, clearAll, getFiltered, getAll, getCounts };
})();
