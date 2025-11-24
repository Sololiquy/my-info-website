import LinkIcon from "assets/hyperlink.tsx";

type Parameter = {
   title: string;
   description: string;
   period: string;
   url: string;
};

export default function CardHistory({ title, description, period, url }: Parameter) {
   return (
      <div className={`w-full p-2 gap-1 flex flex-row bg-(--card-experience-bg) items-center`}>
         <div className={`flex flex-col grow`}>
            <div className="text-xl font-bold">{title}</div>
            <div className={`italic`}>{description}</div>
            <div>{period}</div>
         </div>
         {url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
               <div className={`size-10 p-2 shrink-0 border rounded-xl`}>
                  <LinkIcon />
               </div>
            </a>
         )}
      </div>
   );
}
