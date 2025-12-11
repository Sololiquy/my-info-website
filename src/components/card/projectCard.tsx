import LinkIcon from "assets/hyperlink.tsx";

type parameter = {
   data: {
      title: string;
      url: string;
   };
};

export default function ExperienceCard({ data }: parameter) {
   return (
      <>
         <div className={`w-full h-15 p-2 gap-1 shrink-0 flex flex-row bg-(--card-experience-bg) items-center`}>
            <div className={`flex flex-col grow`}>
               <div className={`text-xl font-bold`}>{data.title}</div>
               <div>{data.date_created}</div>
            </div>
            {data.url && (
               <a href={data.url} target="_blank" rel="noopener noreferrer">
                  <div className={`size-10 p-2 shrink-0 border rounded-xl`}>
                     <LinkIcon />
                  </div>
               </a>
            )}
         </div>
      </>
   );
}
