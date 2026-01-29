// NOTE: All innerHTML usage in this file is with static, developer-controlled
// template strings. No user input or external data is rendered via innerHTML.
// See CLAUDE.md "Security Considerations" section.

// Dev page fonts
import "@fontsource/fraunces/300.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "@fontsource/space-mono/400-italic.css";

import { setupHeader } from "./shared/Header";
import { setupFooter } from "./shared/Footer";
import { setupHero } from "./dev/Hero";
import { setupAbout } from "./dev/About";
import { setupProjects } from "./dev/Projects";
import { setupContact } from "./dev/Contact";
import "./style.css";

document.documentElement.setAttribute("data-page", "dev");

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
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    { label: "Research", href: "/" },
  ],
});

const main = document.querySelector<HTMLElement>("#main")!;

const heroSection = document.createElement("section");
heroSection.id = "home";
const aboutSection = document.createElement("section");
aboutSection.id = "about";
const projectsSection = document.createElement("section");
projectsSection.id = "projects";
const contactSection = document.createElement("section");
contactSection.id = "contact";

main.append(heroSection, aboutSection, projectsSection, contactSection);

setupHero(heroSection);
setupAbout(aboutSection);
setupProjects(projectsSection);
setupContact(contactSection);
setupFooter(document.querySelector<HTMLElement>("#footer")!, {});
