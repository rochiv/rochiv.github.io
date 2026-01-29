// NOTE: Static developer-controlled template — safe innerHTML usage per CLAUDE.md
export const setupEducation = (element: HTMLElement) => {
  // All HTML is hardcoded — no user input rendered via innerHTML
  element.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
        Education
      </h2>
      <div class="font-serif text-slate-700 dark:text-slate-300">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">West Virginia University</h3>
        <p class="mt-1">B.S. Computer Science, Minor in Mathematics</p>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1"><em>Magna Cum Laude</em></p>
        <p class="text-sm mt-3 leading-relaxed">
          Coursework in mathematical foundations: linear algebra, probability theory, real analysis, numerical methods, and differential equations.
        </p>
      </div>
    </div>
  `;
};
