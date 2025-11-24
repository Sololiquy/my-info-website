export default function ButtonThemeSwitch() {
   const toggleTheme = () => {
      const html = document.documentElement;
      const isDark = html.classList.toggle("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
   };

   return (
      <button
         onClick={toggleTheme}
         className="size-15 p-2 rounded-lg bg-(--theme-button-bg) text-white dark:shadow-[0_0_5px_rgba(255,255,255,0.6)] transition"
      >
         O
      </button>
   );
}
