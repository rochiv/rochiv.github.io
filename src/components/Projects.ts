export const setupProjects = (element: HTMLElement) => {
  // Placeholder projects (Generic)
  const projects = [
    {
      title: "Neural Network Architecture",
      description:
        "A custom implementation of transformer attention mechanisms for processing sequential data efficiently.",
      tags: ["Python", "PyTorch", "Mathematics"],
      link: "#",
    },
    {
      title: "Distributed Data Pipeline",
      description:
        "Scalable ETL framework designed to process terabytes of unstructured data with low latency.",
      tags: ["AWS", "Apache Spark", "Scala"],
      link: "#",
    },
    {
      title: "Generative AI Assistant",
      description:
        "Interactive agent leveraging large language models to assist with code generation and refactoring.",
      tags: ["LLM", "TypeScript", "React"],
      link: "#",
    },
  ];

  element.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="text-center mb-20">
        <h2 class="font-serif text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">My Work</h2>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        ${projects
          .map(
            (project, index) => `
          <div class="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col h-full">
            
            <!-- Simple visual header -->
            <div class="h-3 bg-gradient-to-r from-primary to-secondary opacity-80 group-hover:opacity-100 transition-opacity"></div>
            
            <div class="p-8 flex-1 flex flex-col">
              <div class="mb-6">
                 <span class="font-mono text-xs font-bold tracking-widest text-slate-400 uppercase mb-2 block">Project 0${index + 1}</span>
                 <h3 class="font-serif text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">${project.title}</h3>
              </div>
              
              <p class="font-mono text-sm text-slate-600 dark:text-slate-400 mb-8 flex-1 leading-relaxed">
                ${project.description}
              </p>

              <div class="pt-6 border-t border-slate-100 dark:border-slate-700">
                <div class="flex flex-wrap gap-2">
                    ${project.tags
                      .map(
                        (tag) => `
                    <span class="px-3 py-1 bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-mono rounded-md border border-slate-200 dark:border-slate-600">
                        ${tag}
                    </span>
                    `
                      )
                      .join("")}
                </div>
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
      
      <div class="text-center">
          <a href="https://github.com/rochiv" target="_blank" class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold font-serif text-lg hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            View More
          </a>
      </div>
    </div>
  `;
};
