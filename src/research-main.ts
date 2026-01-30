// NOTE: All innerHTML usage in this file is with static, developer-controlled
// template strings. No user input or external data is rendered via innerHTML.
// See CLAUDE.md "Security Considerations" section.

// Use same fonts as dev page for consistency
import "@fontsource/fraunces/300.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "@fontsource/space-mono/400-italic.css";

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

// Static developer-controlled template — safe innerHTML usage per CLAUDE.md
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-mono selection:bg-primary selection:text-white">
     <header id="header"></header>
     <main id="main"></main>
     <footer id="footer"></footer>
  </div>
`;

setupHeader(document.querySelector<HTMLElement>("#header")!, {
  logoText: "Rohit Chivukula",
  logoHref: "#",
  navItems: [
    { label: "Publications", href: "#publications" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Portfolio", href: "./dev/" },
  ],
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
  crossPageLink: { label: "Portfolio", href: "./dev/" },
});
