// Insert Skills automatically (faster than writing in HTML)
const skills = [
  "Graphic Design",
  "Logo Design",
  "Flyer Design",
  "Poster Design",
  "Social Media Design",
  "Branding",
  "Web Design",
  "Responsive Website Design",
  "Landing Page Design",
  "UI Design",
  "Google Business Profile Setup",
  "Google Business Profile Optimization",
  "Local SEO",
  "Keyword Research",
  "Business Listing Management",
  "Typography",
  "Color Theory",
  "Content Layout",
  "Fast Delivery",
  "Professional Communication"
];

const skillsGrid = document.getElementById("skillsGrid");
skills.forEach(skill => {
  const pill = document.createElement("span");
  pill.className = "skill-pill";
  pill.textContent = skill;
  skillsGrid.appendChild(pill);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();


// SVG ICON SYSTEM (No external libraries)
const icons = {
  design: `
    <svg viewBox="0 0 24 24">
      <path d="M4 20h16" />
      <path d="M6 16l10-10 2 2-10 10H6v-2z" />
    </svg>
  `,
  code: `
    <svg viewBox="0 0 24 24">
      <path d="M8 9l-3 3 3 3" />
      <path d="M16 9l3 3-3 3" />
      <path d="M14 7l-4 10" />
    </svg>
  `,
  game: `
    <svg viewBox="0 0 24 24">
      <path d="M6 15l-2 2a3 3 0 0 0 4 4l2-2h4l2 2a3 3 0 0 0 4-4l-2-2" />
      <path d="M8 15h8" />
      <path d="M9 12h0.01" />
      <path d="M15 12h0.01" />
    </svg>
  `,
  services: `
    <svg viewBox="0 0 24 24">
      <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
    </svg>
  `,
  work: `
    <svg viewBox="0 0 24 24">
      <path d="M3 7h18v13H3z" />
      <path d="M8 7V5h8v2" />
    </svg>
  `,
  education: `
    <svg viewBox="0 0 24 24">
      <path d="M2 8l10-5 10 5-10 5z" />
      <path d="M6 10v6c0 2 12 2 12 0v-6" />
    </svg>
  `,
  language: `
    <svg viewBox="0 0 24 24">
      <path d="M4 5h7" />
      <path d="M7 5v14" />
      <path d="M4 19h7" />
      <path d="M13 7h7" />
      <path d="M13 17h7" />
      <path d="M15 7c0 5 3 10 3 10" />
    </svg>
  `,
  tools: `
    <svg viewBox="0 0 24 24">
      <path d="M14 7l3 3-8 8H6v-3z" />
      <path d="M16 5l3 3" />
    </svg>
  `,
  portfolio: `
    <svg viewBox="0 0 24 24">
      <path d="M3 7h18v14H3z" />
      <path d="M8 7V5h8v2" />
      <path d="M3 12h18" />
    </svg>
  `,
  whatsapp: `
    <svg viewBox="0 0 24 24">
      <path d="M20 11.5a8.5 8.5 0 0 1-12.9 7.2L4 20l1.4-3.9A8.5 8.5 0 1 1 20 11.5z" />
      <path d="M9 10c1 2 3 4 5 5" />
      <path d="M14 15l2-1" />
      <path d="M9 10l1-2" />
    </svg>
  `,
  youtube: `
    <svg viewBox="0 0 24 24">
      <path d="M22 12s0-4-1-5-4-1-9-1-8 0-9 1-1 5-1 5 0 4 1 5 4 1 9 1 8 0 9-1 1-5 1-5z" />
      <path d="M10 15l5-3-5-3z" />
    </svg>
  `,
  instagram: `
    <svg viewBox="0 0 24 24">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" />
      <path d="M12 11a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
      <path d="M17.5 6.5h0.01" />
    </svg>
  `,
  tiktok: `
    <svg viewBox="0 0 24 24">
      <path d="M14 3v11a4 4 0 1 1-4-4" />
      <path d="M14 3c1 3 3 5 6 5" />
    </svg>
  `,
  phone: `
    <svg viewBox="0 0 24 24">
      <path d="M6 2h4l2 5-3 2c1 3 3 5 6 6l2-3 5 2v4c0 2-2 4-4 4-9 0-16-7-16-16 0-2 2-4 4-4z" />
    </svg>
  `,
  email: `
    <svg viewBox="0 0 24 24">
      <path d="M4 4h16v16H4z" />
      <path d="M4 6l8 7 8-7" />
    </svg>
  `,
  location: `
    <svg viewBox="0 0 24 24">
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
      <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
    </svg>
  `
};

// Load icons
document.querySelectorAll("[data-icon]").forEach(el => {
  const iconName = el.getAttribute("data-icon");
  if (icons[iconName]) {
    el.innerHTML = icons[iconName];
  }
});