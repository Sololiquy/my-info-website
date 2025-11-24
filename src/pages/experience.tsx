import { useSelector } from "react-redux";
import type { RootState } from "@/redux/_store";

import data from "@/metadata/experienceHistory.json";
import CardHistory from "components/card/experienceCard";

export default function Experience() {
   const lang = useSelector((state: RootState) => state.lang.lang);

   if (!data || data.length === 0) {
      return <div>No experience found.</div>;
   }

   return (
      <div className="allFull flex flex-col gap-2 overflow-y-auto">
         {data.map((item, index) => (
            <CardHistory key={index} title={item.title[lang]} location={item.location[lang]} period={item.period} />
         ))}
      </div>
   );
}
