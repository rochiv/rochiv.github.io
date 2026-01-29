// NOTE: Static developer-controlled template — safe innerHTML usage per CLAUDE.md
export const setupResearchExperience = (element: HTMLElement) => {
  // All HTML is hardcoded — no user input rendered via innerHTML
  element.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="font-serif-research text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
        Research & Work Experience
      </h2>
      <div class="space-y-8 font-serif-research text-slate-700 dark:text-slate-300">
        <div>
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">NextGen Federal Systems</h3>
            <span class="text-sm text-slate-500 dark:text-slate-400 font-mono-research"><!-- TODO: Add dates --></span>
          </div>
          <p class="text-research-accent dark:text-blue-400 text-sm mb-2">Machine Learning Engineer</p>
          <p class="leading-relaxed text-sm"><!-- TODO: Add description --></p>
        </div>

        <div>
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">WVU Vision Lab</h3>
            <span class="text-sm text-slate-500 dark:text-slate-400 font-mono-research"><!-- TODO: Add dates --></span>
          </div>
          <p class="text-research-accent dark:text-blue-400 text-sm mb-2">Research Assistant</p>
          <p class="leading-relaxed text-sm"><!-- TODO: Add description --></p>
        </div>

        <div>
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">WVU Power Systems Lab</h3>
            <span class="text-sm text-slate-500 dark:text-slate-400 font-mono-research"><!-- TODO: Add dates --></span>
          </div>
          <p class="text-research-accent dark:text-blue-400 text-sm mb-2">Research Assistant</p>
          <p class="leading-relaxed text-sm"><!-- TODO: Add description --></p>
        </div>
      </div>
    </div>
  `;
};
