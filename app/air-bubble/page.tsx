"use client"
import React,{useEffect} from 'react'
import AOS from "aos"

import Image from "next/image";
import Accordion from "@/components/Accordian";
import Carousel from 'react-multi-carousel';
import { HeroBanner } from '@/components';
import {airBubbleData} from "@/constants/products";
import Heading from "@/components/shared/Heading";

function Airbubble() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const responsive2 = {
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
    useEffect(() => {
        AOS.init({});
      }, []);
    

    return (
        <section>
            <HeroBanner lableText="Air Bubble" />

            <div className="md:flex xl:flex whitespace border max-container bg-white airbubble_section gap-14" style={{ overflowX: 'hidden' }}>
                <div className="w-full md:w-1/3  flex flex-col justify-center gap-20 bg-gray-400 rounded-md px-10 py-5" data-aos="fade-right">

                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive2}
                        infinite={true}
                        autoPlaySpeed={1000}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile", "Desktop"]}
                        dotListClass="custom-dot-list-style"
                        arrows={false} >
                        {airBubbleData?.images.map((img, index) => (
                            <Image key={index} src={img} style={{ height: "300px" }} height={500} alt="Air bubble" className="mx-auto" />
                        ))}
                    </Carousel>

                </div>

                <div className="w-full md:w-2/3 mt-5 md:mt-0 flex flex-col justify-center" data-aos="fade-left">
                    <h1 className="text-2xl font-krona pb-5">Introduction About <span className="text-coral-red">Air Bubble</span></h1>
                    <p className="pb-5 info-text">{airBubbleData?.desc}</p>
                </div>

            </div>


            <div className="whitespace w-full max-container mt-10">
                <h1 className='text-xl md:text-3xl font-krona text-center'>List Of Products Under <span className='text-coral-red'> Air Bubble Pe Film</span></h1>
                <div data-aos="zoom-in">

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

                        {airBubbleData?.categories.map((category, index) => (
                            <div key={index} className="text-center ml-5">
                                <Image src={category?.imgURL} height={50} width={200} style={{height:"300px", width:"100%"}} alt="SDF" className="rounded-md object-contain" />
                                <h3 className="font-krona mt-5">{category?.name}</h3>
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div className="lg:flex xl:flex bg-gray-300 p-5 rounded-md my-10 w-full" >
                    <div className="xl:w-1/3 md:w-full flex justify-center items-center px-10">
                        <h1 className="xl:text-3xl md:text-2xl sm:text-4xl font-krona text-center"> Application of <span className='text-coral-red'> Air Bubble Pe Film</span></h1>
                    </div>
                    <div className="xl:w-2/3 md:w-full py-5 md:py-10">
                        <ol>
                            <li className="info-text">Packing and cushioning material for electrical applicants and precision machine parts, glass and ceramics.</li>
                            <li className="info-text">Surface protective material for stainless steel product, plated product and aluminium construction material.</li>
                            <li className="info-text">Thermal insulating for roof and air condition.</li>

                        </ol>
                    </div>
                </div>

            </div>

            <article className="max-container whitespace bg-white airbubble_section" >
             
                <Heading>
                    <h1 className='text-xl md:text-3xl font-krona mb-5'> Is <span className="text-coral-red"> AIR BUBBLE</span> Recyclable?</h1>
                </Heading>

                <p className="info-text">Yes! This is probably one of the most important characteristics of air bubble polyethylene due to the huge potential impact it can have on the environment.</p>
                <p className="info-text">Air bubble polyethylene can be melted and reshaped into various shapes multiple times. This is due to its high thermal resistance properties that enable it to maintain its chemical structure even when subjected to high temperatures and turned into molten plastic..</p>
                <p className="info-text">This is a very important property of Air bubble material that allows it to be reused and recycled, reducing the amount of plastic in the environment.</p>
                <p className="info-text">Air Bubble Film can be reused and thus reducing the environmental impact also. Since it is easy to collect as against Thermocol (EPS) it is easier to recycle.</p>
            </article>


            <article className="max-container whitespace airbubble_section">
               
                <Heading>
                    <h1 className='text-xl md:text-3xl font-krona '> What Are The Advantages of <span className="text-coral-red"> AIR BUBBLE WRAP</span></h1>
                </Heading>

                <Accordion />
            </article>

            <div className="max-container whitespace bg-white airbubble_section">
             
                <Heading>
                    <h1 className='text-xl md:text-3xl font-krona mb-7'> Examples of Applications of <span className="text-coral-red"> AIR BUBBLE WRAP</span>?</h1>
                </Heading>

                {
                    airBubbleData?.examples.map((example, index) => (
                        <div key={index} className="block md:flex w-full gap-10 max-md:flex-col-reverse  mb-10">
                            {index % 2 === 0 ? (
                                <>
                                    <div className="md:w-2/3 w-full flex justify-center flex-col">
                                        <h2 className="font-krona mb-3 text-xl">{example?.name}</h2>
                                        <p className="info-text">{example?.desc}</p>
                                    </div>
                                    <div className="md:w-1/3 flex w-full order-2 ">
                                        <Image src={example?.imgURL} style={{
                                            width: "100%"
                                        }} width={200} height={200} alt={example?.name}/>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="md:w-1/3 flex  w-full">
                                        <Image src={example.imgURL} style={{
                                            width: "100%"
                                        }} alt={example?.name} />
                                    </div>
                                    <div className="md:w-2/3 w-full  flex justify-center flex-col ">
                                        <h2 className="font-krona mb-3 text-xl">{example?.name}</h2>
                                        <p className="info-text">{example?.desc}</p>
                                    </div>
                                </>

                            )}

                        </div>

                    ))
                }

            </div>

        </section>
    )
}

export default Airbubble