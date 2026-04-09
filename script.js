const yearEl = document.querySelector("#year");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const langToggle = document.querySelector("#lang-toggle");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const i18nPlaceholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
const contactForm = document.querySelector("#contact-form");

const translations = {
  de: {
    nav_about: "Ueber mich",
    nav_skills: "Skills",
    nav_projects: "Projekte",
    nav_education: "Ausbildung",
    nav_interests: "Interessen",
    nav_contact: "Kontakt",
    hero_eyebrow: "Informatikschueler",
    hero_title: "Ich entwickle moderne und benutzerfreundliche Softwareloesungen.",
    hero_lead:
      "Motiviert, strukturiert und technologiebegeistert - mit Fokus auf Python, JavaScript und Webentwicklung.",
    hero_cta_contact: "Kontakt aufnehmen",
    hero_cta_projects: "Projekte ansehen",
    hero_cta_cv: "CV herunterladen",
    profile_role: "Informatikschueler | Aspiring Software Developer",
    profile_github: "GitHub Profil",
    about_title: "Ueber mich",
    about_p1:
      "Ich bin ein motivierter Informatikschueler mit grossem Interesse an Softwareentwicklung und modernen Technologien. Bereits jetzt konnte ich eigenstaendig erste Projekte umsetzen und meine Faehigkeiten in Programmiersprachen wie Python und JavaScript vertiefen.",
    about_p2:
      "Besonders zeichne ich mich durch strukturiertes Denken, Problemloesungskompetenz und Teamfaehigkeit aus.",
    skills_title: "Skills & Technologien",
    other_skills_title: "Weitere Skills",
    projects_title: "Projekte",
    project_1_desc:
      "Ein Tool zum Dokumentieren der eigenen Trading Journey und zur strukturierten Analyse von Trades.",
    project_2_desc:
      "Ein interaktives Woerterspiel, bei dem das gesuchte Wort erraten werden muss.",
    project_3_desc:
      "Eine Informationswebsite zur globalen Wirtschaftskrise 2008 mit strukturiert aufbereiteten Inhalten.",
    education_title: "Ausbildung",
    education_1: "Seit September 2024",
    languages_title: "Sprachen",
    lang_de: "Deutsch - Muttersprache",
    lang_en: "Englisch - B2",
    lang_fr: "Franzoesisch - B1",
    interests_title: "Freizeit & Interessen",
    hobby_1_title: "Wandern & Natur",
    hobby_1_desc:
      "Zeit in der Natur hilft mir, den Kopf freizubekommen und neue Energie fuer Projekte zu sammeln.",
    hobby_2_title: "Volleyball & Teamgeist",
    hobby_2_desc:
      "Volleyball staerkt mein Teamwork und meine Kommunikation - Eigenschaften, die ich auch im Coding einbringe.",
    hobby_3_title: "Kochen",
    hobby_3_desc:
      "Beim Kochen probiere ich gerne neue Rezepte aus - kreativ, strukturiert und mit Fokus aufs Ergebnis.",
    contact_title: "Kontakt",
    contact_cv: "CV herunterladen",
    form_title: "Direkt eine E-Mail senden",
    form_name_label: "Name",
    form_name_placeholder: "Dein Name",
    form_email_label: "E-Mail",
    form_email_placeholder: "deine.email@example.com",
    form_subject_label: "Betreff",
    form_subject_placeholder: "Betreff",
    form_message_label: "Nachricht",
    form_message_placeholder: "Deine Nachricht...",
    form_submit: "E-Mail vorbereiten",
    edu_date_1: "seit 09/2024",
    location_label: "Standort:",
    footer_rights: "Kian Gray. Alle Rechte vorbehalten.",
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_interests: "Interests",
    nav_contact: "Contact",
    hero_eyebrow: "Informatics Student",
    hero_title: "I build modern and user-friendly software solutions.",
    hero_lead:
      "Motivated, structured, and technology-driven - focused on Python, JavaScript, and web development.",
    hero_cta_contact: "Get in touch",
    hero_cta_projects: "View projects",
    hero_cta_cv: "Download CV",
    profile_role: "Informatics Student | Aspiring Software Developer",
    profile_github: "GitHub Profile",
    about_title: "About me",
    about_p1:
      "I am a motivated informatics student with a strong interest in software development and modern technologies. I have already delivered first projects independently and deepened my skills in languages such as Python and JavaScript.",
    about_p2:
      "My strengths are structured thinking, problem-solving, and teamwork.",
    skills_title: "Skills & Technologies",
    other_skills_title: "Other Skills",
    projects_title: "Projects",
    project_1_desc:
      "A tool to document your trading journey and analyze trades in a structured way.",
    project_2_desc:
      "An interactive word game where the player has to guess the hidden word.",
    project_3_desc:
      "An informational website about the global financial crisis of 2008 with clearly structured content.",
    education_title: "Education",
    education_1: "Since September 2024",
    languages_title: "Languages",
    lang_de: "German - Native",
    lang_en: "English - B2",
    lang_fr: "French - B1",
    interests_title: "Interests",
    hobby_1_title: "Hiking & Nature",
    hobby_1_desc:
      "Spending time outdoors helps me reset and return to projects with fresh focus.",
    hobby_2_title: "Volleyball & Teamwork",
    hobby_2_desc:
      "Volleyball strengthens communication and teamwork, skills I also use while coding.",
    hobby_3_title: "Cooking",
    hobby_3_desc:
      "I enjoy trying new recipes - combining creativity, structure, and attention to results.",
    contact_title: "Contact",
    contact_cv: "Download CV",
    form_title: "Send an email directly",
    form_name_label: "Name",
    form_name_placeholder: "Your name",
    form_email_label: "Email",
    form_email_placeholder: "your.email@example.com",
    form_subject_label: "Subject",
    form_subject_placeholder: "Subject",
    form_message_label: "Message",
    form_message_placeholder: "Your message...",
    form_submit: "Prepare email",
    edu_date_1: "since 09/2024",
    location_label: "Location:",
    footer_rights: "Kian Gray. All rights reserved.",
  },
};

let currentLanguage = "de";

if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

if (navItems.length > 0 && navLinks) {
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

function applyLanguage(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  i18nNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!key || !dictionary[key]) return;
    node.textContent = dictionary[key];
  });

  i18nPlaceholderNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    if (!key || !dictionary[key]) return;
    node.setAttribute("placeholder", dictionary[key]);
  });

  if (langToggle) {
    langToggle.textContent = lang === "de" ? "EN" : "DE";
  }
  document.documentElement.lang = lang;
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "de" ? "en" : "de";
    applyLanguage(currentLanguage);
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name")?.value.trim() || "";
    const email = document.querySelector("#email")?.value.trim() || "";
    const subject = document.querySelector("#subject")?.value.trim() || "";
    const message = document.querySelector("#message")?.value.trim() || "";

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:kiangray76@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  });
}

const revealTargets = document.querySelectorAll(
  ".section, .project-card, .timeline-item, .profile-card, .hobby-card, .contact-form"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((node) => {
    node.classList.add("reveal");
    revealObserver.observe(node);
  });
} else {
  revealTargets.forEach((node) => node.classList.add("visible"));
}

applyLanguage(currentLanguage);
