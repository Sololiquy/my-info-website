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
         <div className={`w-full p-2 gap-1 flex flex-row bg-(--card-experience-bg)`}>
            <div className={`flex flex-col grow`}>
               <div className={`text-xl font-bold`}>{data.title}</div>
               {/* <div>{data.url}</div> */}
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
