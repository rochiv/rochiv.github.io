// NOTE: Static developer-controlled template — safe innerHTML usage per CLAUDE.md
export const setupResearchHero = (element: HTMLElement) => {
  // All HTML is hardcoded — no user input rendered via innerHTML
  element.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <h1 class="font-serif-research text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
        Rohit Chivukula
      </h1>
      <p class="font-serif-research text-xl text-slate-600 dark:text-slate-300 mb-6">
        Machine Learning Engineer
      </p>
      <p class="font-serif-research text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">
        <!-- TODO: Replace with your research bio / impact statement -->
        Interested in building scalable machine learning systems at the intersection of applied mathematics and software engineering. Currently focused on generative AI pipelines, model optimization, and data engineering architectures.
      </p>
      <div class="flex flex-wrap gap-4 text-sm font-mono-research">
        <a href="mailto:rohitchivukula@proton.me" class="text-research-accent dark:text-blue-400 hover:underline">Email</a>
        <span class="text-slate-300 dark:text-slate-600">|</span>
        <a href="https://github.com/rochiv" target="_blank" class="text-research-accent dark:text-blue-400 hover:underline">GitHub</a>
        <span class="text-slate-300 dark:text-slate-600">|</span>
        <a href="https://linkedin.com/in/rohit-chivukula" target="_blank" class="text-research-accent dark:text-blue-400 hover:underline">LinkedIn</a>
        <span class="text-slate-300 dark:text-slate-600">|</span>
        <!-- TODO: Add Google Scholar link when available -->
        <span class="text-slate-400 dark:text-slate-500">Google Scholar (coming soon)</span>
        <span class="text-slate-300 dark:text-slate-600">|</span>
        <a href="./dev/" class="text-research-accent dark:text-blue-400 hover:underline">Dev Portfolio &rarr;</a>
      </div>
    </div>
  `;
};
