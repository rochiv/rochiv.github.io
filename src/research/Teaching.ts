// NOTE: Static developer-controlled template — safe innerHTML usage per CLAUDE.md
export const setupTeaching = (element: HTMLElement) => {
  // All HTML is hardcoded — no user input rendered via innerHTML
  element.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
        Teaching & Leadership
      </h2>
      <div class="space-y-6 font-serif text-slate-700 dark:text-slate-300">
        <div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">President, <a href="https://aiwvu.orgs.wvu.edu" target="_blank" rel="noopener noreferrer" class="text-primary dark:text-blue-400 hover:underline">AIWVU</a></h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 font-mono mb-1">Jan 2022 - May 2024</p>
          <p class="text-base leading-relaxed mt-1"><!-- TODO: Add description --> Grew organization to 200+ members. Mentored NASA Lunar Autonomy Challenge team to 5th place nationally among 31 university teams. Organized faculty research seminars and technical workshops on ML fundamentals.</p>
        </div>
        <div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Tutor, <a href="https://lcsee.statler.wvu.edu/student-life/lcsee-learning-center" target="_blank" rel="noopener noreferrer" class="text-primary dark:text-blue-400 hover:underline">Lane Department of Computer Science and Electrical Engineering</a></h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 font-mono mb-1">Fall 2023 - Spring 2024</p>
          <p class="text-base leading-relaxed mt-1"><!-- TODO: Add description --> Tutored upper-division algorithms, operating systems, and computer architecture courses.</p>
        </div>
        <div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Tutor, Engineering Learning Center</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 font-mono mb-1">Fall 2021 - Spring 2022</p>
          <p class="text-base leading-relaxed mt-1"><!-- TODO: Add description --> Supported 20+ students per day across calculus, physics, and introductory CS courses.</p>
        </div>
      </div>
    </div>
  `;
};
