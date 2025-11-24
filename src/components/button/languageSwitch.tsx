import { useDispatch, useSelector } from "react-redux";
import { setLang } from "@/redux/langSlice";

export default function LanguageSwitcher() {
   const lang = useSelector((s: any) => s.lang.lang);
   const dispatch = useDispatch();

   return (
      <button
         onClick={() => dispatch(setLang(lang === "en" ? "id" : "en"))}
         className="w-15 h-10 p-2 rounded-lg text-default bg-gray-200 dark:shadow-[0_0_5px_rgba(255,255,255,0.6)] transition"
      >
         {lang === "en" ? "EN" : "ID"}
      </button>
   );
}
