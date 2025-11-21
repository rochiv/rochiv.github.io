import { setupHeader } from './components/Header'
import { setupHero } from './components/Hero'
import { setupAbout } from './components/About'
import { setupProjects } from './components/Projects'
import { setupContact } from './components/Contact'
import { setupFooter } from './components/Footer'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-mono selection:bg-primary selection:text-white">
     <header id="header"></header>
     <main id="main"></main>
     <footer id="footer"></footer>
  </div>
`

setupHeader(document.querySelector<HTMLElement>('#header')!)
const main = document.querySelector<HTMLElement>('#main')!

const heroSection = document.createElement('section'); heroSection.id = 'home';
const aboutSection = document.createElement('section'); aboutSection.id = 'about';
const projectsSection = document.createElement('section'); projectsSection.id = 'projects';
const contactSection = document.createElement('section'); contactSection.id = 'contact';

main.append(heroSection, aboutSection, projectsSection, contactSection)

setupHero(heroSection)
setupAbout(aboutSection)
setupProjects(projectsSection)
setupContact(contactSection)
setupFooter(document.querySelector<HTMLElement>('#footer')!)
