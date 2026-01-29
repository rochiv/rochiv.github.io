// NOTE: Static developer-controlled template — safe innerHTML usage per CLAUDE.md
export const setupPublications = (element: HTMLElement) => {
  // All HTML is hardcoded — no user input rendered via innerHTML
  element.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="font-serif-research text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
        Publications
      </h2>
      <div class="space-y-6 font-serif-research text-slate-700 dark:text-slate-300">
        <!-- TODO: Add your publications here. Example format below: -->
        <p class="text-slate-500 dark:text-slate-400 italic">
          Publications coming soon. Check back for updates.
        </p>

        <!-- Example publication entry (uncomment and modify):
        <div>
          <p class="leading-relaxed">
            Author One, <strong class="text-slate-900 dark:text-white">Rohit Chivukula</strong>, Author Three.
            &ldquo;Paper Title Goes Here.&rdquo;
            <em>Conference or Journal Name</em>, Year.
            <a href="#" class="text-research-accent dark:text-blue-400 hover:underline">[DOI]</a>
            <a href="#" class="text-research-accent dark:text-blue-400 hover:underline">[arXiv]</a>
          </p>
        </div>
        -->
      </div>
    </div>
  `;
};
