"use client"
import { star } from "@/assets/icons";
import Image from "next/image"

const ReviewCard = ({ imgURL, customerName, rating, feedback }: { imgURL: string; customerName: string; rating: number; feedback: string }) => {
  return (
    <div className='flex justify-center items-center flex-col mt-5 hover:bg-slate-200 py-10 rounded-md px-5'>
      <Image
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='mt-6 max-w-sm text-center font-sans text-md info-text'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <Image
          src={star}
          width={20}
          height={20}
          alt='rating star'
          className='object-contain m-0'
        />
        <p className='text-md font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <h3 className='mt-1 font-krona text-md text-center font-bold'>
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;