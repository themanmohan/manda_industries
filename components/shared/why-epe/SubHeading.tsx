import React from 'react'
import Image from "next/image"
const SubHeading: React.FC<{ lableText: string, icon: string }> = ({lableText, icon}) => {
  return (
    <div className='flex mt-5 border rounded-md'>
    <div className='bg-gray-200 w-[5%] text-center p-3 flex flex-col justify-center items-center'>
        <Image src={icon}  alt='svgIcon' />
    </div>

    <div className='bg-coral-red w-[95%] flex items-center p-4 font-krona text-white'>
        {lableText || ""}
    </div>
</div>
  )
}

export default SubHeading
