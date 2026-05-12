/**
 * app.js
 * Application entry point and event controller.
 *
 * Every user action follows the same 3-step flow:
 *   1. Call TaskManager  → mutate data
 *   2. Call Storage.save → persist
 *   3. Call refresh()    → repaint UI
 */
(function () {
  'use strict';

  let activeFilter = 'all';
  let editingId    = null;
  const $ = id => document.getElementById(id);

  const SAMPLES = [
    { text: 'Review Q3 project proposal',   category: 'work',     priority: 'high'   },
    { text: 'Morning run — 30 minutes',     category: 'health',   priority: 'medium' },
    { text: 'Read chapter 4 of Clean Code', category: 'learning', priority: 'low'    },
    { text: 'Call dentist to reschedule',   category: 'personal', priority: 'medium' },
  ];

  /* ── Bootstrap ── */
  function init() {
    const saved = Storage.load();
    if (!saved.length) {
      TaskManager.init([]);
      SAMPLES.forEach(s => TaskManager.add(s.text, s.category, s.priority));
      Storage.save(TaskManager.getAll());
    } else {
      TaskManager.init(saved);
    }
    UI.initDate();
    bindEvents();
    refresh();
    $('footer-year').textContent = new Date().getFullYear();
  }

  /* ── Refresh UI from current state ── */
  const refresh = () => {
    UI.renderTasks(TaskManager.getFiltered(activeFilter));
    UI.renderCounts(TaskManager.getCounts());
    UI.renderHeader(activeFilter);
    UI.setActiveNav(activeFilter);
  };
  const persist = () => Storage.save(TaskManager.getAll());

  /* ── Bind all events ── */
  function bindEvents() {

    /* Add form */
    $('btn-open-form').addEventListener('click', UI.openAddForm);
    $('btn-cancel').addEventListener('click', UI.closeAddForm);
    $('add-form').addEventListener('submit', e => {
      e.preventDefault();
      const { text, category, priority } = UI.getAddForm();
      if (!text) return;
      TaskManager.add(text, category, priority);
      persist(); UI.closeAddForm(); refresh();
    });

    /* Sidebar nav filters */
    document.querySelectorAll('.nav-btn[data-filter]').forEach(btn =>
      btn.addEventListener('click', () => { activeFilter = btn.dataset.filter; refresh(); })
    );

    /* Task list — event delegation */
    $('task-list').addEventListener('click', e => {
      const el = e.target.closest('[data-action]'); if (!el) return;
      const id = el.closest('.task-item')?.dataset.id; if (!id) return;
      if (el.dataset.action === 'toggle') { TaskManager.toggle(id); persist(); refresh(); }
      else if (el.dataset.action === 'delete') { TaskManager.remove(id); persist(); refresh(); }
      else if (el.dataset.action === 'edit') {
        const task = TaskManager.getAll().find(t => t.id === id);
        if (task) { editingId = id; UI.openEditModal(task); }
      }
    });

    /* Keyboard accessibility for checkboxes */
    $('task-list').addEventListener('keydown', e => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const cb = e.target.closest('[data-action="toggle"]');
      if (!cb) return; e.preventDefault(); cb.click();
    });

    /* Edit modal */
    $('edit-form').addEventListener('submit', e => {
      e.preventDefault();
      const { text, category, priority } = UI.getEditForm();
      if (!text || !editingId) return;
      TaskManager.update(editingId, text, category, priority);
      persist(); editingId = null; UI.closeEditModal(); refresh();
    });
    $('btn-modal-cancel').addEventListener('click', () => { editingId = null; UI.closeEditModal(); });
    $('modal-overlay').addEventListener('click', function (e) {
      if (e.target === this) { editingId = null; UI.closeEditModal(); }
    });

    /* Bulk actions */
    $('btn-clear-completed').addEventListener('click', () => {
      if (confirm('Remove all completed tasks?')) { TaskManager.clearCompleted(); persist(); refresh(); }
    });
    $('btn-clear-all').addEventListener('click', () => {
      if (confirm('Remove ALL tasks?')) { TaskManager.clearAll(); Storage.clear(); refresh(); }
    });

    /* Global Escape */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { UI.closeAddForm(); UI.closeEditModal(); editingId = null; }
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
