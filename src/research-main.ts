// NOTE: All innerHTML usage in this file is with static, developer-controlled
// template strings. No user input or external data is rendered via innerHTML.
// See CLAUDE.md "Security Considerations" section.

// Research page fonts
import "@fontsource/spectral/300.css";
import "@fontsource/spectral/400.css";
import "@fontsource/spectral/600.css";
import "@fontsource/spectral/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/700.css";

import { setupHeader } from "./shared/Header";
import { setupFooter } from "./shared/Footer";
import { setupResearchHero } from "./research/ResearchHero";
import { setupResearchInterests } from "./research/ResearchInterests";
import { setupPublications } from "./research/Publications";
import { setupResearchExperience } from "./research/ResearchExperience";
import { setupSelectedProjects } from "./research/SelectedProjects";
import { setupTeaching } from "./research/Teaching";
import { setupEducation } from "./research/Education";
import "./style.css";

document.documentElement.setAttribute("data-page", "research");

// Static developer-controlled template — safe innerHTML usage per CLAUDE.md
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="min-h-screen bg-research-bg-light dark:bg-research-bg-dark text-slate-900 dark:text-slate-100 font-serif-research selection:bg-research-accent selection:text-white">
     <header id="header"></header>
     <main id="main"></main>
     <footer id="footer"></footer>
  </div>
`;

setupHeader(document.querySelector<HTMLElement>("#header")!, {
  logoText: "Rohit Chivukula",
  logoHref: "#",
  navItems: [
    { label: "Research", href: "#interests" },
    { label: "Publications", href: "#publications" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
  ],
  ctaLink: { label: "Dev Portfolio \u2192", href: "./dev/" },
});

const main = document.querySelector<HTMLElement>("#main")!;

const heroSection = document.createElement("section");
heroSection.id = "hero";
const interestsSection = document.createElement("section");
interestsSection.id = "interests";
const publicationsSection = document.createElement("section");
publicationsSection.id = "publications";
const experienceSection = document.createElement("section");
experienceSection.id = "experience";
const projectsSection = document.createElement("section");
projectsSection.id = "projects";
const teachingSection = document.createElement("section");
teachingSection.id = "teaching";
const educationSection = document.createElement("section");
educationSection.id = "education";

main.append(
  heroSection,
  interestsSection,
  publicationsSection,
  experienceSection,
  projectsSection,
  teachingSection,
  educationSection,
);

setupResearchHero(heroSection);
setupResearchInterests(interestsSection);
setupPublications(publicationsSection);
setupResearchExperience(experienceSection);
setupSelectedProjects(projectsSection);
setupTeaching(teachingSection);
setupEducation(educationSection);
setupFooter(document.querySelector<HTMLElement>("#footer")!, {
  crossPageLink: { label: "Dev Portfolio \u2192", href: "./dev/" },
});
