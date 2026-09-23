# Rishabh Jain — Portfolio

A static, multi-page portfolio site. No build step, no dependencies to
install — just HTML, CSS and a small bit of JS.

## Files

```
index.html         Home — intro, photo, contact links
research.html       Research focus
education.html      Education timeline
experience.html     Workshops & camps
projects.html        Blind Assisting Bot, Abusive Language Detection
papers.html          Publications
achievements.html    UGC-NET, GATE, NPTEL Star
style.css            All styling
script.js            Active-page nav highlighting + mobile menu
assets/rishabh.jpg   Profile photo
```

## Host it on GitHub Pages

1. Create a new repository on GitHub — for a personal site, name it
   `<your-username>.github.io` (this gets you `https://<your-username>.github.io`
   with no extra path). Any other name works too, just with a `/repo-name/` suffix
   on the URL.
2. Upload every file above — including the `assets` folder — to the
   repository root. Either drag-and-drop them in the GitHub web UI ("Add file" →
   "Upload files", which supports folders), or from your machine:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, pick `main` from the dropdown — a second dropdown for
   the folder (`/ (root)` vs `/docs`) appears once a branch is selected.
   Choose `/ (root)`, then **Save**.
   - If that second dropdown never appears, it usually means nothing has
     been pushed to `main` yet — check that `index.html` shows up on the
     repo's main page first, then come back to this settings page.
6. GitHub builds the site — this takes a minute or two. Refresh the Pages
   settings page and it will show the live URL.

## Editing later

- Each page is its own `.html` file — edit the one you want; the sidebar
  nav is duplicated at the top of every file, so add/rename a page in all
  of them if you add one.
- Colors, fonts and spacing are all defined as CSS custom properties at the
  top of `style.css`, under `:root` — change a value there and it updates
  everywhere it's used.
- To add another project, copy one `<article class="project">…</article>`
  block in `projects.html`. To add another paper, copy the
  `<a class="paper-card">…</a>` block in `papers.html`.
