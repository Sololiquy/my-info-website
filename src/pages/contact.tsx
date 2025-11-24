import EmailIcon from "assets/contactIcon/email";
import GithubIcon from "assets/contactIcon/github";
import PhoneNumberIcon from "assets/contactIcon/phone";

export default function Contact() {
   return (
      <div className={`allFull flex allCenter`}>
         <div className={`flex flex-col gap-5`}>
            <div className={`flex flex-row gap-5 text-3xl items-center`}>
               <EmailIcon className={`size-20`} />
               <span>alfathadityaputra10@gmail.com</span>
            </div>
            <div className={`flex flex-row gap-5 text-3xl items-center`}>
               <GithubIcon className={`size-20`} />
               <span>Sololiquy</span>
            </div>
            <div className={`flex flex-row gap-5 text-3xl items-center`}>
               <PhoneNumberIcon className={`size-20`} />
               <span>082376448542</span>
            </div>
         </div>
      </div>
   );
}
