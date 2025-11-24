import { Outlet, Link } from "react-router";
import { useT } from "@/lang/_locale";

import ThemeSwitch from "@/components/button/themeSwitch";
import LanguageSwitcher from "@/components/button/languageSwitch";

export default function Layout() {
   const text = useT();
   return (
      <div className={`allScreen flex allCenter`}>
         <div className={`w-300 h-200 gap-1 flex flex-col`}>
            <div className={`flex flex-col gap-2 absolute top-3 right-3`}>
               <ThemeSwitch />
               <LanguageSwitcher />
            </div>
            <div
               className={`h-15 flex flex-row gap-10 text-2xl allCenter p-2 bg-(--content-bg) dark:shadow-[0_0_0_rgba(255,255,255,0.6)] transition`}
            >
               <Link to="contact">{text.contact}</Link>
               <Link to="/experience">{text.experience}</Link>
               <Link to="/project">{text.project}</Link>
            </div>
            <div className={`h-185 p-2 bg-(--content-bg) dark:shadow-[0_0_5px_rgba(255,255,255,0.6)] transition`}>
               <Outlet />
            </div>
         </div>
      </div>
   );
}
