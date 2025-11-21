export const setupHeader = (element: HTMLElement) => {
  element.innerHTML = `
    <nav class="fixed top-0 w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm transition-all duration-300">
      <div class="w-full px-4 md:px-8 lg:px-12">
        <div class="flex justify-between items-center h-24">
          <!-- Full Name (Snug Left) -->
          <div class="flex-shrink-0 flex items-center">
            <a href="#" class="font-serif font-bold text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-white hover:text-primary transition-colors">
              Rohit Chivukula
            </a>
          </div>
          
          <!-- Desktop Menu (Snug Right, More Spacing) -->
          <div class="hidden md:flex space-x-12 items-center font-serif font-bold text-lg">
            <a href="#about" class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">About</a>
            <a href="#projects" class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Projects</a>
            <a href="#contact" class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Contact</a>
            
            <a href="resume/resume.pdf" target="_blank" class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" aria-label="Resume">
                Resume
            </a>

             <button id="theme-toggle" class="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-xl" aria-label="Toggle Dark Mode">
              <span id="theme-icon">🌙</span>
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
             <button id="mobile-menu-btn" class="text-slate-700 dark:text-slate-300 hover:text-primary focus:outline-none">
                <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
             </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Panel -->
      <div id="mobile-menu" class="hidden md:hidden bg-background-light dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 shadow-lg">
        <div class="px-6 pt-6 pb-8 space-y-4 font-serif text-xl font-bold text-center">
          <a href="#about" class="block py-3 text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">About</a>
          <a href="#projects" class="block py-3 text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">Projects</a>
          <a href="#contact" class="block py-3 text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">Contact</a>
          <a href="resume/resume.pdf" target="_blank" class="block py-3 text-primary hover:bg-primary/5 rounded-lg">Resume</a>
        </div>
      </div>
    </nav>
  `

  // Logic
  const themeToggle = element.querySelector('#theme-toggle') as HTMLButtonElement
  const themeIcon = element.querySelector('#theme-icon') as HTMLSpanElement
  const mobileMenuBtn = element.querySelector('#mobile-menu-btn') as HTMLButtonElement
  const mobileMenu = element.querySelector('#mobile-menu') as HTMLDivElement

  const isDark = () => document.documentElement.classList.contains('dark')
  const updateIcon = () => {
    themeIcon.textContent = isDark() ? '☀️' : '🌙'
  }
  
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  updateIcon()

  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
    localStorage.theme = isDark() ? 'dark' : 'light'
    updateIcon()
  })

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
  })
}
