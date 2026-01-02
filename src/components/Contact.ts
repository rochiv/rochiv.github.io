export const setupContact = (element: HTMLElement) => {
  element.innerHTML = `
    <div class="bg-slate-50 dark:bg-slate-900/50 py-24 border-t border-slate-200 dark:border-slate-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 class="font-serif text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">Get In Touch</h2>
        <p class="font-mono text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Open to new opportunities and interesting conversations.
        </p>

        <!-- Contact Form Card -->
        <div class="max-w-xl mx-auto bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 mb-12">
            <form id="contact-form" class="space-y-6 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label for="firstName" class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 font-serif">First Name</label>
                        <input type="text" id="firstName" name="firstName" required class="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white font-mono text-base">
                    </div>
                    <div>
                        <label for="lastName" class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 font-serif">Last Name</label>
                        <input type="text" id="lastName" name="lastName" required class="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white font-mono text-base">
                    </div>
                </div>
                
                <div>
                    <label for="email" class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 font-serif">Email</label>
                    <input type="email" id="email" name="email" required class="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white font-mono text-base">
                </div>

                <div>
                    <label for="message" class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 font-serif">Message</label>
                    <textarea id="message" name="message" rows="5" required class="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white font-mono text-base resize-none"></textarea>
                </div>

                <button type="submit" class="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold font-serif rounded-xl transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 group">
                    <span>Send Message</span>
                    <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
            </form>
        </div>

        <!-- Social Links (GitHub & LinkedIn only) -->
        <div class="flex justify-center gap-8">
             <!-- GitHub -->
            <a href="https://github.com/rochiv" target="_blank" class="p-4 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white group border border-slate-100 dark:border-slate-700" aria-label="GitHub Profile">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <!-- LinkedIn -->
            <a href="https://linkedin.com/in/rohit-chivukula" target="_blank" class="p-4 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-secondary dark:hover:text-secondary group border border-slate-100 dark:border-slate-700" aria-label="LinkedIn Profile">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
        </div>

      </div>
    </div>
  `;

  // Handle Form Submission (mailto approach - no account needed)
  // Note: This opens the user's email client. For true masking/relay without exposing email in code,
  // you would need a service like Formspree, EmailJS, or a backend. This is the simplest solution
  // for static sites without third-party accounts.
  const form = element.querySelector("#contact-form") as HTMLFormElement;
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = (
      element.querySelector("#firstName") as HTMLInputElement
    ).value.trim();
    const lastName = (
      element.querySelector("#lastName") as HTMLInputElement
    ).value.trim();
    const senderEmail = (
      element.querySelector("#email") as HTMLInputElement
    ).value.trim();
    const message = (
      element.querySelector("#message") as HTMLTextAreaElement
    ).value.trim();

    if (!firstName || !lastName || !senderEmail || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const subject = `Portfolio Contact: ${firstName} ${lastName}`;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`;

    // Open default mail client with pre-filled email
    // The email address will be visible in the mailto link, but this is the standard
    // approach for static sites without backend services
    window.location.href = `mailto:rohitchivukula@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Reset form after a brief delay
    setTimeout(() => {
      form.reset();
    }, 100);
  });
};
