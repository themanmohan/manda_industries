"use client"
 
import Image from "next/image";
// import { shoes } from "../constants";
import { Button,Stats, ShoeCard } from "../components";
import CustomerReviews from "@/sections/CustomerReviews";
import Link from "next/link"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PdfGenerator from "@/components/PdfGenerator";
import { AIRBUBBLE1, AIRBUBBLE2, EPE1, EPE2 } from "@/assets/images"

import { useState } from "react";
import { shoes } from "../constants";



export default function Home() {
  const [bigShoeImg, setBigShoeImg] = useState(EPE1);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const productCatalog = [{
    images: [AIRBUBBLE1, AIRBUBBLE2],
    title: "",
    desc: ""
  }]
  const productCatalog2 = [{
    images: [EPE1, EPE2],
    title: "",
    desc: ""
  }]

  return (
    <>
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

      <section className="my-20 max-container whitespace">
        <h1 className="text-4xl font-krona text-center mb-10">OUR <span className="text-coral-red">PRODUCT</span></h1>

        <div className="sm:block md:flex gap-10 xl:flex mb-10">

          <div className="xl:w-1/3 md:w-1/2  flex  flex-col justify-center">

            <Carousel

              swipeable={false}
              draggable={false}
              showDots={true}
              autoPlay={true}
              responsive={responsive}
              infinite={true}
              autoPlaySpeed={2000}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile", "Desktop"]}
              dotListClass="custom-dot-list-style"
              arrows={false} >

              {productCatalog[0]?.images.map((imageURL, index) => (
                <div key={index} className="bg-gray-400 w-full rounded-lg">

                  <Image src={imageURL} height={500} alt="SDF" style={{ height: "400px" }} className="mx-auto" />

                </div>
              ))}
            </Carousel>

          </div>

          <div className="xl:w-2/3 md:w-1/2  flex flex-col justify-center" >
            <h1 className="text-2xl font-krona pb-5">AIR BUBBLE FORM</h1>
            <p className="pb-5 info-text">Air bubble film better known as bubble wrap is a Low Density Polyethylene Film (LDPE) based film commonly used for packaging and protecting delicate products. This multilayer film encloses air within a bubble shaped hemispherical outer layer of film providing cushioning effect to fragile products. The added advantages of Air Bubble Film is that it isolates vibration and shock, thus reducing damages during transit to the minimal</p>
            <Button label="Explore More" btnLink="airbubble" />
          </div>
        </div>


        <div className="sm:flex md:flex xl:flex gap-10">


          <div className="xl:w-2/3 md:w-1/2  flex flex-col justify-center" >
            <h1 className="text-2xl font-krona pb-5">EPE FORM</h1>
            <p className="pb-5 info-text">Air bubble film better known as bubble wrap is a Low Density Polyethylene Film (LDPE) based film commonly used for packaging and protecting delicate products. This multilayer film encloses air within a bubble shaped hemispherical outer layer of film providing cushioning effect to fragile products. The added advantages of Air Bubble Film is that it isolates vibration and shock, thus reducing damages during transit to the minimal</p>
            <Button label="Explore More" />
            <PdfGenerator />
          </div>

          <div className="xl:w-1/3 md:w-1/2  flex flex-col justify-center">

            <Carousel

              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile", "Desktop"]}
              dotListClass="custom-dot-list-style"
              arrows={false} >

              {productCatalog2[0]?.images.map((imageURL, index) => (
                <div key={index} className="bg-gray-400 w-full rounded-lg">

                  <Image src={imageURL} height={500} alt="SDF" style={{ height: "400px" }} className="mx-auto" />

                </div>
              ))}
            </Carousel>

          </div>
        </div>
      </section>

       <section className="max-container bg-white whitespace why_epe_section boxShadow-3xl">
        {/* <h1 className="text-center text-4xl font-krona mb-5">WHY <span className="text-coral-red">EPE</span> ?</h1> */}

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


      <section className="max-container whitespace md:px-20 py-20 bg-white latest_post_section">
        <h1 className="font-krona text-4xl py-12 text-center">Latest Posts</h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {
            [{
              id: 1,
              title: "Why Choose EPE",
              // category: "EPE",
              published: "Manmohan",
              author: "Manmohan"
            }, {
              id: 1,
              title: "test2",
              // category: "asjgdja",
              published: "nbvnv",
              author: "mannu"
            }, {
              id: 1,
              title: "test3",
              // category: "airbubble",
              published: "nbvnv",
              author: "mannu"
            }].map((value, index) => (
              <Post data={value} key={index}></Post>
            ))
          }
        </div>
      </section>
    </>
  )


}



function Post({ data }: { data: object }) {
  const { id, title, published } = data as { id: number; title: string; published: string };
  return (
    <div className="item">
      <div className="images">
        <Link href={`/blog/${id}`}><Image src="https://res.cloudinary.com/hpnoardgude/image/upload/v1728202052/CropImage_cxpukm.jpg" className="rounded" width={500} height={400} alt="wer" /></Link>
      </div>
      <div className="info flex justify-center flex-col pt-2 pb-4">

        <div className="title">
          <Link href={`/blog/${id}`}><p className="text-xl font-krona text-gray-800 hover:text-gray-600">{title || "Title"}</p></Link>
        </div>
        <p className="text-gray-500 pt-3 pb-2 font-sans">
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind
          text
        </p>
        <div className="flex flex-wrap justify-end items-end my-2">
          {/* <Link href={`/posts/${id}`}><p className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</p></Link> */}
          <span className="text-gray-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-gray-600 bg-transparent">bubble</span>
          <span className="text-gray-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-gray-600 bg-transparent">news</span>
          <span className="text-gray-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-gray-600 bg-transparent">packaging</span>
        </div>
        <div className="flex justify-between">
          <p>9 min</p>
          <Link href={`/blog/${id}`}><p className="text-black font-bold capitalize hover:text-gray-600">- {published || "Unknown"}</p></Link>
        </div>
      </div>
    </div>
  )
}
