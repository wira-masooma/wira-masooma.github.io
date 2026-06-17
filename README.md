# Wira Masooma Zaidi — Portfolio

A data-driven, interactive portfolio website built for computational biology and data science. The site features an "Algorithmic Biology" aesthetic with glassmorphism, dynamic floating background shapes, and smooth scroll animations.

## Tech Stack
- **React & Vite**: Fast development and optimized production builds.
- **Tailwind CSS v4**: Utility-first styling with a custom ice-blue and baby-pink color palette.
- **Framer Motion**: For scroll reveals, hover states, and dynamic SVG background blobs.
- **Lucide React**: Clean, modern iconography.

## How to Edit Content
The site uses a data-driven architecture. You do not need to edit the React components to update your information. All content lives in the `src/data/` folder:

- `profile.js`: Your name, tagline, email, and social links.
- `education.js`: Your degrees and university details.
- `experience.js`: Your work and leadership roles.
- `projects.js`: Your featured case studies and research projects.
- `awards.js`: Your scholarships and achievements.
- `skills.js`: Your technical skills categorized.

To add a new project or experience, simply add a new object to the array in the respective file. The UI will automatically render it!

## Running Locally
To preview the website on your own machine:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173/` in your browser.

## Deployment
The website is configured to automatically deploy to **GitHub Pages** using GitHub Actions. 
Every time you commit and push changes to the `main` branch, the `deploy.yml` workflow will build the site and publish it live.

```bash
git add .
git commit -m "Your commit message"
git push origin main
```
