export const setupAbout = (element: HTMLElement) => {
  element.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="text-center mb-16">
        <h2 class="font-serif text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
        <div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Bio -->
        <div class="space-y-8 text-lg text-slate-600 dark:text-slate-300 font-mono leading-relaxed">
          <p>
            Hello! I'm <span class="font-bold text-primary">Rohit</span>, a Machine Learning Engineer based in Pittsburgh, PA. 
            I graduated from <span class="text-slate-900 dark:text-white font-bold">West Virginia University</span> with a B.S. in Computer Science and a minor in Mathematics.
          </p>
          <p>
            My passion lies at the intersection of <span class="text-primary font-bold">technology and mathematics</span>. 
            I specialize in building scalable machine learning models, generative AI pipelines, and robust data engineering architectures.
          </p>
          <p>
            I thrive on complex challenges. Whether architecting production AI systems or crafting intuitive user interfaces, I bring analytical rigor and creative problem-solving to every project.
          </p>
        </div>

        <!-- Skills -->
        <div class="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8"></div>
          
          <h3 class="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-8 relative z-10">Technical Skills</h3>
          
          <div class="space-y-8 relative z-10 font-mono text-sm">
            <!-- Skill Category 1 -->
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-bold text-slate-700 dark:text-slate-300">Machine Learning & AI</span>
              </div>
              <div class="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                <div class="bg-primary h-2 rounded-full w-[95%]"></div>
              </div>
              <p class="text-slate-500 mt-2">PyTorch, TensorFlow, LangChain, SageMaker</p>
            </div>

            <!-- Skill Category 2 -->
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-bold text-slate-700 dark:text-slate-300">Cloud & DevOps</span>
              </div>
              <div class="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                <div class="bg-secondary h-2 rounded-full w-[90%]"></div>
              </div>
              <p class="text-slate-500 mt-2">AWS (CDK, Lambda), Docker, Kubernetes</p>
            </div>

            <!-- Skill Category 3 -->
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-bold text-slate-700 dark:text-slate-300">Web Development</span>
              </div>
              <div class="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                <div class="bg-rose-600 h-2 rounded-full w-[85%]"></div>
              </div>
              <p class="text-slate-500 mt-2">TypeScript, React, Tailwind CSS, Node.js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
