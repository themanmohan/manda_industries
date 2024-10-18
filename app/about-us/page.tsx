
import React from 'react'
import { HeroBanner } from "@/components"
export default function AboutUs() {

  return (

    <section className="">
      <HeroBanner lableText="About Us" />

     <div className='max-conatiner padding-x '>
     <div  className='flex flex-col justify-center items-center compnay_header_section'>
        <div className="py-8 text-center flex flex-col items-center">
          <h2 className='text-coral-red font-bold text-2xl pb-[10px] font-krona'>M AND A INDUSTRIES</h2>
          <h3 className='text-xl font-semibold'>Founded in the year 2005.</h3>
          <p className="w-full md:w-1/2 p-5 text-xl">Our state-of-the-art plant is situated in Baddi, Himachal Pradesh. We are one of the most comprehensive industrial flexible packaging manufacturers in India.</p>
          <p className="w-full md:w-2/3 text-xl">Our plants are the most technologically advanced in India, capable of converting 1100 tons of plastics into air bubble film annually. We produce films with a range of thicknesses, from 30gsm to 200gsm, offering a diverse array of packaging solutions tailored to your products.</p>

        </div>

        <div className="w-full md:w-4/5 pb-10 text-center">

    <p className="mb-5 text-xl">Our EPE line can convert 2000 tons of plastics into Expanded Polyethylene Foam per annum. These films are made in thickness ranging from 0.5 mm to 150 mm. We also manufacture EPE blocks which are used by the Automobile industry, Glass Industry, Furniture Manufacturing, and the food processing industries. These blocks are a direct substitute of EPS blocks (Thermocol), which are polluting in nature.</p>
    <p className="text-xl">Our fully integrated manufacturing process from raw materials to finished goods helps us maintain our superiority when it comes to Quality, Service & Pricing standards for our industry.</p>
    </div>

        <div className='bg-gray-400  w-[90%] px-10 py-10  rounded-md mb-10'>
          <div className="rounded-sm h-400 w-full">
            <h1 className="text-center text-2xl font-bold pb-3 text-coral-red font-krona">OUR GOAL</h1>
            <p className='text-xl'>The goal of M&A Industries is to be known as a leader in innovative packaging solutions, with continued focus on value engineering and building brand equity on the pillars of Quality, Service, Pricing & Constant Innovation</p>
          </div>

          <div className='w-full pt-5' >
            <h1 className="text-center text-2xl font-bold pb-3 text-coral-red font-krona">OUR COMMITMENT</h1>
            <p className='text-xl'>We offer high-quality products and consistent support service to our customers and business partners. Our strategies were formulated in line with our focus on anticipation and satisfying our customer needs and constantly providing good service and prompt delivery. The strength and success of our Group can be directly attributable to our technical skill, innovation & creativity, long-standing dedicated employees, and our strong relationships with our customers and suppliers</p>
          </div>

        </div>

      </div>

     </div>

    </section>
  )
}
