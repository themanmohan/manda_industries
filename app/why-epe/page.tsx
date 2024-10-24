"use client"

import { HeroBanner } from "@/components"
import Image from "next/image"
import picture2 from "@/assets/images/whyepe/Picture2.png"
import picture3 from "@/assets/images/whyepe/Picture3.png"
import picture4 from "@/assets/images/whyepe/Picture4.png"
import React from 'react';
import Example from "@/components/charts/PieChart"
import Accordion1 from "@/components/shared/Accordian1"
import Heading from "@/components/shared/Heading"
function WhyEPE() {

      
    return (
        <section className="">
            <HeroBanner lableText="WHY EPE" />

            <article className='whitespace max-container bg-white pb-14'>

            <Heading hideArrowInMobile={true} >
                <h2 className='text-[2rem] md:text-4xl font-krona mb-5'> Comparison of <span className='text-coral-red'>Polyethylene</span> and <span className='text-coral-red'>Polystyrene</span> Based on Key Factors</h2>
            </Heading>


                <div className='bg-coral-red flex flex-col md:flex-row w-full justify-evenly py-5 text-white rounded-md' >
                    <h1 className='font-krona text-center md:text-left'>POLYTETHYLENE</h1>
                    <span className='font-krona text-center'>vs</span>
                    <h1 className='font-krona text-center md:text-left'>POLYSTYRENE</h1>
                </div>

                <div className='flex mt-5 border rounded-md'>
                    <div className='bg-gray-400 w-[5%] text-center p-3'></div>

                    <div className='bg-coral-red w-[95%] flex items-center p-4 font-krona text-white'>
                        SUSTAINBILITY
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-5 w-full px-0 md:px-10 mt-10'>
                    <div className='w-full md:w-1/2 bg-gray-100 rounded-sm p-10'>
                        <h4 className='font-krona'>POLYTETHYLENE</h4>

                        <ul className='list-disc text-md info-text pl-5 pt-3'>
                            <li className="pb-3">Capable of repeated reuse</li>
                            <li className="pb-3">Non-toxic</li>
                            <li className="pb-3">100% curbside recyclable as a class 4 material</li>
                            <li className="pb-3">Rate of PE Recycling</li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/2 bg-gray-100 rounded-sm p-10'>
                        <h4 className='font-krona'>POLYSTYRENE</h4>

                        <ul className='list-disc text-md info-text pl-5 pt-3'>
                            <li className="pb-3">Not suitable for reuse</li>
                            <li className="pb-3">Made from styrene, toxic chemical and carcinogen</li>
                            <li className="pb-3">Rejected by most recycling facilities as class 6 material</li>
                            <li>Rate of PE Recycling</li>
                        </ul>
                    </div>
                </div>

            </article>

            <div className='whitespace max-container airbubble_section'>
        

                <Heading hideArrowInMobile={true} >                         <h2 className='text-[2rem] md:text-4xl font-krona mb-5'> <span className='text-coral-red'>EPE</span> Packaging Material</h2> </Heading>



                <section className='rounded-md py-5  mt-5 gap-10'>
                    <div className='w-full xl:border-r md:border-none mb-10'>
                        <h1 className='text-2xl font-krona mb-5'>Recyclability </h1>
                        <p className='info-text mb-3'>1. Polyethylene vs Polystyrene – Polyethylene (EPE) foam represents a significantly more sustainable packaging solution for a variety of simple reasons. Polyethylene foam is reusable and 100% curbside recyclable as a class 4 material. Additionally, our innovative packaging designs, utilizing polyethylene material, achieve an 80% reduction in material. Reduce-able. Reusable. Recyclable.</p>
                        <p className='info-text mb-3'>2. EPS foam manages a paltry 12% rate of recycling and the overwhelming majority of recycling centers across the United States refuse to accept the class 6 material. What’s worse – polystyrene foam has a consumer recycling rate of only 6%, which means that Styrofoam that makes it to customers almost always ends up in a landfill.</p>

                    </div>
                    <div className='w-full'>
                        <h1 className='text-2xl font-krona mb-5' >Reusability</h1>
                        <p className='info-text mb-3'>1. Polystyrene is a single-impact cushion material. This eliminates any opportunity for reuse as a packaging material. Further, styrene itself is a dangerous chemical, linked to various health issues including cancer, and a serious threat to the environment. Styrofoam packaging products can leach styrene into their surroundings and even into the products they protect. This makes polystyrene much less versatile of a resource, capable of packaging reuse, and much more of a hazard to society.</p>
                        <p className='info-text mb-3'>2. Polyethylene on the other hand, presents all of the necessary properties for continued reuse, minimizing its environmental footprint for every package shipped. It’s durability and capacity to absorb multiple impacts make it a perfect material for reusable packaging solutions.</p>
                        <p className='info-text mb-3'>3. Food Packaging Forum lays out in clear terms which foams are safe for reuse and which are not safe. Polystyrene is “prone to chemical leaching and less suitable for reuse.” In contrast, “plastic containers with the recycling code 2 (high-density polyethylene, HDPE), 4 (low-density polyethylene, LDPE) or 5 (polypropylene, PP) are safest for reuse.</p>
                    </div>
                </section>
            </div>

            <div className='max-container whitespace bg-white'>

                <div className='flex mt-5 pt-10'>
                    <div className='bg-gray-400 w-[4%] text-center p-3'></div>

                    <div className='bg-coral-red w-[96%] flex items-center p-4 font-krona text-white'>
                        COST EFFICIENCY
                    </div>

                </div>

                <div className='flex gap-16 w-full px-10 py-10'>
                    <div className='w-1/2'>
                        <h2 className="font-krona text-2xl pb-5" >Less  Material Means Efficient Shipping</h2>
                        <p className="info-text">Our <span>EP3</span> solution are significantly more cost effective to ship due to optimized <span>lower volumetric size</span> packaging and <span>lay-flat design</span></p>
                    </div>

                    <div className='w-1/2 flex gap-3'>
                        <span className="font-krona text-3xl flex justify-center items-center height-fit-content">85%</span>
                        <p className="font-krona text-2xl">less material then the origin <span>EPS</span> packaging</p>
                    </div>
                </div>

                <hr className='border-gray-300 mx-10' />


                <div className='flex px-10 py-10 gap-16'>
                    <div className='w-1/2'>
                        <h2 className="font-krona text-2xl mb-5"><span><span>EPS</span> Packaging Designs </span> Versus Over Packaging with <span>EPS</span></h2>
                        <span className="info-text">Our <span>EP3</span> design featuring <span>polyethylene</span> material, achieves a 77% increase in both pallets storage and container quantity. All of these efficiencies corresponds to significant reduction in freight costs</span>
                    </div>

                    <div className='w-1/2'>
                        <div className="flex flex-col gap-10 border-l-4 border-dotted">

                            <div className="bg-blue-600 py-6 font-krona text-xl">3,360 units per pallet with <span>EP3</span></div>

                            <div className=" bg-blue-600" style={{ width: '15%' }}>
                            <div className="py-6 w-full font-krona text-xl bg-gray-50" style={{backgroundColor: 'transparent' }}> 1,899 units per pallets with EPS</div>
                            </div>

                        </div>

                        <div className="flex mt-5">
                            <span>77%</span>
                            <p>increase in pallet storage over previous <span>EPS</span> design</p>
                        </div>
                    </div>
                </div>

                {/* <Image src={picture2} alt='hdjsa' className='w-[100vw]' /> */}
            </div>

         

            <article className='whitespace max-container airbubble_section'>

                <div >
                 

                    <Heading hideArrowInMobile={true} >                         <h2 className='text-[2rem] md:text-4xl font-krona mb-5'> Less packaging leads to more savings</h2> </Heading>


                    <p className='mb-3 info-text'>The formula for evaluating freight and shipping costs factors in the size, weight, and shape of each package. Optimized designs that decrease the volumetric size and allow for higher efficiencies with e-commerce shipping achieve significant cost efficiencies over traditional packaging methods. EPE USA utilizes polyethylene to engineer packaging designs that achieve up to an 80% reduction in material usage – all of which corresponds to volumetric efficiency and freight cost savings</p>
                    <p className='mb-3 info-text'>Further, we design polyethylene packaging solutions capable of collapsing, nesting, and laying flat during shipping, which allows for optimal efficiency during transit shipments. Cost efficiencies with lay-flat packaging designs translate to warehouse space and storage savings as well.</p>
                    <p className='mb-3 info-text'>To put it simply, polyethylene is a better material choice when it comes to designing packaging solutions. With our proprietary designs utilizing PE foam, we are able to reduce material and improve freight cost savings.</p>
                </div>
            </article>
 
            <div className='max-container whitespace bg-white pb-14'>
                <div className='flex mt-5 pt-10'>
                    <div className='bg-gray-400 w-[4%] text-center p-3'></div>

                    <div className='bg-coral-red w-[96%] flex items-center p-4 font-krona text-white'>
                        CUSHIONING PERFORMANCE
                    </div>

                </div>

                <div className='flex flex-col md:flex-row gap-5 w-full px-0 md:px-10 mt-10'>
                    <div className='w-full md:w-1/2 bg-gray-100 rounded-sm p-10'>
                        <h1 className="font-krona text-center">POLYETHENE</h1>

                        <ul className="list-disc text-md info-text pl-5 pt-3">
                            <li className="pb-3">Expanded polyethylene foam is a <span>multi-impact</span>material</li>
                            <li className="pb-3">Polyethylene is capable of protecting against rogors of e-commerce transit</li>
                            <li className="pb-3"><span>EPE has high ductility, impact strength and creep properties, making it an ideal cushioning resources</span></li>
                        </ul>
                    </div>

                    <div className='w-full md:w-1/2 bg-gray-100 rounded-sm p-10'>
                        <h1 className="font-krona text-center">POLYSTYRENE</h1>


                        <ul className="list-disc text-md info-text pl-5 pt-3">
                            <li className="pb-3">Expanded polystyrene is a <span>single-impact</span>material</li>
                            <li className="pb-3"><span>EPS</span> can lose its cushioning properties after one bump in road</li>
                            <li className="pb-3">Current packaging methods account for $6 billion worth of product breakage annually</li>
                        </ul>
                    </div>
                </div>
                {/* <Image src={picture3} alt='hdjsa' className='w-[100vw]' /> */}
            </div>


            <article className='whitespace max-container py-14'>

                <div>
                

                    <Heading hideArrowInMobile={true} >                         <h2 className='text-[2rem] md:text-4xl font-krona mb-5'> Protect the package at all costs</h2> </Heading>


                    <p className='mb-3 info-text'>Polyethylene proves to be a better packaging material than polystyrene even when discussing the basics of cushioning performance. Expanded polyethylene foam is capable of withstanding multiple impacts. This makes it a perfect cushioning resource, capable of protecting products throughout their entire transit process</p>
                    <p className='mb-3 info-text'>Multi-impact cushioning protection is crucially important in e-commerce, where transit shipments are long and can involve between 5-20 different touchpoints. Also in our country due to the road conditions.</p>
                    <p className='mb-3 info-text'>When comparing protective capabilities, polyethylene’s natural properties elevate it above polystyrene material. In contrast to polyethylene, EPS foam is a single-impact material, rendered useless after one big bump in the road. As a result of traditional packaging with polystyrene material, shipping damage represents a significant cost for e-commerce businesses.</p>
                </div>

            </article>
  
            <div className='max-container whitespace bg-white'>
            <div className='flex mt-5 pt-10 text-center'>
                    <div className='bg-gray-400 w-[4%] text-center p-3'></div>

                    <div className='bg-coral-red w-[96%] flex items-center p-4 font-krona text-white'>
                        SHIPPING DAMAGE
                    </div>

                </div>


                <div className="text-center flex justify-center my-8 ">
                    <p className="w-[60%] text-center text-3xl">By <span>replacing polystyrene,</span> we have helped businesses <span>reduce</span> e-commerce damage rate from <span>20%</span> to <span>1%</span></p>
                </div>

                <div className="flex flex-col md:flex-row gap-5 w-full px-0 md:px-20">
                    <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100 rounded-md">
                        <Example />
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100 rounded-md">
                        <Example />
                    </div>
                </div>

                <h1 className="text-center mt-7 font-krona text-3xl">E-Commerce Shipping Damage Rates</h1>
                {/* <Image src={picture4} alt='hdjsa' className='w-[100vw]' /> */}
            </div>

            <article className='whitespace max-container airbubble_section'>

             

                <div>
                
                    <Heading hideArrowInMobile={true} >                         <h2 className='text-[2rem] md:text-4xl font-krona mb-5'> <span className='text-coral-red'>Polyethylene</span> as a replacement for <span className='text-coral-red'>polystyrene</span></h2> </Heading>

                    <p className='mb-3 info-text'>EPE has helped businesses reduce their e-commerce shipping damage rates from 20% down to 1%. This is accomplished by replacing polystyrene with more sustainable, more efficient and higher performing material. Utilizing polyethylene as the cushioning material in our EP3 designs allows us to use the exact amount of material, positioned in the precise locations, to allow for optimal product protection.</p>
                    <p className='mb-3 info-text'>We welcome the trend of businesses transitioning away from polystyrene to more sustainable materials, like polyethylene. And we offer our innovative and sustainable polyethylene packaging solutions as a superior alternative to polystyrene. And we offer our innovative and sustainable polyethylene packaging solutions as a superior alternative to polystyrene.</p>
                    <p className='mb-3 info-text'>When comparing protective capabilities, polyethylene’s natural properties elevate it above polystyrene material. In contrast to polyethylene, EPS foam is a single-impact material, rendered useless after one big bump in the road. As a result of traditional packaging with polystyrene material, shipping damage represents a significant cost for e-commerce businesses.</p>
                    <p className='mb-3 info-text'>The *consumer durable industry in India* has faced significant losses due to *bad packaging practices*, impacting both manufacturers and consumers. Here’s an overview of how these losses manifest:</p>

                    <Accordion1 />
           
                    <div className="mt-8" >
                    <Heading  >   <h2 className='font-krona text-2xl md:text-3xl'>Conclusion</h2></Heading>
                        <p className='info-text'>Bad packaging practices cost the Indian consumer durable industry in several ways—financially, in terms of customer satisfaction, supply chain disruptions, and environmental impact. Focusing on better packaging materials, design, and logistics can mitigate these losses and improve overall efficiency and profitability in the sector.</p>
                    </div>

                </div>

            </article>




        </section>
    )
}

export default WhyEPE



