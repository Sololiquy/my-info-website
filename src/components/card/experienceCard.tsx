type Parameter = {
   title: string;
   location: string;
   period: string;
};

export default function CardHistory({ title, location, period }: Parameter) {
   return (
      <div className="p-3 bg-(--content-bg) rounded">
         <div className="text-xl font-bold">{title}</div>
         <div>{location}</div>
         <div>{period}</div>
      </div>
   );
}
