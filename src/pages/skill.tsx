import { useState } from "react";

import { useT } from "@/lang/_locale";
import data from "@/metadata/skill.json";
import SkillCard from "components/card/skillCard";

export default function Skill() {
   const [highlight, setHighlight] = useState<{ name: string; level: number } | null>(null);
   const text = useT();

   return (
      <>
         <div className={`w-full h-180 overflow-y-auto`}>
            <div className={`w-full flex flex-wrap gap-2 justify-center`}>
               {data.map((item, index) => (
                  <SkillCard key={index} name={item.name} level={item.level} setHighlight={setHighlight} />
               ))}
            </div>
         </div>
         <div className={`w-full absolute bottom-0 flex flex-col items-center `}>
            <div className={`mb-1 text-4xl font-bold italic`}>{highlight?.name}</div>
            <div className="text-xl tracking-widest">{highlight ? text[`level-${highlight.level}` as keyof typeof text] : ""}</div>
            <div className="flex gap-2">
               {highlight && [...Array(5)].map((_, i) => <div className={`w-5 h-2 border ${highlight.level > i ? "bg-(--text)" : ""}`} />)}
            </div>
         </div>
      </>
   );
}
