// NOTE: Static developer-controlled template — safe innerHTML usage per CLAUDE.md
export const setupResearchHero = (element: HTMLElement) => {
  // All HTML is hardcoded — no user input rendered via innerHTML
  element.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <h1 class="font-serif text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
        Rohit Chivukula
      </h1>
      <p class="font-serif text-xl text-slate-600 dark:text-slate-300 mb-6">
        Machine Learning Engineer
      </p>
      <p class="font-serif text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">
        <!-- TODO: Replace with your research bio / impact statement -->
        Focused on certifiable robustness, uncertainty quantification, and causal inference in machine learning. Interested in robustness under distribution shift.
      </p>
      <div class="flex flex-wrap gap-4 text-sm font-mono">
        <a href="mailto:rohitchivukula@proton.me" class="text-primary dark:text-blue-400 hover:underline">Email</a>
        <span class="text-slate-300 dark:text-slate-600">|</span>
        <a href="https://github.com/rochiv" target="_blank" class="text-primary dark:text-blue-400 hover:underline">GitHub</a>
        <span class="text-slate-300 dark:text-slate-600">|</span>
        <a href="https://linkedin.com/in/rohit-chivukula" target="_blank" class="text-primary dark:text-blue-400 hover:underline">LinkedIn</a>
        <span class="text-slate-300 dark:text-slate-600">|</span>
        <a href="https://scholar.google.com/citations?user=15MoBjEAAAAJ&hl=en" target="_blank" class="text-primary dark:text-blue-400 hover:underline">Google Scholar</a>
        <span class="text-slate-300 dark:text-slate-600">|</span>
        <a href="./dev/" class="text-primary dark:text-blue-400 hover:underline">Portfolio</a>
      </div>
    </div>
  `;
};
