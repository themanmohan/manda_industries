interface ManagmentContactCard {
  title:string,
  email: string;
  phoneNumber: string;
}

const ManagmentContactCard: React.FC<ManagmentContactCard> = ({ email,  phoneNumber, title}) => {
    return (
      <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[10px] shadow-3xl px-8 py-8'>

        <h3 className='font-krona text-md leading-normal font-bold'>
        {title || " "}
        </h3>
        <p className='mt-3 break-words font-montserrat text-md leading-normal text-slate-gray'>
          <p><span className="font-bold">Email:-</span> {email || " "}</p>
          <p><span className="font-bold">Phone Number:-</span> {phoneNumber || " "}</p>
        </p>
      </div>
    );
  };
  
  export default ManagmentContactCard;