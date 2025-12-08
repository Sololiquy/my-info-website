import { useState } from "react";

import data from "@/metadata/skill.json";
import SkillCard from "components/card/skillCard";

export default function Skill() {
   const [highlight, setHighlight] = useState<{ name: string; level: number } | null>(null);

   return (
      <>
         <div className={`w-full h-180 overflow-y-auto`}>
            <div className={`w-full flex flex-wrap gap-2 justify-center`}>
               {data.map((item, index) => (
                  <SkillCard key={index} name={item.name} level={item.level} setHighlight={setHighlight} />
               ))}
            </div>
         </div>
         <div className={`w-full absolute bottom-0 gap-2 flex flex-col items-center text-4xl italic`}>
            <div className={`w`}>{highlight?.name}</div>
            <div className="flex gap-2">
               {highlight && [...Array(5)].map((_, i) => <div className={`w-5 h-2 border ${highlight.level > i ? "bg-(--text)" : ""}`} />)}
            </div>
         </div>
      </>
   );
}
