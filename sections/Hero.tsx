import { useState } from "react";
import Image from "next/image";
import { shoes } from "../constants";
import { Button, ShoeCard, Stats } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

function Hero() {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container xl:padding-l wide:padding-r padding-b">
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-10">
      <p className="text-xl font-montserrat text-coral-red">
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

      <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
      Customizable foam packaging designed to safeguard your products during transit and storage. 
      </p>


      <Button label='Contact Us' iconURL={arrowRight} />

      <Stats />

    </div>

    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
    <Image
        src={bigShoeImg}
        alt='shoe colletion'
        width={610}
        height={502}
        className='object-contain relative z-10'
      />

      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
      {shoes.map((image, index) => (
          <div key={index}>
           <ShoeCard
              index={index}
              imgURL={image}
              changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
            /> 
          </div>
        ))}
      </div>
    </div>

  </section>
  )
}

export default Hero