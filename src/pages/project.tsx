import data from "@/metadata/projectHistory.json";

import CardHistory from "components/card/projectCard";

export default function Project() {
   return (
      <>
         <div className={`allFull flex flex-col gap-2 overflow-y-auto`}>
            {data.map((item) => (
               <CardHistory data={item} />
            ))}
         </div>
      </>
   );
}
