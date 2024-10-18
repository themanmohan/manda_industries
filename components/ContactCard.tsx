interface ContactCardProps {

  label: string;
  subtext: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ label }) => {
    return (
      <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[10px] shadow-3xl px-8 py-8'>

        <h3 className='font-krona text-md leading-normal font-bold'>
          {label}
        </h3>
        <p className='mt-3 break-words font-montserrat text-md leading-normal text-slate-gray'>
          <p><span className="font-bold">Email:-</span> jone@gmail.com</p>
          <p><span className="font-bold">Phone Number:-</span> +919218100126</p>
        </p>
      </div>
    );
  };
  
  export default ContactCard;