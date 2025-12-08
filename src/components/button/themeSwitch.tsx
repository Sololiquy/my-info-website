import { useEffect, useState } from "react";
import LightModeIcon from "@/assets/theme/sun";
import DarkModeIcon from "@/assets/theme/moon";

export default function ButtonThemeSwitch() {
   const [theme, setTheme] = useState<"light" | "dark">(() => {
      const saved = localStorage.getItem("theme") as "light" | "dark" | null;
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return saved ?? (systemDark ? "dark" : "light");
   });

   useEffect(() => {
      document.documentElement.classList.toggle("dark", theme === "dark");
   }, [theme]);

   const toggleTheme = () => {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
   };

   return (
      <button
         onClick={toggleTheme}
         className="size-15 p-2 rounded-lg bg-(--theme-button-bg) text-white dark:shadow-[0_0_5px_rgba(255,255,255,0.6)] transition"
      >
         {theme === "dark" ? <DarkModeIcon className="w-full h-full" /> : <LightModeIcon className="w-full h-full" />}
      </button>
   );
}
