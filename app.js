const iconMap = {
  website: `
    <svg viewBox="0 0 24 24" role="img" focusable="false">
      <path d="M3 12h18M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9Zm0 0a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
    </svg>
  `,
  github: `
    <svg viewBox="0 0 24 24" role="img" focusable="false">
      <path d="M9 19c-4 1.2-4-2-6-2m12 4v-3.1a2.7 2.7 0 0 0-.8-2.1c2.7-.3 5.6-1.3 5.6-6a4.7 4.7 0 0 0-1.2-3.2 4.3 4.3 0 0 0-.1-3.1s-1-.3-3.3 1.2a11.2 11.2 0 0 0-6 0C6.9 3.2 6 3.5 6 3.5a4.3 4.3 0 0 0-.1 3.1A4.7 4.7 0 0 0 4.7 9.8c0 4.7 2.9 5.7 5.6 6a2.7 2.7 0 0 0-.8 2.1V21" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" role="img" focusable="false">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2ZM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
    </svg>
  `,
  x: `
    <svg viewBox="0 0 24 24" role="img" focusable="false">
      <path d="M4 4 20 20M20 4 4 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
    </svg>
  `,
  email: `
    <svg viewBox="0 0 24 24" role="img" focusable="false">
      <path d="M4 6h16v12H4zM4 7l8 6 8-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
    </svg>
  `,
  youtube: `
    <svg viewBox="0 0 24 24" role="img" focusable="false">
      <path d="M22 12a26 26 0 0 0-.3-4.1 3 3 0 0 0-2.1-2.1A34 34 0 0 0 12 5.5a34 34 0 0 0-7.6.3A3 3 0 0 0 2.3 7.9 26 26 0 0 0 2 12a26 26 0 0 0 .3 4.1 3 3 0 0 0 2.1 2.1 34 34 0 0 0 7.6.3 34 34 0 0 0 7.6-.3 3 3 0 0 0 2.1-2.1A26 26 0 0 0 22 12Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
      <path d="m10 9 5 3-5 3z" fill="currentColor"/>
    </svg>
  `,
  instagram: `
    <svg viewBox="0 0 24 24" role="img" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/>
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  `,
  tiktok: `
    <svg viewBox="0 0 24 24" role="img" focusable="false">
      <path d="M14 4c.6 1.7 2 3 4 3.5V11a7.5 7.5 0 0 1-4-1.2v5.5A4.7 4.7 0 1 1 9.3 10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
    </svg>
  `,
  spotify: `
    <svg viewBox="0 0 24 24" role="img" focusable="false">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
      <path d="M8.5 10.5c2.9-1 6-.8 8.6.6M9 13.3c2.2-.7 4.6-.5 6.5.6M9.8 16c1.5-.4 3.1-.2 4.4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/>
    </svg>
  `,
  discord: `
    <svg viewBox="0 0 24 24" role="img" focusable="false">
      <path d="M8.8 6.7a14.7 14.7 0 0 1 6.4 0m-7 8.7c.8.6 1.8 1 2.8 1.2m2 0c1-.2 2-.6 2.8-1.2m-8.6 1.1A13.8 13.8 0 0 1 5 8.3a12.6 12.6 0 0 1 3.1-1.6l.3.5m7.2 9.3A13.8 13.8 0 0 0 19 8.3a12.6 12.6 0 0 0-3.1-1.6l-.3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
      <circle cx="9.5" cy="12.1" r="1" fill="currentColor"/>
      <circle cx="14.5" cy="12.1" r="1" fill="currentColor"/>
    </svg>
  `,
  twitch: `
    <svg viewBox="0 0 24 24" role="img" focusable="false">
      <path d="M5 4h15v10l-4 4h-4l-2 2H7v-2H5Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.8"/>
      <path d="M10 8v4M14 8v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/>
    </svg>
  `,
  portfolio: `
    <svg viewBox="0 0 24 24" role="img" focusable="false">
      <path d="M3 9h18v10H3zM8 9V7a4 4 0 0 1 8 0v2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
    </svg>
  `,
  link: `
    <svg viewBox="0 0 24 24" role="img" focusable="false">
      <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 1 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
    </svg>
  `
};

const elements = {
  background: document.querySelector("#page-background"),
  kicker: document.querySelector("#profile-kicker"),
  name: document.querySelector("#profile-name"),
  headline: document.querySelector("#profile-headline"),
  image: document.querySelector("#profile-image"),
  links: document.querySelector("#links"),
  linkTemplate: document.querySelector("#link-template")
};

function toCssVariableName(key) {
  return `--${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}`;
}

function applyTheme(theme = {}) {
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(toCssVariableName(key), value);
  });
}

function applyBackground(background = {}) {
  if (background.image) {
    elements.background.style.backgroundImage = `url("${background.image}")`;
  }

  if (background.position) {
    elements.background.style.backgroundPosition = background.position;
  }
}

function formatMeta(link) {
  if (link.meta) {
    return link.meta;
  }

  try {
    const url = new URL(link.href);
    return url.hostname.replace(/^www\./, "");
  } catch {
    return link.href;
  }
}

function getIconMarkup(iconName) {
  return iconMap[iconName] || iconMap.link;
}

function renderLinks(links = []) {
  elements.links.textContent = "";

  if (!Array.isArray(links) || links.length === 0) {
    const status = document.createElement("p");
    status.className = "status";
    status.textContent = "Add entries to data/site.json to show your link rows here.";
    elements.links.append(status);
    return;
  }

  links.forEach((link) => {
    const fragment = elements.linkTemplate.content.cloneNode(true);
    const anchor = fragment.querySelector(".link-row");
    const icon = fragment.querySelector(".link-row__icon");
    const label = fragment.querySelector(".link-row__label");
    const meta = fragment.querySelector(".link-row__meta");

    anchor.href = link.href;
    anchor.setAttribute("aria-label", `${link.label} - ${link.href}`);
    icon.innerHTML = getIconMarkup(link.icon);
    label.textContent = link.label;
    meta.textContent = formatMeta(link);

    elements.links.append(fragment);
  });
}

function applyProfile(profile = {}) {
  document.title = profile.name || "Blue Links";
  elements.kicker.textContent = profile.kicker || "Personal hub";
  elements.name.textContent = profile.name || "Blue Links";
  elements.headline.textContent = profile.headline || "Everything important in one place.";
  elements.image.src = profile.image || "assets/profile-placeholder.svg";
  elements.image.alt = profile.imageAlt || `${elements.name.textContent} profile image`;
}

function renderError(message) {
  elements.links.textContent = "";
  const status = document.createElement("p");
  status.className = "status";
  status.textContent = message;
  elements.links.append(status);
}

async function init() {
  try {
    const response = await fetch("./data/site.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Failed to load content (${response.status})`);
    }

    const data = await response.json();

    applyTheme(data.theme);
    applyBackground(data.background);
    applyProfile(data.profile);
    renderLinks(data.links);
  } catch (error) {
    console.error(error);
    renderError("Content could not be loaded. Check data/site.json and try again.");
  }
}

init();
