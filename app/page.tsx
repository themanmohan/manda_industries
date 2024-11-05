"use client"
import React,{useState, useEffect} from "react"
import Image from "next/image";
import AOS from "aos"
import "aos/dist/aos.css";
import 'react-multi-carousel/lib/styles.css';
import { DownloadIcon } from "@/assets/svgIcon";

import DownloadProductCatalog from "@/components/DownloadProductCatalog";
import ProductCard from "@/components/shared/product/ProductCarousel"
import CarouselComponent from "@/components/shared/Carousel";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components";

import CustomerReviews from "@/sections/CustomerReviews";

import { blogs } from "@/constants";
import { Stats, ShoeCard } from "@/components";

import { AIRBUBBLE1, AIRBUBBLE2, EPE1, EPE2 } from "@/assets/images"


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
  
  const [selectedProduct, updateProduct] = useState(heroSectionArr[0]);

  const productCategories = [{
    images: [AIRBUBBLE1, AIRBUBBLE2],
    title: "AIR BUBBLE FOAM",
    pageLink:"air-bubble",
    desc: "Air bubble film better known as bubble wrap is a Low Density Polyethylene Film (LDPE) based film commonly used for packaging and protecting delicate products. This multilayer film encloses air within a bubble shaped hemispherical outer layer of film providing cushioning effect to fragile products. The added advantages of Air Bubble Film is that it isolates vibration and shock, thus reducing damages during transit to the minimal"
  },
  {
    images: [EPE1, EPE2],
    title: "EPE FOAM",
    pageLink:"why-epe",
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

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
 <section className="w-full flex xl:flex-row flex-col justify-center gap-10 max-container xl:padding-l wide:padding-r pb-[8rem] bg-white">
    <div data-aos="fade-left" className="z-10 relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-10">
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

    <div data-aos="fade-right" className="relative flex-1 flex justify-center items-center max-xl:pt-20 max-xl:pb-[7rem] bg-primary bg-hero bg-cover bg-center -z-100">
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
            />
          </div>
        ))}
      </div>
    </div>

  </section> 
      <section className="my-14 max-container whitespace " data-aos="zoom-in">
        <h1 className="text-[2rem] md:text-3xl font-krona text-center mb-10">OUR <span className="text-coral-red">PRODUCT</span></h1>
        {
          productCategories.map((productCategory, index)=>{
            return (
              <div key={productCategory?.title} data-aos={index % 2 !== 0 ? "fade-left" : "fade-right"} className={`sm:block md:flex xl:flex gap-10 ${index % 2 !== 0 ? 'flex-row-reverse' : ''} mb-10 sm:mb-0`}>
                <div className="xl:w-1/3 md:w-1/2 flex flex-col justify-center">
                  <CarouselComponent images={productCategory?.images} />
                </div>
                
                <div className="xl:w-2/3 md:w-1/2 flex flex-col justify-center my-10 md:my-0">
                  <h1 className="text-2xl font-krona pb-5 text-center md:text-left">{productCategory?.title}</h1>
                  <p className="pb-5 info-text text-center md:text-left">{productCategory?.desc}</p>
                  <Button label="Explore More" btnLink={`${productCategory?.pageLink}`} mobileFullWidth={true} />
                </div>
        
              </div>
            );
          })
        }
      
      </section>

       {/* blog section */}
       <section className="max-container whitespace md:px-20  bg-white latest_post_section" data-aos="zoom-in">
        <h1 className="font-krona text-3xl py-10 text-center">Catalog</h1>

         <ProductCard />

        <div className="flex items-center justify-center w-full">
        <Button label="Explore More" />
        </div>
      </section> 

      <section className="max-container whitespace boxShadow-3xl py-14" data-aos="zoom-out">

        <div className="xl:flex md:block">

          <div className="xl:w-1/3 md:w-full flex flex-col justify-center items-center xl:pr-10 sm:pr-0 xl:mb-0">
            <h1 className="text-center text-4xl font-krona mb-5">Why <span className="text-coral-red">Choose EPE </span>over other</h1>
            <Button label="Know More" btnLink="why-epe" />
          </div>

          <div className="xl:w-2/3 md:w-full xl:border-l-4  mt-5 md:mt-0 xl:border-indigo-500 xl:pl-10 sm:pl-0 ">
            <p className="info-text custom-mt-5"> 
            Polystyrene is a single-impact cushion material. This eliminates any opportunity for reuse as a packaging material. Further, styrene itself is a dangerous chemical, linked to various health issues including cancer, and a serious threat to the environment. Styrofoam packaging products can leach styrene into their surroundings and even into the products they protect. This makes polystyrene much less versatile of a resource, capable of packaging reuse, and much more of a hazard to society.
            Polyethylene on the other hand, presents all of the necessary properties for continued reuse, minimizing its environmental footprint for every package shipped. It’s durability and capacity to absorb multiple impacts make it a perfect material for reusable packaging solutions.
            Food Packaging Forum lays out in clear terms which foams are safe for reuse and which are not safe. Polystyrene is “prone to chemical leaching and less suitable for reuse.” In contrast, “plastic containers with the recycling code 2 (high-density polyethylene, HDPE), 4 (low-density polyethylene, LDPE) or 5 (polypropylene, PP) are safest for reuse.
            </p>
          </div>

        </div>
      </section>


      {/* Review Section */}
      <section className='max-container whitespace py-14 bg-white' data-aos="zoom-in">

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

      {/* blog section */}
      <section className="max-container whitespace py-14" data-aos="zoom-in">
        <h1 className="font-krona text-4xl pb-12 text-center">Latest Posts</h1>
       
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            blogs.map((blog, index) => (
              <BlogCard 
                key={index}
                thumbnail={blog.thumbnail}
                title={blog?.title}
                body={blog?.body}
                tags={blog?.tags}
               />
            ))
          }
        </div>
      </section>
    </>
  )


}

