"use client"

import Image from "next/image";
import Accordion from "@/components/Accordian";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// 
import { EPE1 } from "@/assets/images/product-images"

import { HeroBanner } from '@/components';
import ima from "@/assets/images/air_bubble_application/automative_air_bubble_wrap.webp";
import Furniture from "@/assets/images/air_bubble_application/furniture_wrap_in_bubble.jpg"
function Airbubble() {

    const responsive = {
        superLargeDesktop: {
      
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const responsive2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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

    const applicationExamples = [
        {
            titile: "Fragile Items",
            imgURL: "",
            desc: "The precious chinaware, glasses, mirrors, artworks such as paintings, and figurines, and vases fall under the category of fragile items. These are delicate and are susceptible to damage. Therefore, bubble wraps are advised as the packaging film to provide the best protection."
        },
        {
            titile: "Sensitive Products",
            imgURL: "",
            desc: "Electronics and electrical items are delicate and can be compromised if they are not well protected. Even a gentle fall can result in irreversible damage. Again, these items have to be protected from static-induced electric charge. Wrapping these products in anti-static bubble wrap will ensure that the products are safe even if they happen to fall down and also it will protect the items from electro-static discharge."
        },
        {
            titile: "AUTOMOTIVE",
            imgURL: "",
            desc: "Starting from small parts of the vehicle to the whole vehicle bubble wrap packaging is an efficient, safe and easy packing option to consider. Wrapping small products into Air Bubble pouches ensures the safety of the product and bubble wrap laminated with epe foam ensures the safety of the whole vehicle."
        },
        {
            titile: "Furniture",
            imgURL: "",
            desc: "These days with mushrooming of e-commerce stores, you can buy your furniture online. The online shops ensure that the product no matter small reaches the customers intact. To ensure that there is no damage to the products delivered, they wrap the items in bubble wrappers. For instance, the glass table tops, glass cabinet doors or any other glass furniture parts that are very fragile are usually wrapped in several layers of air bubble packaging films to provide the much-required cushioning against vibrations and shocks at the time of transit."
        }
    ]

    const categories = [
        {
            titile: "General purpose Air bubble film",
            imgURL: "",
        },
        {
            titile: "Anti-Static Air Bubble Film",
            imgURL: "",
        },
        {
            titile: "VCI (Anti-Rust) Air Bubble Film",
            imgURL: "",
        },
        {
            titile: "Air Bubble Film Laminated with EPE Foam",
            imgURL: "",
        }, {
            titile: "Air Bubble Film Laminated with Aluminium Foil",
            imgURL: "",
        }
    ]

    return (
        <section>
            <HeroBanner lableText="Air Bubble" />

            <div className="sm:block md:flex xl:flex whitespace border max-container bg-white airbubble_section gap-20">
                <div className="w-1/3 flex flex-col justify-center gap-30 bg-gray-400 rounded-md">

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

                        {[1, 2, 3, 4].map((review, index) => (
                            <Image key={index} src={EPE1} style={{ height: "300px" }} height={500} alt="SDF" className="mx-auto" />
                        ))}
                    </Carousel>

                </div>

                <div className="w-2/3 flex flex-col justify-center" >
                    <h1 className="text-2xl font-krona pb-5">Introduction About <span className="text-coral-red">Air Bubble</span></h1>
                    <p className="pb-5 info-text">Air bubble film better known as bubble wrap is a Low Density Polyethylene Film (LDPE) based film commonly used for packaging and protecting delicate products. This multilayer film encloses air within a bubble shaped hemispherical outer layer of film providing cushioning effect to fragile products. The added advantages of Air Bubble Film is that it isolates vibration and shock, thus reducing damages during transit to the minimal</p>

                </div>

            </div>


            <div className="whitespace w-full max-container airbubble_section">
                <h1 className='text-4xl font-krona text-center mb-10'>List Of Products Under <span className='text-coral-red'> Air Bubble Pe Film</span></h1>
                <div>

                    <h1 className='text-2xl font-krona text-center mb-5'> Category</h1>

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

                        {categories.map((category, index) => (
                            <div key={index} className="text-center ml-5">
                                <Image src={EPE1} height={50} width={200} style={{height:"300px", width:"100%"}} alt="SDF" className="mx-aut p-5 bg-gray-300 rounded-md" />
                                <h3 className="font-krona mt-5">{category?.titile}</h3>
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div className="sm:block md:flex xl:flex bg-gray-300 p-5 rounded-md my-10 w-full">
                    <div className="xl:w-1/3 md:w-full flex justify-center items-center p-10">
                        <h1 className="xl:text-3xl md:text-2xl sm:text-4xl font-krona text-center"> Application of <span className='text-coral-red'> Air Bubble Pe Film</span></h1>
                    </div>
                    <div className="xl:w-2/3 md:w-full py-10">
                        <ol>
                            <li className="info-text">Packing and cushioning material for electrical applicants and precision machine parts, glass and ceramics.</li>
                            <li className="info-text">Surface protective material for stainless steel product, plated product and aluminium construction material.</li>
                            <li className="info-text">Thermal insulating for roof and air condition.</li>

                        </ol>
                    </div>
                </div>

            </div>

            <article className="max-container whitespace mb-10 bg-white airbubble_section">
                <div className='flex items-center gap-3'>
                    <h1 className='text-4xl font-krona mb-5'> Is <span className="text-coral-red"> AIR BUBBLE</span> Recyclable?</h1>

                    <span className=""><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.000488281" width="9.88145" height="4.5111" fill="black"></rect></svg></span>
                    <span className=""><svg width="83" height="5" viewBox="0 0 83 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.580078" width="82.3454" height="4.5111" fill="black"></rect></svg></span>
                </div>

                <p className="info-text">Yes! This is probably one of the most important characteristics of air bubble polyethylene due to the huge potential impact it can have on the environment.</p>
                <p className="info-text">Air bubble polyethylene can be melted and reshaped into various shapes multiple times. This is due to its high thermal resistance properties that enable it to maintain its chemical structure even when subjected to high temperatures and turned into molten plastic..</p>
                <p className="info-text">This is a very important property of Air bubble material that allows it to be reused and recycled, reducing the amount of plastic in the environment.</p>
                <p className="info-text">Air Bubble Film can be reused and thus reducing the environmental impact also. Since it is easy to collect as against Thermocol (EPS) it is easier to recycle.</p>
            </article>


            <article className="max-container whitespace mb-10 airbubble_section">
                <div className='flex items-center gap-3'>
                    <h1 className='text-4xl font-krona '> What Are The Advantages of <span className="text-coral-red"> AIR BUBBLE WRAP</span></h1>

                    <span className=""><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.000488281" width="9.88145" height="4.5111" fill="black"></rect></svg></span>
                    <span className=""><svg width="83" height="5" viewBox="0 0 83 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.580078" width="82.3454" height="4.5111" fill="black"></rect></svg></span>
                </div>
                <Accordion />
            </article>

            <div className="max-container whitespace mb-10 bg-white airbubble_section">
                <div className='flex items-center gap-3'>
                    <h1 className='text-4xl font-krona mb-7'> Some examples of Applications of <span className="text-coral-red"> AIR BUBBLE WRAP</span>?</h1>

                    <span className=""><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.000488281" width="9.88145" height="4.5111" fill="black"></rect></svg></span>
                    <span className=""><svg width="83" height="5" viewBox="0 0 83 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.580078" width="82.3454" height="4.5111" fill="black"></rect></svg></span>
                </div>

                {
                    applicationExamples.map((applicationExample, index) => (
                        <div key={applicationExample.titile} className="flex w-full gap-10">
                            {index % 2 === 0 ? (
                                <>
                                    <div className="w-2/3 mb-10 flex justify-center flex-col">
                                        <h2 className="font-krona mb-3 text-xl">{applicationExample.titile}</h2>
                                        <p className="info-text">{applicationExample.desc}</p>
                                    </div>
                                    <div className="w-1/3">
                                        <Image src={ima} style={{
                                            width: "100%"
                                        }} width={200} height={200} alt="asd" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="w-1/3 mb-10 ">
                                        <Image src={Furniture} style={{
                                            width: "100%"
                                        }} width={200} height={200} alt="asd" />
                                    </div>
                                    <div className="w-2/3  flex justify-center flex-col">
                                        <h2 className="font-krona mb-3 text-xl">{applicationExample.titile}</h2>
                                        <p className="info-text">{applicationExample.desc}</p>
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