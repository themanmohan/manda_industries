import React from 'react'
import Image from "next/image";

const QualityCard = ({ imgURL, label, subtext }: { imgURL: string; label: string; subtext: string }) => {
    return (
      <div className='flex-1 sm:w-[300px] sm:min-w-[300px] w-full rounded-[10px] shadow-3xl px-6 py-5 cursor-pointer'>
        <div className='flex items-center gap-3'>
        <div className='w-7 h-7 flex justify-center items-center bg-coral-red rounded-full'>
          <Image src={imgURL} alt={label} width={18} height={18} />
        </div>
        <h3 className='font-palanquin text-xl leading-normal font-bold'>
          {label}
        </h3>
        </div>
        <p className='mt-3 break-words font-montserrat leading-normal text-slate-gray'>
          {subtext}
        </p>
      </div>
    );
  };
  
  export default QualityCard;