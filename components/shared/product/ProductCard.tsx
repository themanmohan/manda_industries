import React from 'react'
import Image from "next/image"
import Carousel from 'react-multi-carousel';


import { blogs } from "@/constants";

const ProductCard = () => {

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 3 },
        desktop: { breakpoint: { max: 1280, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
      };

  return (
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
    arrows={false}
  >
     {blogs.map((blog, index) => (
    <div key={index} className="boxShadow rounded-md mx-3">
      <div className="images">
        <Image src={blog.thumbnail} className="rounded-t-md h-[230px]" width={500} height={300} alt={blog.title} />
      </div>
      <div className="info flex justify-center flex-col pt-2 pb-4 px-6">
        <div className="title">
          <p className="text-xl my-2 font-krona text-gray-800 hover:text-gray-600">{blog.title}</p>
        </div>
        <p className="text-gray-500 pb-2 font-sans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatemm
        </p>
        <button className={`flex justify-center w-auto items-center gap-2 px-5 py-3 border font-krona text-sm rounded-md leading-none bg-coral-red text-white border-coral-red`}>Make Enquiry</button>
      </div>
    </div>
   ))}
    </Carousel>
  );

}

export default ProductCard