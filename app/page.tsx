"use client"
import React,{useState, useEffect} from "react"
import Image, {StaticImageData} from "next/image";
import { Button } from "../components";
import CustomerReviews from "@/sections/CustomerReviews";
import 'react-multi-carousel/lib/styles.css';
import { AIRBUBBLE1, AIRBUBBLE2, EPE1, EPE2 } from "@/assets/images"
import { DownloadIcon } from "@/assets/svgIcon";

import DownloadProductCatalog from "@/components/DownloadProductCatalog"
import { Stats, ShoeCard } from "@/components";
import 'react-multi-carousel/lib/styles.css';

import CarouselComponent from "@/components/shared/Carousel";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/constants";

const heroSectionArr =[
  {
    id:1,
    title:"Air bubble",
    desc:"1Customizable foam packaging designed to safeguard your products during transit and storage.",
    img:{
      thumbnail: AIRBUBBLE1,
      subThumbnail:AIRBUBBLE2
    }
  },
  {
    id:2,
    title:"EPE FOAM",
    desc:"2Customizable foam packaging designed to safeguard your products during transit and storage.",
    img:{
      thumbnail: EPE1,
      subThumbnail:EPE2
    }
  },
  {
    id:3,
    title:"Air bubble",
    desc:"3Customizable foam packaging designed to safeguard your products during transit and storage.",
    img:{
      thumbnail: AIRBUBBLE1,
      subThumbnail:AIRBUBBLE2
    }
  },
];

