"use client"
 
import Image from "next/image";
import { Button,Stats, ShoeCard } from "@/components";
import 'react-multi-carousel/lib/styles.css';
import { EPE1} from "@/assets/images"

import { useState } from "react";
import { shoes } from "../constants";


function HeroSection() {
  const [bigShoeImg, setBigShoeImg] = useState(EPE1);

 

  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container xl:padding-l wide:padding-r padding-b bg-white">
    <div className="z-10 relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-10">
      <p className="text-xl font-krona text-coral-red">
        Our Product
      </p>

      <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">

        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
          Safe and Reliable
        </span>
        <br />

        <span className="text-coral-red inline-block mt-3 ">
          EPE Foam
        </span>
      </h1>

      <p className="font-sans text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
        Customizable foam packaging designed to safeguard your products during transit and storage.
      </p>


      <Button label='Contact Us' btnLink="contact-us" />

      <Stats />

    </div>

    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center -z-100">
      <Image
        src={bigShoeImg}
        alt='shoe colletion'
        width={610}
        height={102}
        style={{height:"600px"}}
        className='object-contain relative z-10 rotate-[35deg]'
      />

      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
        {shoes.map((shoe, index) => (
          <div key={index}>
            <ShoeCard
              index={index}
              imgURL={shoe.thumbnail.src}
              changeBigShoeImage={(shoe: string) => setBigShoeImg(shoe)} // Added type annotation for clarity
              bigShoeImg={bigShoeImg}
            />
          </div>
        ))}
      </div>
    </div>

  </section>
  )
}

export default HeroSection