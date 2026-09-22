# Rishabh Jain — Portfolio

A static, single-page portfolio site. No build step, no dependencies to install —
just HTML, CSS and a small bit of JS.

## Files

```
index.html    the page
style.css     all styling
script.js     active-section nav highlighting + mobile menu
```

## Host it on GitHub Pages

1. Create a new repository on GitHub — for a personal site, name it
   `<your-username>.github.io` (this gets you `https://<your-username>.github.io`
   with no extra path). Any other name works too, just with a `/repo-name/` suffix
   on the URL.
2. Upload these three files (`index.html`, `style.css`, `script.js`) to the
   repository root — either drag-and-drop them in the GitHub web UI ("Add file" →
   "Upload files"), or from your machine:
   ```bash
   git init
   git add index.html style.css script.js README.md
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
6. GitHub builds the site — this takes a minute or two. Refresh the Pages
   settings page and it will show the live URL.

## Editing later

- Content lives in `index.html` — each section is clearly labeled
  (`<section id="research">`, `<section id="projects">`, etc.).
- Colors, fonts and spacing are all defined as CSS custom properties at the
  top of `style.css`, under `:root` — change a value there and it updates
  everywhere it's used.
- To add a new project, copy one `<article class="project">…</article>` block
  in the Projects section and edit the text.
