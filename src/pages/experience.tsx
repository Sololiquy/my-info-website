import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/_store";
import { useT } from "@/lang/_locale";

import data from "@/metadata/experienceHistory.json";
import CardHistory from "components/card/experienceCard";

export default function Experience() {
   const lang = useSelector((state: RootState) => state.lang.lang);
   const text = useT();

   const [showNonIT, setShowNonIT] = useState(true);
   const filteredData = showNonIT ? data : data.filter((item) => item.isITRelated === true);

   return (
      <div className="allFull flex flex-col gap-2 overflow-y-auto">
         {/* Toggle Button */}
         <div className="h-10 gap-2 flex items-center">
            <button onClick={() => setShowNonIT(!showNonIT)} className="h-full aspect-square p-1 border-2 rounded-lg">
               {showNonIT && <div className="allFull bg-(--text) rounded-md"></div>}
            </button>
            <span className="text-xl italic tracking-wider">{text.it_related_filter}</span>
         </div>

         {/* Content */}
         <div className="h-175 gap-2 flex flex-col">
            {filteredData.map((item, index) => (
               <CardHistory key={index} title={item.title[lang]} description={item.description[lang]} period={item.period} url={item.url} />
            ))}
         </div>
      </div>
   );
}
