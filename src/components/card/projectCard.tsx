import React from "react";

type parameter = {
   data: {
      title: string;
      url: string;
   };
};

export default function ExperienceCard({ data }: parameter) {
   return (
      <>
         <div className={`w-full p-2 gap-1 flex flex-col bg-(--card-experience-bg)`}>
            <div>{data.title}</div>
            <div>{data.url}</div>
         </div>
      </>
   );
}
