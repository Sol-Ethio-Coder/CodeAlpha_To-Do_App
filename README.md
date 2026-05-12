# ✦ Tasko — Daily Task Manager

A clean, modern task management app to help you organize work, personal goals, health routines, and learning — all in one place.

![Tasko Screenshot](screenshot.png) *(Add a screenshot if you have one)*

## ✨ Features

- **Task filtering** — All, Active, Completed
- **Category organization** — Work, Personal, Health, Learning
- **Priority levels** — Low, Medium, High
- **Real-time progress tracking** — See your daily completion rate
- **Edit & delete tasks** — Full CRUD functionality
- **Bulk actions** — Clear completed or all tasks at once
- **Mobile responsive** — Optimized for all screen sizes
- **Modern UI** — Animated background, smooth interactions

## 🛠️ Tech Stack

- HTML5
- CSS3 (with responsive design)
- Vanilla JavaScript
- LocalStorage for data persistence

## 🚀 Live Demo

[View Live](https://your-username.github.io/tasko/) *(Add your GitHub Pages link here)*

## 📁 Project Structure

Here's the updated footer code with your photo instead of the letter "S":

html
<!-- ── Footer ── -->
<footer class="site-footer" role="contentinfo">
  <div class="footer-inner">
    <div class="footer-credit">
      <div class="footer-avatar" aria-hidden="true">
        <img src="your-photo.jpg" alt="Sol Ethio Coder" class="footer-avatar-img">
      </div>
      <div>
        <div class="footer-name">Sol Ethio Coder</div>
        <div class="footer-copy">&copy; <span id="footer-year"></span> &mdash; All rights reserved</div>
      </div>
    </div>
    <nav class="footer-links" aria-label="Creator links">
      <a class="footer-link link-github" href="https://github.com/Sol-Ethio-Coder" target="_blank" rel="noopener noreferrer">
        <span class="footer-link-icon">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
        </span>
        GitHub
      </a>
      <div class="footer-divider" aria-hidden="true"></div>
      <a class="footer-link link-portfolio" href="https://solomon-ashagre.netlify.app/" target="_blank" rel="noopener noreferrer">
        <span class="footer-link-icon">🌐</span>
        Portfolio
      </a>
    </nav>
  </div>
</footer>
And add this CSS to style the avatar image:

css
.footer-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
Replace "your-photo.jpg" with the actual path to your photo file, for example:

"images/my-photo.jpg" if in an images folder

"../assets/avatar.png" for relative paths

Or a URL like "https://example.com/photo.jpg"

The CSS makes the image circular and properly sized within the avatar container.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tasko — Daily Task Manager</title>

  <!-- Favicons -->
  <link rel="icon" type="image/x-icon"  href="favicon.ico" />
  <link rel="icon" type="image/svg+xml" href="favicon.svg" />
  <link rel="apple-touch-icon" sizes="180x180" href="favicon-180.png" />
  <meta name="theme-color" content="#0D0D14" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

  <!-- Stylesheets -->
  <link rel="stylesheet" href="/CSS/reset.css" />
  <link rel="stylesheet" href="/CSS/style.css" />
  <link rel="stylesheet" href="/CSS/mobile.css" />
  <link rel="stylesheet" href="/CSS/background.css" />
</head>
<body>

  <!-- ── Animated background ── -->
  <div class="bg-canvas" aria-hidden="true">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
    <div class="orb orb-4"></div>
    <div class="orb orb-5"></div>
  </div>
  <div class="bg-grain"   aria-hidden="true"></div>
  <div class="bg-grid"    aria-hidden="true"></div>
  <div class="particles"  id="particles" aria-hidden="true"></div>

  <!-- ── Mobile: backdrop + topbar + FAB ── -->
  <div class="sidebar-backdrop" id="sidebar-backdrop" aria-hidden="true"></div>

  <header class="topbar">
    <div class="topbar-brand">
      <span class="topbar-brand-icon">✦</span>
      <span class="topbar-brand-name">Tasko</span>
    </div>
    <button class="btn-hamburger" id="btn-hamburger" aria-label="Open menu" aria-expanded="false">☰</button>
  </header>

  <button class="btn-fab" id="btn-fab" aria-label="Add new task">+</button>

  <!-- ── App wrapper ── -->
  <div class="app-wrapper">

    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
      <button class="btn-sidebar-close" id="btn-sidebar-close" aria-label="Close menu">✕</button>

      <div class="brand">
        <span class="brand-icon">✦</span>
        <span class="brand-name">Tasko</span>
      </div>

      <nav class="nav-filters" aria-label="Task filters">
        <button class="nav-btn active" data-filter="all">
          <span class="nav-icon">◈</span> All Tasks
          <span class="nav-count" id="count-all">0</span>
        </button>
        <button class="nav-btn" data-filter="active">
          <span class="nav-icon">◇</span> Active
          <span class="nav-count" id="count-active">0</span>
        </button>
        <button class="nav-btn" data-filter="completed">
          <span class="nav-icon">◆</span> Completed
          <span class="nav-count" id="count-completed">0</span>
        </button>
      </nav>

      <div class="sidebar-divider"></div>

      <nav class="nav-categories" aria-label="Category filters">
        <p class="nav-section-label">Categories</p>
        <button class="nav-btn" data-filter="work">
          <span class="cat-dot cat-work"></span> Work
        </button>
        <button class="nav-btn" data-filter="personal">
          <span class="cat-dot cat-personal"></span> Personal
        </button>
        <button class="nav-btn" data-filter="health">
          <span class="cat-dot cat-health"></span> Health
        </button>
        <button class="nav-btn" data-filter="learning">
          <span class="cat-dot cat-learning"></span> Learning
        </button>
      </nav>

      <div class="sidebar-footer">
        <div class="progress-label">
          <span>Today's progress</span>
          <span id="progress-pct">0%</span>
        </div>
        <div class="progress-track">
          <div class="progress-bar" id="progress-bar"></div>
        </div>
      </div>
    </aside>

    <!-- Main content -->
    <main class="main">
      <header class="main-header">
        <div>
          <h1 class="page-title" id="page-title">All Tasks</h1>
          <p  class="page-date"  id="page-date"></p>
        </div>
        <button class="btn-add-open" id="btn-open-form" aria-label="Add new task">
          <span>+</span> New Task
        </button>
      </header>

      <!-- Add form -->
      <div class="add-form-wrap" id="add-form-wrap" aria-hidden="true">
        <form id="add-form" novalidate>
          <div class="form-row">
            <input
              type="text" class="form-input" id="task-input"
              placeholder="What needs to be done?"
              maxlength="200" autocomplete="off"
            />
          </div>
          <div class="form-row form-row-meta">
            <select class="form-select" id="task-category">
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="health">Health</option>
              <option value="learning">Learning</option>
            </select>
            <select class="form-select" id="task-priority">
              <option value="low">Low priority</option>
              <option value="medium" selected>Medium priority</option>
              <option value="high">High priority</option>
            </select>
            <div class="form-actions">
              <button type="button" class="btn-cancel" id="btn-cancel">Cancel</button>
              <button type="submit" class="btn-submit">Add Task</button>
            </div>
          </div>
        </form>
      </div>

      <!-- Task list -->
      <ul class="task-list" id="task-list" role="list"></ul>
      <div class="empty-state" id="empty-state" hidden>
        <div class="empty-icon">✦</div>
        <p class="empty-title">Nothing here</p>
        <p class="empty-sub">Add a task to get started</p>
      </div>

      <!-- Bulk actions -->
      <div class="bulk-bar" id="bulk-bar" hidden>
        <span class="bulk-label" id="bulk-label">0 tasks</span>
        <button class="bulk-btn" id="btn-clear-completed">Clear completed</button>
        <button class="bulk-btn bulk-btn-danger" id="btn-clear-all">Clear all</button>
      </div>
    </main>
  </div>

  <!-- ── Edit modal ── -->
  <div class="modal-overlay" id="modal-overlay" aria-hidden="true">
    <div class="modal" role="dialog" aria-modal="true">
      <h2 class="modal-title">Edit Task</h2>
      <form id="edit-form" novalidate>
        <input type="text" class="form-input" id="edit-input" maxlength="200" />
        <div class="form-row form-row-meta" style="margin-top:12px">
          <select class="form-select" id="edit-category">
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="health">Health</option>
            <option value="learning">Learning</option>
          </select>
          <select class="form-select" id="edit-priority">
            <option value="low">Low priority</option>
            <option value="medium">Medium priority</option>
            <option value="high">High priority</option>
          </select>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn-cancel" id="btn-modal-cancel">Cancel</button>
          <button type="submit" class="btn-submit">Save Changes</button>
        </div>
      </form>
    </div>
  </div>

  <!-- ── Footer ── -->
  <footer class="site-footer" role="contentinfo">
    <div class="footer-inner">
      <div class="footer-credit">
        <div class="footer-avatar" aria-hidden="true">
          <img src="/profile.jpg" alt="Sol Ethio Coder" class="footer-avatar-img">
        </div>
        <div>
          <div class="footer-name">Sol Ethio Coder</div>
          <div class="footer-copy">&copy; <span id="footer-year"></span> &mdash; All rights reserved</div>
        </div>
      </div>
      <nav class="footer-links" aria-label="Creator links">
        <a class="footer-link link-github" href="https://github.com/Sol-Ethio-Coder" target="_blank" rel="noopener noreferrer">
          <span class="footer-link-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </span>
          GitHub
        </a>
        <div class="footer-divider" aria-hidden="true"></div>
        <a class="footer-link link-portfolio" href="https://sol-ethio-coder.netlify.app/" target="_blank" rel="noopener noreferrer">
          <span class="footer-link-icon">🌐</span>
          Portfolio
        </a>
      </nav>
    </div>
  </footer>

  <!-- ── Scripts (load order matters) ── -->
  <script src="/JS/storage.js"></script>
  <script src="/JS/tasks.js"></script>
  <script src="/JS/ui.js"></script>
  <script src="/JS/app.js"></script>
  <script src="/JS/background.js"></script>
  <script src="/JS/mobile.js"></script>

</body>
</html>


This is my to-do app index.html file hence I pushed to github and make me a short readme file
Here's a short, professional README file for your Tasko app:

markdown
# ✦ Tasko — Daily Task Manager

A clean, modern task management app to help you organize work, personal goals, health routines, and learning — all in one place.

![Tasko Screenshot](screenshot.png) *(Add a screenshot if you have one)*

## ✨ Features

- **Task filtering** — All, Active, Completed
- **Category organization** — Work, Personal, Health, Learning
- **Priority levels** — Low, Medium, High
- **Real-time progress tracking** — See your daily completion rate
- **Edit & delete tasks** — Full CRUD functionality
- **Bulk actions** — Clear completed or all tasks at once
- **Mobile responsive** — Optimized for all screen sizes
- **Modern UI** — Animated background, smooth interactions

## 🛠️ Tech Stack

- HTML5
- CSS3 (with responsive design)
- Vanilla JavaScript
- LocalStorage for data persistence

## 🚀 Live Demo

[View Live](https://your-username.github.io/tasko/) *(Add your GitHub Pages link here)*

## 📁 Project Structure

tasko/
├── index.html
├── CSS/
│ ├── reset.css
│ ├── style.css
│ ├── mobile.css
│ └── background.css
├── JS/
│ ├── storage.js
│ ├── tasks.js
│ ├── ui.js
│ ├── app.js
│ ├── background.js
│ └── mobile.js
├── favicon.ico
├── favicon.svg
├── favicon-180.png
└── profile.jpg

text

## 🧠 How to Use

1. Click **"New Task"** or the **+ FAB** button
2. Enter task name, choose category & priority
3. Click checkbox to mark complete
4. Use sidebar filters to organize your view
5. Edit any task by clicking the ✏️ icon
6. Track your daily progress in the sidebar

## 💾 Data Storage

All tasks are saved automatically to your browser's **LocalStorage** — your data persists even after closing the browser.

## 📱 Mobile Support

- Hamburger menu for sidebar navigation
- Floating Action Button (FAB) for quick task addition
- Fully responsive layout

## 🔧 Local Development

```bash
# Clone the repository
git clone https://github.com/Sol-Ethio-Coder/tasko.git

# Open index.html in your browser
# Or use Live Server in VS Code
📄 License
© 2026 Sol Ethio Coder — All rights reserved

Made with ✦ by Sol Ethio Coder



