/**
 * ui.js
 * All DOM rendering and UI update functions.
 * Reads data — never mutates tasks directly.
 */
const UI = (() => {
  const $ = id => document.getElementById(id);
  const esc = s => { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; };
  const fmtTime = ts => new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const fmtDate = ()  => new Date().toLocaleDateString([], { weekday:'long', year:'numeric', month:'long', day:'numeric' });

  /* ── Build a single task <li> ── */
  function buildItem(task) {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.done ? ' is-done' : '');
    li.dataset.id = task.id;
    li.innerHTML = `
      <div class="task-checkbox ${task.done ? 'checked' : ''}"
           data-action="toggle" role="checkbox"
           aria-checked="${task.done}" tabindex="0"></div>
      <div class="task-body">
        <p class="task-text">${esc(task.text)}</p>
        <div class="task-meta">
          <span class="badge-cat badge-${task.category}">${task.category}</span>
          <span class="badge-priority priority-${task.priority}">${task.priority}</span>
          <span class="task-timestamp">${fmtTime(task.createdAt)}</span>
        </div>
      </div>
      <div class="task-actions">
        <button class="action-btn edit"   data-action="edit"   aria-label="Edit">✎</button>
        <button class="action-btn delete" data-action="delete" aria-label="Delete">✕</button>
      </div>`;
    return li;
  }

  /* ── Render the full task list ── */
  function renderTasks(tasks) {
    const list = $('task-list');
    list.innerHTML = '';
    if (!tasks.length) {
      list.hidden = true;
      $('empty-state').hidden = false;
    } else {
      list.hidden = false;
      $('empty-state').hidden = true;
      tasks.forEach(t => list.appendChild(buildItem(t)));
    }
    if (tasks.length) {
      $('bulk-bar').hidden = false;
      $('bulk-label').textContent = `${tasks.length} task${tasks.length !== 1 ? 's' : ''}`;
    } else {
      $('bulk-bar').hidden = true;
    }
  }

  /* ── Update sidebar counts & progress bar ── */
  function renderCounts(c) {
    $('count-all').textContent       = c.all;
    $('count-active').textContent    = c.active;
    $('count-completed').textContent = c.completed;
    const pct = c.all ? Math.round((c.completed / c.all) * 100) : 0;
    $('progress-bar').style.width = pct + '%';
    $('progress-pct').textContent = pct + '%';
  }

  const TITLES = { all:'All Tasks', active:'Active Tasks', completed:'Completed', work:'Work', personal:'Personal', health:'Health', learning:'Learning' };

  function renderHeader(f) {
    $('page-title').textContent = TITLES[f] || 'Tasks';
    $('page-date').textContent  = fmtDate();
  }

  function setActiveNav(f) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === f));
  }

  /* ── Add form ── */
  const openAddForm  = () => { const w=$('add-form-wrap'); w.classList.add('open'); w.removeAttribute('aria-hidden'); $('task-input').focus(); };
  const closeAddForm = () => { const w=$('add-form-wrap'); w.classList.remove('open'); w.setAttribute('aria-hidden','true'); $('task-input').value=''; $('task-category').value='work'; $('task-priority').value='medium'; };
  const getAddForm   = () => ({ text:$('task-input').value.trim(), category:$('task-category').value, priority:$('task-priority').value });

  /* ── Edit modal ── */
  const openEditModal  = task => { $('edit-input').value=$('edit-input').value||''; $('edit-input').value=task.text; $('edit-category').value=task.category; $('edit-priority').value=task.priority; $('modal-overlay').classList.add('open'); $('modal-overlay').removeAttribute('aria-hidden'); $('edit-input').focus(); $('edit-input').select(); };
  const closeEditModal = ()   => { $('modal-overlay').classList.remove('open'); $('modal-overlay').setAttribute('aria-hidden','true'); };
  const getEditForm    = ()   => ({ text:$('edit-input').value.trim(), category:$('edit-category').value, priority:$('edit-priority').value });

  const initDate = () => { $('page-date').textContent = fmtDate(); };

  return { renderTasks, renderCounts, renderHeader, setActiveNav, openAddForm, closeAddForm, getAddForm, openEditModal, closeEditModal, getEditForm, initDate };
})();
