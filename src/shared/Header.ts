// NOTE: All innerHTML usage in this file is with static, developer-controlled
// template strings. No user input or external data is rendered via innerHTML.
import { initTheme, toggleTheme } from "./theme";

export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderConfig {
  logoText: string;
  logoHref: string;
  navItems: NavItem[];
  ctaLink?: { label: string; href: string };
}

export const setupHeader = (element: HTMLElement, config: HeaderConfig) => {
  const navLinks = config.navItems
    .map(
      (item) =>
        `<a href="${item.href}" class="whitespace-nowrap text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">${item.label}</a>`,
    )
    .join("");

  const mobileNavLinks = config.navItems
    .map(
      (item) =>
        `<a href="${item.href}" class="block py-3 text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">${item.label}</a>`,
    )
    .join("");

  const ctaHtml = config.ctaLink
    ? `<a href="${config.ctaLink.href}" class="whitespace-nowrap text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">${config.ctaLink.label}</a>`
    : "";

  const mobileCta = config.ctaLink
    ? `<a href="${config.ctaLink.href}" class="block py-3 text-primary hover:bg-primary/5 rounded-lg">${config.ctaLink.label}</a>`
    : "";

  // Static developer-controlled template — safe innerHTML usage
  element.innerHTML = `
    <nav class="fixed top-0 w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm transition-all duration-300">
      <div class="w-full px-4 md:px-8 lg:px-12">
        <div class="flex justify-between items-center h-24">
          <div class="flex-shrink-0 flex items-center">
            <a href="${config.logoHref}" class="font-serif font-bold text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-white hover:text-primary transition-colors">
              ${config.logoText}
            </a>
          </div>

          <div class="hidden md:flex space-x-4 lg:space-x-8 items-center flex-shrink-0 font-serif font-semibold text-base lg:text-lg">
            ${navLinks}
            ${ctaHtml}
            <button id="theme-toggle" class="relative w-14 h-7 bg-slate-300 dark:bg-primary rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" aria-label="Toggle Dark Mode">
              <span id="theme-icon" class="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 dark:translate-x-7"></span>
            </button>
          </div>

          <div class="md:hidden flex items-center">
            <button id="mobile-menu-btn" class="text-slate-700 dark:text-slate-300 hover:text-primary focus:outline-none">
              <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" class="hidden md:hidden bg-background-light dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 shadow-lg">
        <div class="px-6 pt-6 pb-8 space-y-4 font-serif text-lg font-semibold text-center">
          ${mobileNavLinks}
          ${mobileCta}
          <div class="flex items-center justify-center gap-3 py-3">
            <span class="text-slate-700 dark:text-slate-300">Theme</span>
            <button id="mobile-theme-toggle" class="relative w-14 h-7 bg-slate-300 dark:bg-primary rounded-full transition-colors duration-300 focus:outline-none" aria-label="Toggle Dark Mode">
              <span id="mobile-theme-icon" class="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 dark:translate-x-7"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  `;

  initTheme();

  element
    .querySelector("#theme-toggle")
    ?.addEventListener("click", toggleTheme);
  element
    .querySelector("#mobile-theme-toggle")
    ?.addEventListener("click", toggleTheme);
  element.querySelector("#mobile-menu-btn")?.addEventListener("click", () => {
    element.querySelector("#mobile-menu")?.classList.toggle("hidden");
  });
};
