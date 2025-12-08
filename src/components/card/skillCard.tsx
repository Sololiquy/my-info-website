type Parameter = {
   name: string;
   level: number;
   setHighlight: (value: { name: string; level: number } | null) => void;
};

export default function SkillCard({ name, level, setHighlight }: Parameter) {
   return (
      <>
         <div
            className={`size-50 shrink-0 p-5 flex allCenter border`}
            onMouseEnter={() => setHighlight({ name, level })}
            onMouseLeave={() => setHighlight(null)}
         >
            <img src={`/programLanguage/${name}.png`} alt={name} />
         </div>
      </>
   );
}
