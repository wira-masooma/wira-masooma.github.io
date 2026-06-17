/* ============================================================================
   app.js  —  Reads the arrays in data.js and renders them into the page.
   You normally never need to edit this file. Edit data.js instead.
   ============================================================================ */

/* Small helper: escape text so content can't break the HTML. */
const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/* Set the text/attribute of an element if it exists. */
const setText = (sel, value) => {
  const el = document.querySelector(sel);
  if (el) el.textContent = value;
};

/* --------------------------------------------------------------------------
   PROFILE: name, headline, photo, resume link, hero meta
   -------------------------------------------------------------------------- */
function renderProfile() {
  document.querySelectorAll("[data-name]").forEach((el) => (el.textContent = profile.name));
  setText("[data-headline]", profile.headline);
  setText("[data-subtext]", profile.subtext);

  const photo = document.querySelector("[data-photo]");
  if (photo) photo.src = profile.photo;

  document.querySelectorAll("[data-resume]").forEach((el) => (el.href = profile.resume));

  const meta = document.querySelector("[data-hero-meta]");
  if (meta) {
    meta.innerHTML = `
      <li>${esc(profile.location)}</li>
      <li><a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a></li>
      <li><a href="${esc(profile.linkedin)}" target="_blank" rel="noopener">LinkedIn</a></li>
    `;
  }

  setText("[data-year]", new Date().getFullYear());
}

/* --------------------------------------------------------------------------
   SKILLS: pills
   -------------------------------------------------------------------------- */
function renderSkills() {
  const wrap = document.querySelector("[data-skills]");
  if (!wrap) return;
  wrap.innerHTML = skills.map((s) => `<li class="pill">${esc(s)}</li>`).join("");
}

/* --------------------------------------------------------------------------
   EDUCATION: vertical timeline
   -------------------------------------------------------------------------- */
function renderEducation() {
  const wrap = document.querySelector("[data-education]");
  if (!wrap) return;
  wrap.innerHTML = education
    .map(
      (e) => `
      <article class="tl-item reveal">
        <div class="tl-item__marker" aria-hidden="true"></div>
        <div class="tl-item__body">
          <div class="tl-item__top">
            <h3>${esc(e.degree)}</h3>
            <span class="tl-item__period">${esc(e.period)}</span>
          </div>
          <p class="tl-item__school">${esc(e.school)} · ${esc(e.location)}</p>
          <p class="tl-item__note">${esc(e.note)}</p>
        </div>
      </article>`
    )
    .join("");
}

/* --------------------------------------------------------------------------
   EXPERIENCE: interactive cards
   -------------------------------------------------------------------------- */
function renderExperience() {
  const wrap = document.querySelector("[data-experience]");
  if (!wrap) return;
  wrap.innerHTML = experience
    .map(
      (x) => `
      <article class="exp-card reveal">
        ${x.metric ? `<span class="exp-card__metric">${esc(x.metric)}</span>` : ""}
        <h3 class="exp-card__role">${esc(x.role)}</h3>
        <p class="exp-card__org">${esc(x.org)} · ${esc(x.location)}</p>
        <p class="exp-card__period">${esc(x.period)}</p>
        <ul class="exp-card__points">
          ${x.points.map((p) => `<li>${esc(p)}</li>`).join("")}
        </ul>
      </article>`
    )
    .join("");
}

/* --------------------------------------------------------------------------
   PROJECTS: featured = large case-study card, others = compact
   -------------------------------------------------------------------------- */
function renderProjects() {
  const wrap = document.querySelector("[data-projects]");
  if (!wrap) return;
  wrap.innerHTML = projects
    .map((p) => {
      const pills = p.stack.map((s) => `<span class="pill pill--solid">${esc(s)}</span>`).join("");
      const link = p.link
        ? `<a class="proj-card__link" href="${esc(p.link)}" target="_blank" rel="noopener">View project →</a>`
        : "";
      const media = p.image
        ? `<div class="proj-card__media"><img src="${esc(p.image)}" alt="${esc(p.title)} preview" loading="lazy" onerror="this.parentElement.classList.add('proj-card__media--empty')" /></div>`
        : `<div class="proj-card__media proj-card__media--empty"></div>`;
      const highlights = p.highlights
        ? `<ul class="proj-card__points">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>`
        : "";

      return `
        <article class="proj-card ${p.featured ? "proj-card--featured" : ""} reveal">
          ${media}
          <div class="proj-card__body">
            <div class="proj-card__head">
              <h3 class="proj-card__title">${esc(p.title)}</h3>
              <p class="proj-card__org">${esc(p.org)} · ${esc(p.period)}</p>
            </div>
            <p class="proj-card__summary">${esc(p.summary)}</p>
            ${highlights}
            <div class="proj-card__stack">${pills}</div>
            ${link}
          </div>
        </article>`;
    })
    .join("");
}

/* --------------------------------------------------------------------------
   AWARDS: pink banner grid
   -------------------------------------------------------------------------- */
function renderAwards() {
  const wrap = document.querySelector("[data-awards]");
  if (!wrap) return;
  wrap.innerHTML = awards
    .map(
      (a) => `
      <article class="award reveal">
        <h3 class="award__title">${esc(a.title)}</h3>
        <p class="award__detail">${esc(a.detail)}</p>
      </article>`
    )
    .join("");
}

/* --------------------------------------------------------------------------
   FOOTER LINKS
   -------------------------------------------------------------------------- */
function renderFooter() {
  const wrap = document.querySelector("[data-footer-links]");
  if (!wrap) return;
  wrap.innerHTML = `
    <a href="mailto:${esc(profile.email)}" class="btn btn--pink">Email me</a>
    <a href="${esc(profile.linkedin)}" target="_blank" rel="noopener" class="btn btn--glass">LinkedIn</a>
  `;
}

/* --------------------------------------------------------------------------
   INTERACTIONS: mobile menu, scroll reveal, nav shadow on scroll
   -------------------------------------------------------------------------- */
function initInteractions() {
  // Mobile menu toggle
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("nav__links--open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("nav__links--open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // Shadow / condensed nav on scroll
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("nav--scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Scroll-reveal (respects reduced-motion)
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
}

/* --------------------------------------------------------------------------
   BOOT
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderSkills();
  renderEducation();
  renderExperience();
  renderProjects();
  renderAwards();
  renderFooter();
  initInteractions();
});
