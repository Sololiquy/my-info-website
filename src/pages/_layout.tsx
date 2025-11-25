import { useState } from "react";
import { Outlet, Link } from "react-router";
import { useT } from "@/lang/_locale";

import ThemeSwitch from "@/components/button/themeSwitch";
import LanguageSwitcher from "@/components/button/languageSwitch";

export default function Layout() {
   const text = useT();
   const [tabIndex, setTabIndex] = useState<number>(0);
   return (
      <div className={`allScreen flex allCenter`}>
         <div className={`flex flex-col gap-2 absolute top-3 right-3`}>
            <ThemeSwitch />
            <LanguageSwitcher />
         </div>
         <div className={`w-300 h-200 flex flex-col`}>
            <div className={`h-15 shrink-0 flex flex-row text-2xl allCenter`}>
               <Link className={`tabLink ${tabIndex === 0 ? "tabLink_active" : ""}`} onClick={() => setTabIndex(0)} to="contact">
                  {text.contact}
               </Link>
               <Link className={`tabLink ${tabIndex === 1 ? "tabLink_active" : ""}`} onClick={() => setTabIndex(1)} to="/experience">
                  {text.experience}
               </Link>
               <Link className={`tabLink ${tabIndex === 2 ? "tabLink_active" : ""}`} onClick={() => setTabIndex(2)} to="/project">
                  {text.project}
               </Link>
            </div>
            <div className={`h-185 p-2 bg-(--content-bg) dark:shadow-[0_0_5px_rgba(255,255,255,0.6)] transition`}>
               <Outlet />
            </div>
         </div>
      </div>
   );
}
