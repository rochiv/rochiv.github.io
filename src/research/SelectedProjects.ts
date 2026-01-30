// NOTE: Static developer-controlled template — safe innerHTML usage per CLAUDE.md
export const setupSelectedProjects = (element: HTMLElement) => {
  // All HTML is hardcoded — no user input rendered via innerHTML
  element.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
        Selected Projects
      </h2>
      <ul class="space-y-4 font-serif text-slate-700 dark:text-slate-300">
        <li>
          <a href="https://github.com/rochiv/papers-to-code" target="_blank" rel="noopener noreferrer" class="text-primary dark:text-blue-400 hover:underline font-bold">papers-to-code</a>
          <span class="text-sm"> - <!-- TODO: One-line description --> Research paper implementations including neural weather prediction and medical imaging models.</span>
        </li>
        <li>
          <!-- TODO: Replace href with correct repo URL -->
          <a href="https://github.com/rochiv" target="_blank" rel="noopener noreferrer" class="text-primary dark:text-blue-400 hover:underline font-bold">pdf-analysis-chatbot</a>
          <span class="text-sm"> - <!-- TODO: One-line description - is this project real? --></span>
        </li>
        <li>
          <a href="https://github.com/WVU-AIClub/LunarAutonomyChallenge" target="_blank" rel="noopener noreferrer" class="text-primary dark:text-blue-400 hover:underline font-bold">NASA Lunar Surface Operations</a>
          <span class="text-sm"> - <!-- TODO: One-line description --> 5th place nationally. Autonomous lunar rover navigation using ROS, ORB-SLAM3, and reinforcement learning.</span>
        </li>
        <li>
          <!-- TODO: Replace href with correct repo URL -->
          <a href="https://github.com/rochiv" target="_blank" rel="noopener noreferrer" class="text-primary dark:text-blue-400 hover:underline font-bold">twitter-dashboard</a>
          <span class="text-sm"> - <!-- TODO: One-line description - is this project real? --></span>
        </li>
      </ul>
    </div>
  `;
};
