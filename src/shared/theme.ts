/** Dark mode initialization, toggle, and persistence utilities. */

export function initTheme(): void {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function toggleTheme(): void {
  document.documentElement.classList.toggle("dark");
  localStorage.theme = isDark() ? "dark" : "light";
}

export function isDark(): boolean {
  return document.documentElement.classList.contains("dark");
}
