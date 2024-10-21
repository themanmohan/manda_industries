import React from 'react';
import {  
    AddressIcon,
    PhoneIcon,
    EmailIcon 
} from '@/assets/svgIcon';

import {propsType} from "@/types";
import Image from "next/image";

function ContactDetailCard({
    title,
    emailAddress,
    mobileNumber,
    address
}: propsType) {
  return (
    <div className='mb-10'>

    <h1 className="text-[1.7rem] sm:text-3xl font-bold font-krona"><span className="text-coral-red">{title || " "}</span> Office</h1>
    <div className="flex gap-2 items-center mt-5">
      <span className="p-2 bg-coral-red block w-fit rounded-full">  <Image src={AddressIcon} alt={""}/> </span>
      <p className="font-sans text-lg">{address|| " "}</p>
    </div>

    <div className="flex gap-2 items-center mt-4">
      <span className="p-2 bg-coral-red block w-fit rounded-full"><Image src={PhoneIcon} alt={""}/></span>
      <p className="font-sans text-lg">{mobileNumber || " "}</p>
    </div>

    <div className="flex gap-2 items-center mt-4">
      <span className="p-2 bg-coral-red block w-fit rounded-full"><Image src={EmailIcon} alt={""}/> </span>
      <p className="font-sans text-lg" >{emailAddress || " "}</p>
    </div>

  </div>
  )
}

export default ContactDetailCard;
