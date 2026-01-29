// NOTE: Static developer-controlled template — safe innerHTML usage per CLAUDE.md
export const setupSelectedProjects = (element: HTMLElement) => {
  // All HTML is hardcoded — no user input rendered via innerHTML
  element.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="font-serif-research text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
        Selected Projects
      </h2>
      <ul class="space-y-4 font-serif-research text-slate-700 dark:text-slate-300">
        <li>
          <a href="https://github.com/rochiv" target="_blank" class="text-research-accent dark:text-blue-400 hover:underline font-bold">papers-to-code</a>
          <span class="text-sm"> &mdash; <!-- TODO: One-line description --></span>
        </li>
        <li>
          <a href="https://github.com/rochiv" target="_blank" class="text-research-accent dark:text-blue-400 hover:underline font-bold">pdf-analysis-chatbot</a>
          <span class="text-sm"> &mdash; <!-- TODO: One-line description --></span>
        </li>
        <li>
          <a href="https://github.com/rochiv" target="_blank" class="text-research-accent dark:text-blue-400 hover:underline font-bold">NASA Lunar Surface Operations</a>
          <span class="text-sm"> &mdash; <!-- TODO: One-line description --></span>
        </li>
        <li>
          <a href="https://github.com/rochiv" target="_blank" class="text-research-accent dark:text-blue-400 hover:underline font-bold">twitter-dashboard</a>
          <span class="text-sm"> &mdash; <!-- TODO: One-line description --></span>
        </li>
      </ul>
    </div>
  `;
};