export default function Home() {
  const [bigShoeImg, setBigShoeImg] = useState<string | StaticImageData>(EPE1);
  const [selectedProduct, updateProduct] = useState(heroSectionArr[0]);

  const productCategories = [{
    images: [AIRBUBBLE1, AIRBUBBLE2],
    title: "AIR BUBBLE FOAM",
    desc: "Air bubble film better known as bubble wrap is a Low Density Polyethylene Film (LDPE) based film commonly used for packaging and protecting delicate products. This multilayer film encloses air within a bubble shaped hemispherical outer layer of film providing cushioning effect to fragile products. The added advantages of Air Bubble Film is that it isolates vibration and shock, thus reducing damages during transit to the minimal"
  },
  {
    images: [EPE1, EPE2],
    title: "EPE FOAM",
    desc: "Air bubble film better known as bubble wrap is a Low Density Polyethylene Film (LDPE) based film commonly used for packaging and protecting delicate products. This multilayer film encloses air within a bubble shaped hemispherical outer layer of film providing cushioning effect to fragile products. The added advantages of Air Bubble Film is that it isolates vibration and shock, thus reducing damages during transit to the minimal"
  }

]


  const changeHandler = (id: number) =>{

    const data = heroSectionArr.find((heroSection)=>heroSection.id === id);
    console.log("data", data);
    if (data) { // Check if data is not undefined
        updateProduct(data);
    }

  }

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (heroSectionArr.indexOf(selectedProduct) + 1) % heroSectionArr.length; // Get the next index
      updateProduct(heroSectionArr[nextIndex]);
    }, 3000); 

    return () => clearInterval(interval)
  }, [selectedProduct]);

  return (
    <>
      <section className="w-full flex xl:flex-row flex-col justify-center gap-10 max-container xl:padding-l wide:padding-r pb-[8rem] bg-white">
    <div className="z-10 relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-10">
      <p className="text-xl font-krona text-coral-red">
        Our Product
      </p>

      <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">

        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
          Safe and Reliable
        </span>
        <br />

        <span className="text-coral-red inline-block mt-3">
          { selectedProduct?.title || " "}
        </span>
      </h1>

      <p className="font-sans text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
        {selectedProduct?.desc || " "}
      </p>

     <DownloadProductCatalog iconURL={DownloadIcon}/>
      <Stats />

    </div>

    <div className="relative flex-1 flex justify-center items-center max-xl:pt-20 max-xl:pb-[7rem] bg-primary bg-hero bg-cover bg-center -z-100">
      <Image
        src={selectedProduct?.img?.thumbnail}
        alt='shoe colletion'
        width={610}
        height={102}
        className='object-contain h-[200px] relative z-10 rotate-[0deg] md:rotate-[35deg] md:h-[450px]'
      />

      <div className="flex sm:gap-6 gap-4 absolute -bottom-[13%] sm:left-[10%] max-sm:px-6">
        {heroSectionArr.map((shoe, index) => (
          <div key={index}>
            <ShoeCard
              id={shoe.id}
              index={index}
              selectedProduct={selectedProduct}
              changeHandler={changeHandler}
              imgURL={shoe.img.thumbnail}
              changeBigShoeImage={(shoe: string | StaticImageData) => setBigShoeImg(shoe)} // Updated type annotation to accept both string and StaticImageData
              bigShoeImg={bigShoeImg}
            />
          </div>
        ))}
      </div>
    </div>

  </section>

      <section className="my-14 max-container whitespace">
        <h1 className="text-[2rem] md:text-4xl font-krona text-center mb-10">OUR <span className="text-coral-red">PRODUCT</span></h1>
        {
          productCategories.map((productCategory, index)=>{
            return (
              <div key={productCategory?.title} className={`sm:block md:flex xl:flex gap-10 ${index % 2 !== 0 ? 'flex-row-reverse' : ''} mb-10 sm:mb-0`}>
                <div className="xl:w-1/3 md:w-1/2 flex flex-col justify-center">
                  <CarouselComponent images={productCategory?.images} />
                </div>
                
                <div className="xl:w-2/3 md:w-1/2 flex flex-col justify-center">
                  <h1 className="text-2xl font-krona pb-5">{productCategory?.title}</h1>
                  <p className="pb-5 info-text">{productCategory?.desc}</p>
                  <Button label="Explore More" />
                </div>
        
              </div>
            );
          })
        }
      
      </section>

      <section className="max-container bg-white whitespace why_epe_section boxShadow-3xl">

        <div className="xl:flex md:block">

          <div className="xl:w-1/3 md:w-full flex flex-col justify-center items-center xl:pr-10 sm:pr-0 xl:mb-0">
            <h1 className="text-center text-4xl font-krona mb-5">Why <span className="text-coral-red">Choose EPE </span>over other</h1>
            <Button label="Know More" btnLink="why-epe" />
          </div>

          <div className="xl:w-2/3 md:w-full xl:border-l-4  xl:mt-0 md:mt-10 xl:border-indigo-500 xl:pl-10 sm:pl-0">
            <p className="info-text">     Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dicta blanditiis esse adipisci libero optio doloremque cum magnam repellendus rem, sed eos sit doloribus, numquam facere delectus pariatur eum quam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dicta blanditiis esse adipisci libero optio doloremque cum magnam repellendus rem, sed eos sit doloribus, numquam facere delectus pariatur eum quam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dicta blanditiis esse adipisci libero optio doloremque cum magnam repellendus rem, sed eos sit doloribus, numquam facere delectus pariatur eum quam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dicta blanditiis esse adipisci libero optio doloremque cum magnam repellendus rem, sed eos sit doloribus, numquam facere delectus pariatur eum quam!</p>
          </div>

        </div>
      </section>

      <section className='max-container whitespace my-20'>

        <h3 className='font-krona text-center text-4xl'>
          What Our
          <span className='text-coral-red'> Customers </span>
          Say?
        </h3>
        <p className='m-auto mt-4 max-w-lg  text-center info-text'>
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>

        <CustomerReviews />
      </section> 


      <section className="max-container whitespace md:px-20  bg-white latest_post_section">
        <h1 className="font-krona text-4xl py-12 text-center">Latest Posts</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {
            blogs.map((blog, index) => (
              <BlogCard 
                key={index}
                thumbnail={blog.thumbnail}
                title={blog?.title}
                body={blog?.body}
                tags={blog?.tags}
                readTime={blog?.readTime}
                auther={blog?.auther}
               />
            ))
          }
        </div>
      </section>
    </>
  )


}

