function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function pageShell({ title, description, bodyClass = "", bodyTheme = "", prefix = "", nav, content }) {
  const themeAttr = bodyTheme ? ` data-theme="${escapeHtml(bodyTheme)}"` : "";

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="theme-color" content="#d8e8ff" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <link rel="icon" href="${prefix}assets/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="${prefix}assets/styles.css" />
    <script defer src="${prefix}assets/site.js"></script>
  </head>
  <body class="${escapeHtml(bodyClass)}"${themeAttr}>
    <a class="skip-link" href="#content">Skip to content</a>
    ${nav}
    <main id="content">
      ${content}
    </main>
  </body>
</html>`;
}

function renderNav({ prefix = "", brandLabel, brandHref, links }) {
  return `<nav class="site-nav" aria-label="Primary">
    <div class="shell nav-row">
      <a class="brand" href="${brandHref}">
        <span class="brand-mark" aria-hidden="true">A</span>
        <span>${escapeHtml(brandLabel)}</span>
      </a>
      <div class="nav-links">
        ${links
          .map(
            (link) =>
              `<a${link.current ? ' aria-current="page"' : ""} href="${link.href}">${escapeHtml(link.label)}</a>`,
          )
          .join("")}
      </div>
    </div>
  </nav>`;
}

function renderFooter({ prefix = "", name, summary, links }) {
  return `<footer class="footer">
    <div class="shell footer-row">
      <div>
        <strong>${escapeHtml(name)}</strong>
        <p class="footer-copy">${summary}</p>
      </div>
      <div class="footer-links">
        ${links.map((link) => `<a href="${link.href}">${escapeHtml(link.label)}</a>`).join("")}
      </div>
      <div class="muted">© <span data-year></span> ${escapeHtml(name)}</div>
    </div>
  </footer>`;
}

function renderScreenshot(shot, prefix) {
  return `<figure class="shot-figure">
    <div class="shot-shell">
      <img src="${prefix}${shot.src}" alt="${escapeHtml(shot.alt)}" loading="lazy" />
    </div>
  </figure>`;
}

export function renderHome({ site, apps }) {
  const nav = renderNav({
    brandLabel: "Ajay Yadav Apps",
    brandHref: "./",
    links: [
      { label: "Home", href: "./", current: true },
      { label: "Nudgy", href: "./nudgy/" },
      { label: "Layout Studio", href: "./layout-studio/" },
    ],
  });

  const cards = apps
    .map(
      (app) => `<article class="app-card">
        <span class="eyebrow ${app.accent === "rose" ? "eyebrow-rose" : "eyebrow-blue"}">${escapeHtml(app.indexEyebrow)}</span>
        <h2>${escapeHtml(app.name)}</h2>
        <p class="lede">${escapeHtml(app.shortDescription)}</p>
        <div class="meta-list">
          <span>${escapeHtml(app.status)}</span>
          <span>${escapeHtml(app.slug === "nudgy" ? "Support and privacy live" : "Support contact pending")}</span>
        </div>
        <div class="button-row">
          <a class="button" href="./${app.slug}/">Open app page</a>
          <a class="button-secondary" href="./${app.slug}/privacy/">Privacy</a>
          <a class="button-tertiary" href="./${app.slug}/support/">Support</a>
        </div>
        <div class="app-card-visual">
          <img src="./${app.rootShot.src}" alt="${escapeHtml(app.rootShot.alt)}" loading="lazy" />
        </div>
      </article>`,
    )
    .join("");

  const content = `<section class="hero">
      <div class="shell root-grid">
        <article class="hero-card">
          <span class="eyebrow eyebrow-blue">Multi-app public site</span>
          <h1>Marketing, privacy, and support pages that stay easy to ship.</h1>
          <p class="lede">
            This site is the public home for lightweight iPhone app pages, with
            GitHub Pages-safe routes, static assets, and per-app support and privacy links.
          </p>
          <div class="button-row">
            <a class="button" href="./nudgy/">View Nudgy</a>
            <a class="button-secondary" href="./layout-studio/">View Layout Studio</a>
          </div>
          <div class="meta-list">
            <span>Static hosting only</span>
            <span>Future apps can be added cleanly</span>
            <span>No backend required</span>
          </div>
        </article>
        <aside class="summary-card">
          <span class="eyebrow eyebrow-gold">Current apps</span>
          <p>
            Nudgy is ready with current marketing, privacy, and support pages. Layout Studio
            includes a public page structure and privacy summary, but its support contact still needs to be finalized.
          </p>
          <div class="shortcut-row">
            <a class="button-secondary" href="./nudgy/support/">Nudgy support</a>
            <a class="button-tertiary" href="./layout-studio/support/">Layout Studio support</a>
          </div>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="shell">
        <div class="section-head">
          <span class="eyebrow">Available app sections</span>
          <h2>Each app gets its own stable public route.</h2>
        </div>
        <div class="card-grid">
          ${cards}
        </div>
      </div>
    </section>

    ${renderFooter({
      name: "Ajay Yadav Apps",
      summary: "Static public pages for app launches, support, and privacy.",
      links: [
        { label: "Home", href: "./" },
        { label: "Nudgy", href: "./nudgy/" },
        { label: "Layout Studio", href: "./layout-studio/" },
      ],
    })}`;

  return pageShell({
    title: `${site.title} | App Pages`,
    description: site.description,
    nav,
    content,
  });
}

function appNav(app, current, prefix) {
  return renderNav({
    prefix,
    brandLabel: app.name,
    brandHref: `${prefix}${app.slug}/`,
    links: [
      { label: "Apps", href: `${prefix}` , current: false },
      { label: "Home", href: `${prefix}${app.slug}/`, current: current === "home" },
      { label: "Support", href: `${prefix}${app.slug}/support/`, current: current === "support" },
      { label: "Privacy", href: `${prefix}${app.slug}/privacy/`, current: current === "privacy" },
    ],
  });
}

function appFooter(app, prefix) {
  return renderFooter({
    prefix,
    name: app.name,
    summary:
      app.slug === "nudgy"
        ? "A calm, low-pressure task app built around one clear Next Move."
        : "A touch-first collage editor with a simple public support and privacy structure.",
    links: [
      { label: "All apps", href: `${prefix}` },
      { label: "Home", href: `${prefix}${app.slug}/` },
      { label: "Support", href: `${prefix}${app.slug}/support/` },
      { label: "Privacy", href: `${prefix}${app.slug}/privacy/` },
    ],
  });
}

export function renderAppHome(app) {
  const prefix = "../";
  const nav = appNav(app, "home", prefix);
  const content = `<section class="hero">
      <div class="shell hero-grid">
        <article class="hero-card">
          <span class="eyebrow ${app.accent === "rose" ? "eyebrow-rose" : "eyebrow-blue"}">${escapeHtml(app.indexEyebrow)}</span>
          <h1>${escapeHtml(app.heroTitle)}</h1>
          <p class="lede">${escapeHtml(app.heroDescription)}</p>
          <div class="button-row">
            <a class="button" href="./support/">Support</a>
            <a class="button-secondary" href="./privacy/">Privacy Policy</a>
          </div>
          <div class="meta-list">
            ${app.heroPoints.map((point) => `<span>${escapeHtml(point)}</span>`).join("")}
          </div>
        </article>
        <aside class="summary-card">
          <div class="highlight-card">
            <span class="eyebrow ${app.accent === "rose" ? "eyebrow-rose" : "eyebrow-green"}">Current product view</span>
            <p>${escapeHtml(app.heroShot.caption)}</p>
          </div>
          ${renderScreenshot(app.heroShot, prefix)}
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="shell">
        <div class="section-head">
          <span class="eyebrow eyebrow-gold">What the current product shows</span>
          <h2>${escapeHtml(app.slug === "nudgy" ? "Current screenshots from the latest app build" : "Representative screens from the current app repo")}</h2>
          <p class="lede">${escapeHtml(
            app.slug === "nudgy"
              ? "These images come from the latest Nudgy simulator/App Store screenshot set in the repository and are displayed without crop-heavy framing."
              : "These screens reflect the current Layout Studio repo and are shown full-frame so interface details stay legible on mobile and desktop.",
          )}</p>
        </div>

        <div class="feature-grid">
          ${app.featureCards
            .map(
              (card) => `<article class="feature-card">
                <span class="badge ${card.badgeClass}">${escapeHtml(card.badge)}</span>
                <h3>${escapeHtml(card.title)}</h3>
                <p>${escapeHtml(card.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="shell">
        <div class="gallery-grid" data-count="${app.gallery.length}">
          ${app.gallery
            .map(
              (shot) => `<article class="shot-card">
                ${renderScreenshot(shot, prefix)}
                <div>
                  <h3>${escapeHtml(shot.caption)}</h3>
                </div>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="shell split-grid">
        <article class="page-card">
          <span class="eyebrow ${app.accent === "rose" ? "eyebrow-rose" : "eyebrow-green"}">${escapeHtml(
            app.slug === "nudgy" ? "Low-pressure structure" : "Simple editing flow",
          )}</span>
          <h2>${escapeHtml(
            app.slug === "nudgy" ? "Designed to guide, not overwhelm" : "Built around a short path from canvas to export",
          )}</h2>
          <p class="lede">${escapeHtml(
            app.slug === "nudgy"
              ? "Nudgy is for people who want more traction from their task list without turning the day into a productivity performance."
              : "Layout Studio focuses on a small number of direct actions instead of a crowded desktop-style editing model.",
          )}</p>
        </article>
        <div class="stack">
          ${app.detailCards
            .map(
              (card) => `<article class="feature-card">
                <h3>${escapeHtml(card.title)}</h3>
                <p>${escapeHtml(card.body)}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    ${app.slug === "layout-studio"
      ? `<section class="section">
          <div class="shell">
            <article class="note-card">
              <span class="eyebrow eyebrow-rose">Manual follow-up</span>
              <h2>One launch detail is still missing.</h2>
              <p class="lede">
                The inspected repos do not clearly publish a final public support address for Layout Studio.
                Before using these URLs in App Store Connect, replace the placeholder text on the support page with a monitored contact.
              </p>
            </article>
          </div>
        </section>`
      : ""}

    ${appFooter(app, prefix)}`;

  return pageShell({
    title: `${app.name} | App Page`,
    description: app.shortDescription,
    bodyTheme: app.theme,
    prefix,
    nav,
    content,
  });
}

export function renderPrivacyPage(app) {
  const prefix = "../../";
  const nav = appNav(app, "privacy", prefix);
  const content = `<section class="page-hero">
      <div class="shell">
        <article class="page-card">
          <span class="eyebrow ${app.accent === "rose" ? "eyebrow-rose" : "eyebrow-blue"}">Privacy policy</span>
          <h1>${escapeHtml(app.slug === "nudgy" ? "Your task data should stay yours." : "Clear, limited, and easy to understand.")}</h1>
          <p class="lede">${escapeHtml(
            app.slug === "nudgy"
              ? `This policy reflects the local-first Nudgy app behavior visible in the repository as of ${app.privacyUpdated}.`
              : `This policy reflects the current Layout Studio app behavior visible in the repository as of ${app.privacyUpdated}.`,
          )}</p>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="shell legal-grid">
        ${app.privacySections
          .map((section) => {
            const body = section.list
              ? `<ul>${section.list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
              : `<p>${escapeHtml(section.body)}</p>`;
            return `<article class="legal-card">
              <h3>${escapeHtml(section.title)}</h3>
              ${body}
            </article>`;
          })
          .join("")}
        <article class="legal-card">
          <h3>Contact</h3>
          <p>${app.privacyContact}</p>
          <p class="muted">Last updated: ${escapeHtml(app.privacyUpdated)}</p>
        </article>
      </div>
    </section>

    ${appFooter(app, prefix)}`;

  return pageShell({
    title: `${app.name} Privacy Policy`,
    description: `${app.name} privacy policy and current app behavior summary.`,
    bodyTheme: app.theme,
    prefix,
    nav,
    content,
  });
}

export function renderSupportPage(app) {
  const prefix = "../../";
  const nav = appNav(app, "support", prefix);
  const content = `<section class="page-hero">
      <div class="shell">
        <article class="page-card">
          <span class="eyebrow ${app.accent === "rose" ? "eyebrow-rose" : "eyebrow-green"}">Support</span>
          <h1>${escapeHtml(app.slug === "nudgy" ? "Help with Nudgy" : "Support for Layout Studio")}</h1>
          <p class="lede">${escapeHtml(
            app.slug === "nudgy"
              ? "Use this page for bugs, reminder issues, accessibility feedback, or questions about how the app works."
              : "This page is the stable public support route for Layout Studio. One contact detail still needs to be finalized before launch.",
          )}</p>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="shell support-grid">
        ${app.supportSections
          .map(
            (section) => `<article class="support-card">
              <h3>${escapeHtml(section.title)}</h3>
              <p>${section.body}</p>
            </article>`,
          )
          .join("")}
      </div>
    </section>

    ${app.slug === "layout-studio"
      ? `<section class="section">
          <div class="shell">
            <article class="note-card">
              <span class="eyebrow eyebrow-rose">Needs update before launch</span>
              <p class="lede">
                Replace the placeholder support note on this page with a monitored public contact before you use this URL in App Store Connect.
              </p>
            </article>
          </div>
        </section>`
      : ""}

    ${appFooter(app, prefix)}`;

  return pageShell({
    title: `${app.name} Support`,
    description: `Public support page for ${app.name}.`,
    bodyTheme: app.theme,
    prefix,
    nav,
    content,
  });
}
