# Wira Masooma Zaidi — Portfolio

A static portfolio site (plain HTML / CSS / vanilla JS, no build step) in an
"Algorithmic Biology" theme — ice blue + baby pink, glassmorphism, soft gradients.

---

## 📁 What's in here

```
wira-portfolio/
├── index.html                 ← the page (don't usually need to edit)
├── css/
│   └── styles.css             ← all styling (don't usually need to edit)
├── js/
│   ├── data.js                ← ⭐ EDIT THIS to add experience / projects / awards
│   └── app.js                 ← renders data.js into the page (leave alone)
├── assets/
│   └── images/
│       ├── profile/
│       │   └── wira.jpg        ← ⭐ YOUR PHOTO GOES HERE
│       ├── projects/           ← optional project thumbnails
│       └── logos/              ← optional university/company logos
├── resume/
│   └── Wira_Masooma_Zaidi_Resume.pdf   ← ⭐ YOUR RESUME PDF GOES HERE
└── README.md
```

---

## 🖼️ Where to put your profile picture

1. Save your photo as **`wira.jpg`** (square works best — it's shown in a circle).
2. Put it in: **`assets/images/profile/wira.jpg`** (replace the placeholder already there).
3. That's it — the hero picks it up automatically.

If you'd rather use a different filename or a `.png`, just update this one line
near the top of **`js/data.js`**:

```js
photo: "assets/images/profile/wira.jpg",
```

**Your resume:** drop your PDF in the `resume/` folder. To keep the "Download Resume"
button working with no edits, name it exactly:
`Wira_Masooma_Zaidi_Resume.pdf`. (Or change the `resume:` line in `data.js`.)

**Project thumbnails (optional):** drop images in `assets/images/projects/`
(e.g. `polymer.jpg`, `protein.jpg`). Until you add them, each project shows a
soft "neural node" placeholder graphic automatically.

---

## ✏️ How to add a new job, project, or award

Open **`js/data.js`** and copy an existing block inside the matching array.
For example, to add a project, copy one `{ ... }` in the `projects` array,
paste it, edit the text, and save. The site updates itself — you never touch
the HTML or CSS.

---

## 👀 Preview locally

Just **double-click `index.html`** to open it in your browser. No server needed.

---

## 🚀 Deploy to GitHub Pages (free, ~2 minutes)

1. Create a new repository on GitHub (e.g. `portfolio`). Keep it **Public**.
2. Upload everything in this folder to the repo:
   - Easiest way: on the repo page click **Add file → Upload files**, drag in all
     the files and folders, and **Commit**.
   - Or via git:
     ```bash
     git init
     git add .
     git commit -m "Initial portfolio"
     git branch -M main
     git remote add origin https://github.com/<your-username>/portfolio.git
     git push -u origin main
     ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch = `main`** and **Folder = `/ (root)`**, then **Save**.
6. Wait ~1 minute. Your site goes live at:
   **`https://<your-username>.github.io/portfolio/`**

Because all paths are relative, the site works correctly under that
`/portfolio/` subpath with no extra configuration.

### Updating the live site later
Edit `js/data.js` (or add images), commit/upload the change, and GitHub Pages
redeploys automatically within a minute.

### Optional: a custom domain
If you later buy a domain, add it under **Settings → Pages → Custom domain**
and GitHub will guide you through the DNS records.

---

## 🎨 Tweaking the look
All colors live as variables at the top of `css/styles.css` under `:root`
(`--ice-100`, `--pink-200`, `--navy`, etc.). Change them in one place to
re-tint the whole site.
