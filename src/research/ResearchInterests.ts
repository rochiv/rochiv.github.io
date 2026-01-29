// NOTE: Static developer-controlled template — safe innerHTML usage per CLAUDE.md
export const setupResearchInterests = (element: HTMLElement) => {
  // All HTML is hardcoded — no user input rendered via innerHTML
  element.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
        Research Interests
      </h2>
      <ul class="space-y-3 font-serif text-slate-700 dark:text-slate-300 leading-relaxed">
        <li class="flex gap-3">
          <span class="text-primary dark:text-blue-400 font-bold mt-0.5">&bull;</span>
          <span><strong>Machine Learning Systems:</strong> <!-- TODO: Add 1-2 sentence explanation --> Certifiable robustness and uncertainty quantification for reliable ML systems.</span>
        </li>
        <li class="flex gap-3">
          <span class="text-primary dark:text-blue-400 font-bold mt-0.5">&bull;</span>
          <span><strong>Generative AI & LLMs:</strong> <!-- TODO: Add explanation --> Retrieval-augmented generation evaluation for technical documentation.</span>
        </li>
        <li class="flex gap-3">
          <span class="text-primary dark:text-blue-400 font-bold mt-0.5">&bull;</span>
          <span><strong>Applied Mathematics:</strong> <!-- TODO: Add explanation --> Convex optimization, spectral graph theory, and numerical methods for ML.</span>
        </li>
        <li class="flex gap-3">
          <span class="text-primary dark:text-blue-400 font-bold mt-0.5">&bull;</span>
          <span><strong>Data Engineering & MLOps:</strong> <!-- TODO: Add explanation --> Scalable data pipelines for meteorological and scientific computing.</span>
        </li>
      </ul>
    </div>
  `;
};
