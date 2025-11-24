type ParameterType = {
   className?: string;
};

export default function Email({ className }: ParameterType) {
   return (
      <svg
         className={className}
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         stroke="currentColor"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
         <rect x="3" y="5" width="18" height="14" rx="2" />
      </svg>
   );
}
