(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    const current = () =>
      root.getAttribute("data-theme") ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    const sync = () => {
      btn.textContent = current() === "dark" ? "light" : "dark";
    };
    sync();

    btn.addEventListener("click", () => {
      const next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      sync();
    });
  });
})();
