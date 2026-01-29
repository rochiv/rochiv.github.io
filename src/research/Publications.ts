// NOTE: Static developer-controlled template — safe innerHTML usage per CLAUDE.md
export const setupPublications = (element: HTMLElement) => {
  // All HTML is hardcoded — no user input rendered via innerHTML
  element.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
        Publications
      </h2>
      <div class="space-y-6 font-serif text-slate-700 dark:text-slate-300">
        <!-- TODO: Add more publications as they become available -->
        <div>
          <p class="leading-relaxed">
            Thrasher, J., Devkota, A., Siwakoti, P., <strong class="text-slate-900 dark:text-white">Chivukula, R.</strong>, Poudel, P., Hu, C., Bhattarai, B., and Gyawali, P. (2025).
            &ldquo;Multimodal Federated Learning in Healthcare: a Review.&rdquo;
            <em>Journal of Healthcare Informatics Research</em>, 1-30.
            <a href="https://link.springer.com/article/10.1007/s41666-025-00226-4" target="_blank" class="text-primary dark:text-blue-400 hover:underline">[DOI]</a>
            <a href="https://arxiv.org/abs/2310.09650" target="_blank" class="text-primary dark:text-blue-400 hover:underline">[arXiv]</a>
          </p>
        </div>
      </div>
    </div>
  `;
};
