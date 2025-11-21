export const setupHero = (element: HTMLElement) => {
  element.innerHTML = `
    <div class="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark transition-colors duration-500">
      <canvas id="lorenz-canvas" class="absolute inset-0 z-0 opacity-40 dark:opacity-50"></canvas>
      
      <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pointer-events-none select-none mix-blend-multiply dark:mix-blend-normal">
        <h1 class="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-tight animate-fade-in">
          Rohit Chivukula
        </h1>
        <p class="font-mono text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
          Machine Learning Engineer & Full Stack Developer. <br>
          Crafting intelligent systems with mathematical precision.
        </p>
        <div class="flex justify-center gap-6 animate-fade-in delay-400 pointer-events-auto">
          <!-- BUGFIX: "View Work" button translucent in light mode -- needs to be solid -->
          <a href="#projects" class="px-8 py-4 rounded-lg bg-primary text-white font-serif font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 opacity-100">
            View Work
          </a>
        </div>
      </div>
      
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" class="text-slate-400 hover:text-primary transition-colors p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </div>
  `;

  initLorenzAttractor(
    element.querySelector("#lorenz-canvas") as HTMLCanvasElement
  );
};

function initLorenzAttractor(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!;
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Lorenz System Parameters (Classic values)
  const sigma = 10;
  const rho = 28;
  const beta = 8 / 3;

  // Initial state
  let x = 0.1;
  let y = 0;
  let z = 0;
  const dt = 0.01;

  // Store points for the loop
  const points: { x: number; y: number; z: number }[] = [];
  const maxPoints = 2000; // Enough points for a smooth loop

  // Pre-calculate a full loop cycle
  for (let i = 0; i < maxPoints; i++) {
    // Actual Lorenz Attractor differential equations
    const dx = sigma * (y - x);
    const dy = x * (rho - z) - y;
    const dz = x * y - beta * z;

    x += dx * dt;
    y += dy * dt;
    z += dz * dt;

    points.push({ x, y, z });
  }

  // Rotation angle for smooth rotation
  let rotation = 0;
  const isDarkMode = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ||
    document.documentElement.classList.contains("dark");

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Watch for theme changes
  const observer = new MutationObserver(() => {
    // Theme changed, will use updated colors in next draw
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    ctx.save();
    ctx.translate(width / 2, height / 2);

    // Responsive scale
    const scale = Math.min(width, height) / 50;

    // Slow continuous rotation
    rotation += 0.003;
    ctx.rotate(rotation);

    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    // Draw the Lorenz attractor loop
    if (points.length > 1) {
      ctx.beginPath();
      ctx.moveTo(points[0].x * scale, points[0].y * scale);

      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x * scale, points[i].y * scale);
      }

      // Different colors for light vs dark mode
      const darkMode = isDarkMode();
      const gradient = ctx.createLinearGradient(
        -width / 3,
        -height / 3,
        width / 3,
        height / 3
      );

      if (darkMode) {
        // Brighter, more contrasting colors for dark mode
        gradient.addColorStop(0, "rgba(167, 139, 250, 0.9)"); // Violet-400 (brighter)
        gradient.addColorStop(0.5, "rgba(251, 191, 36, 0.9)"); // Amber-400 (high contrast)
        gradient.addColorStop(1, "rgba(129, 140, 248, 0.9)"); // Indigo-400 (brighter)
      } else {
        // Original theme colors for light mode
        gradient.addColorStop(0, "rgba(139, 92, 246, 0.8)"); // Violet
        gradient.addColorStop(0.5, "rgba(190, 18, 60, 0.8)"); // Rose
        gradient.addColorStop(1, "rgba(79, 70, 229, 0.8)"); // Indigo
      }

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2.5;
      ctx.stroke();
    }

    ctx.restore();
    requestAnimationFrame(draw);
  }

  draw();
}
