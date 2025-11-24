import { useSelector } from "react-redux";
import type { RootState } from "@/redux/_store";

import en from "./en.json";
import id from "./id.json";

const resources = { en, id };

type TranslationKeys = keyof typeof en;

export function useT() {
   const lang = useSelector((state: RootState) => state.lang.lang);

   return new Proxy({} as Record<TranslationKeys, string>, {
      get(_, key: TranslationKeys) {
         return resources[lang][key];
      },
   });
}
