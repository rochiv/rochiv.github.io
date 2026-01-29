// NOTE: Static developer-controlled template — safe innerHTML usage per CLAUDE.md
export const setupTeaching = (element: HTMLElement) => {
  // All HTML is hardcoded — no user input rendered via innerHTML
  element.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="font-serif-research text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
        Teaching & Leadership
      </h2>
      <div class="space-y-6 font-serif-research text-slate-700 dark:text-slate-300">
        <div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">President, AI Club at WVU (AIWVU)</h3>
          <p class="text-sm leading-relaxed mt-1"><!-- TODO: Add description --></p>
        </div>
        <div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Tutor, Lane Dept. of CS &amp; EE (LCSEE)</h3>
          <p class="text-sm leading-relaxed mt-1"><!-- TODO: Add description --></p>
        </div>
        <div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Tutor, Engineering Learning Center</h3>
          <p class="text-sm leading-relaxed mt-1"><!-- TODO: Add description --></p>
        </div>
      </div>
    </div>
  `;
};
