import Image from "next/image";

const ContactCard = ({ imgURL, label, subtext }: { imgURL: string; label: string; subtext: string }) => {
    return (
      <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-8 py-8'>

        <h3 className='font-krona text-md leading-normal font-bold'>
          {label}
        </h3>
        <p className='mt-3 break-words font-montserrat text-md leading-normal text-slate-gray'>
          <p>Email:</p>
          <p>phone number:</p>
        </p>
      </div>
    );
  };
  
  export default ContactCard;