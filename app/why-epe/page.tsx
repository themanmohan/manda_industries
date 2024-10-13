"use client"
import React from 'react';
import { HeroBanner } from "@/components"
import QualityCard from '@/components/QualityCard';
import { services } from "@/constants";
import Image from "next/image"
import picture1 from "@/assets/images/whyepe/Picture1.png"
import picture2 from "@/assets/images/whyepe/Picture2.png"
import picture3 from "@/assets/images/whyepe/Picture3.png"
import picture4 from "@/assets/images/whyepe/Picture4.png"
function WhyEPE() {
    return (
        <section className="">
            <HeroBanner lableText="WHY EPE" />

            <div className='whitespace max-container bg-white airbubble_section' >
                <h1 className='text-4xl font-krona text-center mb-10'>Comparison of <span className='text-coral-red'>Polyethylene</span> and <span className='text-coral-red'>Polystyrene</span> Based on Key Factors</h1>
                <div className='max-container flex justify-center flex-wrap gap-9'>
                    {services.map((service) => (
                        <QualityCard key={service.label} {...service} />
                    ))}
                </div>
            </div>

            <article className='whitespace max-container bg-white '>
                <Image src={picture1} alt='hdjsa' className='w-[100vw]' />


                {/* <div>
                    <h1 className='text-4xl font-bold text-center'><span className='text-coral-red'>EPE</span> packaging material.</h1>

                    <div className=''>
                        <div className='flex items-center gap-3 justify-start'>
                            <h1 className='text-2xl font-bold'>Recyclability</h1>
                            <span className=""><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.000488281" width="9.88145" height="4.5111" fill="black"></rect></svg></span>
                            <span className=""><svg width="83" height="5" viewBox="0 0 83 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.580078" width="82.3454" height="4.5111" fill="black"></rect></svg></span>
                        </div>
                        <p>Polyethylene vs Polystyrene – Polyethylene (EPE) foam represents a significantly more sustainable packaging solution for a variety of simple reasons. Polyethylene foam is reusable and 100% curbside recyclable as a class 4 material. Additionally, our innovative packaging designs, utilizing polyethylene material, achieve an 80% reduction in material. Reduce-able. Reusable. Recyclable.</p>
                        <p>EPS foam manages a paltry 12% rate of recycling and the overwhelming majority of recycling centers across the United States refuse to accept the class 6 material. What’s worse – polystyrene foam has a consumer recycling rate of only 6%, which means that Styrofoam that makes it to customers almost always ends up in a landfill.</p>
                    </div>
                </div>

                <div>
                    <h1 className='text-4xl font-bold text-center'><span className='text-coral-red'>EPE</span> packaging material.</h1>

                    <div className=''>
                        <div className='flex items-center gap-3 justify-start'>
                            <h1 className='text-2xl font-bold'>Recyclability</h1>
                            <span className=""><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.000488281" width="9.88145" height="4.5111" fill="black"></rect></svg></span>
                            <span className=""><svg width="83" height="5" viewBox="0 0 83 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.580078" width="82.3454" height="4.5111" fill="black"></rect></svg></span>
                        </div>
                        <p>Polyethylene vs Polystyrene – Polyethylene (EPE) foam represents a significantly more sustainable packaging solution for a variety of simple reasons. Polyethylene foam is reusable and 100% curbside recyclable as a class 4 material. Additionally, our innovative packaging designs, utilizing polyethylene material, achieve an 80% reduction in material. Reduce-able. Reusable. Recyclable.</p>
                        <p>EPS foam manages a paltry 12% rate of recycling and the overwhelming majority of recycling centers across the United States refuse to accept the class 6 material. What’s worse – polystyrene foam has a consumer recycling rate of only 6%, which means that Styrofoam that makes it to customers almost always ends up in a landfill.</p>
                    </div>
                </div>

                <div>
                    <h1 className='text-4xl font-bold text-center capitalize'><span className='text-coral-red'>EPE</span> packaging material.</h1>

                    <div className=''>
                        <div className='flex items-center gap-3 justify-start'>
                            <h1 className='text-2xl font-bold'>Recyclability</h1>
                            <span className=""><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.000488281" width="9.88145" height="4.5111" fill="black"></rect></svg></span>
                            <span className=""><svg width="83" height="5" viewBox="0 0 83 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.580078" width="82.3454" height="4.5111" fill="black"></rect></svg></span>
                        </div>
                        <p>Polyethylene vs Polystyrene – Polyethylene (EPE) foam represents a significantly more sustainable packaging solution for a variety of simple reasons. Polyethylene foam is reusable and 100% curbside recyclable as a class 4 material. Additionally, our innovative packaging designs, utilizing polyethylene material, achieve an 80% reduction in material. Reduce-able. Reusable. Recyclable.</p>
                        <p>EPS foam manages a paltry 12% rate of recycling and the overwhelming majority of recycling centers across the United States refuse to accept the class 6 material. What’s worse – polystyrene foam has a consumer recycling rate of only 6%, which means that Styrofoam that makes it to customers almost always ends up in a landfill.</p>
                    </div>
                </div> */}
            </article>

            <div className='whitespace max-container airbubble_section'>
                <div className='flex items-center gap-3'>
                    <h1 className='text-4xl font-krona'><span className='text-coral-red'>EPE</span> Packaging Material</h1>

                    <span className=""><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.000488281" width="9.88145" height="4.5111" fill="black"></rect></svg></span>
                    <span className=""><svg width="83" height="5" viewBox="0 0 83 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.580078" width="82.3454" height="4.5111" fill="black"></rect></svg></span>
                </div>

                {/* <div className=''>
                        <div className='flex items-center gap-3 justify-start'>
                            <h1 className='text-2xl font-bold'>Recyclability</h1>
                            <span className=""><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.000488281" width="9.88145" height="4.5111" fill="black"></rect></svg></span>
                            <span className=""><svg width="83" height="5" viewBox="0 0 83 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.580078" width="82.3454" height="4.5111" fill="black"></rect></svg></span>
                        </div>
                        <p>Polyethylene vs Polystyrene – Polyethylene (EPE) foam represents a significantly more sustainable packaging solution for a variety of simple reasons. Polyethylene foam is reusable and 100% curbside recyclable as a class 4 material. Additionally, our innovative packaging designs, utilizing polyethylene material, achieve an 80% reduction in material. Reduce-able. Reusable. Recyclable.</p>
                        <p>EPS foam manages a paltry 12% rate of recycling and the overwhelming majority of recycling centers across the United States refuse to accept the class 6 material. What’s worse – polystyrene foam has a consumer recycling rate of only 6%, which means that Styrofoam that makes it to customers almost always ends up in a landfill.</p>
                    </div> */}

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

            <div className='max-container'>
                <Image src={picture2} alt='hdjsa' className='w-[100vw]' />
            </div>

            <article className='whitespace max-container airbubble_section'>

                <div >
                    <div className='flex items-center gap-3 mb-5'>
                        <h2 className='text-4xl font-krona'>Less packaging leads to more savings</h2>
                        <span className=""><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.000488281" width="9.88145" height="4.5111" fill="black"></rect></svg></span>
                        <span className=""><svg width="83" height="5" viewBox="0 0 83 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.580078" width="82.3454" height="4.5111" fill="black"></rect></svg></span>
                    </div>

                    <p className='mb-3 info-text'>The formula for evaluating freight and shipping costs factors in the size, weight, and shape of each package. Optimized designs that decrease the volumetric size and allow for higher efficiencies with e-commerce shipping achieve significant cost efficiencies over traditional packaging methods. EPE USA utilizes polyethylene to engineer packaging designs that achieve up to an 80% reduction in material usage – all of which corresponds to volumetric efficiency and freight cost savings</p>
                    <p className='mb-3 info-text'>Further, we design polyethylene packaging solutions capable of collapsing, nesting, and laying flat during shipping, which allows for optimal efficiency during transit shipments. Cost efficiencies with lay-flat packaging designs translate to warehouse space and storage savings as well.</p>
                    <p className='mb-3 info-text'>To put it simply, polyethylene is a better material choice when it comes to designing packaging solutions. With our proprietary designs utilizing PE foam, we are able to reduce material and improve freight cost savings.</p>
                </div>
            </article>

            <div className='max-container'>
                <Image src={picture3} alt='hdjsa' className='w-[100vw]' />
            </div>


            <article className='whitespace max-container airbubble_section'>

                <div>
                    <div className='flex items-center gap-3'>
                        <h2 className='text-4xl font-krona mb-5'>Protect the package at all costs</h2>
                        <span className=""><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.000488281" width="9.88145" height="4.5111" fill="black"></rect></svg></span>
                        <span className=""><svg width="83" height="5" viewBox="0 0 83 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.580078" width="82.3454" height="4.5111" fill="black"></rect></svg></span>
                    </div>

                    <p className='mb-3 info-text'>Polyethylene proves to be a better packaging material than polystyrene even when discussing the basics of cushioning performance. Expanded polyethylene foam is capable of withstanding multiple impacts. This makes it a perfect cushioning resource, capable of protecting products throughout their entire transit process</p>
                    <p className='mb-3 info-text'>Multi-impact cushioning protection is crucially important in e-commerce, where transit shipments are long and can involve between 5-20 different touchpoints. Also in our country due to the road conditions.</p>
                    <p className='mb-3 info-text'>When comparing protective capabilities, polyethylene’s natural properties elevate it above polystyrene material. In contrast to polyethylene, EPS foam is a single-impact material, rendered useless after one big bump in the road. As a result of traditional packaging with polystyrene material, shipping damage represents a significant cost for e-commerce businesses.</p>
                </div>

            </article>

            <div className='max-container'>
                <Image src={picture4} alt='hdjsa' className='w-[100vw]' />
            </div>

            <article className='whitespace max-container airbubble_section'>


                <div>
                    <div className='flex items-center gap-3'>
                        <h2 className='text-4xl font-krona mb-5'> <span className='text-coral-red'>Polyethylene</span> as a replacement for <span className='text-coral-red'>polystyrene</span></h2>
                        <span className=""><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.000488281" width="9.88145" height="4.5111" fill="black"></rect></svg></span>
                        <span className=""><svg width="83" height="5" viewBox="0 0 83 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.580078" width="82.3454" height="4.5111" fill="black"></rect></svg></span>
                    </div>

                    <p className='mb-3 info-text'>EPE has helped businesses reduce their e-commerce shipping damage rates from 20% down to 1%. This is accomplished by replacing polystyrene with more sustainable, more efficient and higher performing material. Utilizing polyethylene as the cushioning material in our EP3 designs allows us to use the exact amount of material, positioned in the precise locations, to allow for optimal product protection.</p>
                    <p className='mb-3 info-text'>We welcome the trend of businesses transitioning away from polystyrene to more sustainable materials, like polyethylene. And we offer our innovative and sustainable polyethylene packaging solutions as a superior alternative to polystyrene. And we offer our innovative and sustainable polyethylene packaging solutions as a superior alternative to polystyrene.</p>
                    <p className='mb-3 info-text'>When comparing protective capabilities, polyethylene’s natural properties elevate it above polystyrene material. In contrast to polyethylene, EPS foam is a single-impact material, rendered useless after one big bump in the road. As a result of traditional packaging with polystyrene material, shipping damage represents a significant cost for e-commerce businesses.</p>
                    <p className='mb-3 info-text'>The *consumer durable industry in India* has faced significant losses due to *bad packaging practices*, impacting both manufacturers and consumers. Here’s an overview of how these losses manifest:</p>

                    <div className='mb-5'>
                        <h2 className='text-2xl font-krona mb-3'>1. Financial Losses:-</h2>
                        <p className='mb-1 pl-3'> <span className='text-md font-krona'> Product Damage:-</span> <span className='info-text'>Poor packaging, especially for fragile or large durable goods like electronics, appliances, and furniture, can lead to damage during transit or storage. This results in:</span></p>
                        <ul className='info-text mb-2 pl-3'>
                            <li>- Increased return rates.</li>
                            <li>- Repair or replacement costs* borne by manufacturers.</li>
                            <li>- Financial strain due to *product recalls.</li>
                        </ul>
                        <p className='mb-1 pl-3'> <span className='text-md font-krona'> Logistical Costs:-</span> <span className='info-text'>Improperly packaged products may require **additional protective measures* later in the supply chain, raising *transportation costs* due to:</span></p>
                        <ul className='info-text pl-3'>
                            <li>- Bulkier or less optimized packaging requiring more space.</li>
                            <li>- Products requiring repacking or special handling.</li>
                        </ul>
                    </div>


                    <div className='mb-5'>
                        <h2 className='text-2xl font-krona mb-3'>2. Reputation Damage:-</h2>
                        <p className='mb-1 pl-3'> <span className='text-md font-krona'> Customer Dissatisfaction:-</span> <span className='info-text'>Broken, damaged, or poorly packaged goods lead to negative customer experiences, damaging **brand loyalty* and resulting in poor reviews. This could also lead to:</span></p>
                        <ul className='info-text mb-2 pl-3'>
                            <li>- Loss of potential future sales.</li>
                            <li>- Higher customer service and complaint resolution costs.</li>
                        </ul>
                        <p className='mb-1 pl-3'> <span className='text-md font-krona'> Retailer Relationships:-</span> <span className='info-text'>Retailers receiving damaged products face **inventory issues, leading to strained relationships with manufacturers, potential **cancellations of future orders, and **lost shelf space* in major retail outlets.</span></p>
                    </div>


                    <div className='mb-5'>
                        <h2 className='text-2xl font-krona mb-3'>3. Increased Returns and Warranty Claims:-</h2>

                        <ul className='info-text mb-2 pl-3'>
                            <li>- Many consumer durables, like televisions, refrigerators, and washing machines, come with warranties. Bad packaging increases the risk of *shipping damages*, prompting customers to file warranty claims that:</li>
                            <li>- Add to the manufacturers operational expenses.</li>
                            <li>- Lead to an increase in handling of returns and replacements, which can disrupt supply chain management.</li>
                        </ul>

                    </div>

                    <div className='mb-5'>
                        <h2 className='text-2xl font-krona mb-3'>4. Higher Environmental Costs:-</h2>

                        <ul className='info-text mb-2 pl-3'>
                            <li>- *Excessive or non-recyclable packaging* can increase environmental compliance costs for companies. Manufacturers that fail to adhere to environmentally sustainable packaging practices face pressure from both regulators and environmentally conscious consumers.</li>
                            <li>- The use of *low-quality materials* in packaging not only leads to damaged products but also results in packaging waste, contributing to *environmental fines* and loss of market appeal for eco-conscious buyers.</li>
                        </ul>

                    </div>

                    <div className='mb-5'>
                        <h2 className='text-2xl font-krona mb-3'>5. Supply Chain Disruptions:-</h2>

                        <ul className='info-text mb-2 pl-3'>
                            <li>- Bad packaging increases the risk of *supply chain bottlenecks*. Damaged goods have to be returned, repacked, or replaced, causing delays in the delivery of new orders, which:</li>
                            <li>- Leads to *stock-outs* and lost sales opportunities.</li>
                            <li>- Impacts production schedules if materials or components are damaged during shipment.</li>
                        </ul>

                    </div>

                    <div className='mb-5'>
                        <h2 className='text-2xl font-krona mb-3'>6. Legal & Regulatory Penalties:-</h2>

                        <ul className='info-text mb-2 pl-3'>
                            <li>- In some cases, poor packaging may not meet *industry safety standards* or *regulatory requirements*. Non-compliance can result in:</li>
                            <li>- *Fines* from regulatory bodies.</li>
                            <li>- Legal challenges, especially if packaging failures cause injury or pose a hazard to consumers.</li>
                        </ul>

                    </div>

                    <div className='mb-5'>
                    <h2 className='text-2xl font-krona mb-3'>7. Case Studies and Examples:-</h2>
                        <p className='mb-1 pl-3'> <span className='text-md font-krona'> - Electronics Industry:-</span> <span className='info-text'>In the case of electronics, where items like **smartphones, TVs, and computers* are sensitive to impact and moisture, bad packaging leads to high returns and replacements, costing manufacturers millions annually.</span></p>
                        <p className='mb-1 pl-3'> <span className='text-md font-krona'> - Furniture and Appliances:-</span> <span className='info-text'>Large consumer durables like furniture and home appliances often face damage during transit due to **insufficient cushioning* or improper loading and unloading procedures, causing high financial losses.</span></p>
                    </div>



                    <div className='mb-5'>
                        <h2 className='text-2xl font-krona mb-3'>8. Preventive Measures:-</h2>
                        <p className='mb-3 info-text'>To minimize losses, companies can adopt the following strategies:</p>
                        <p className='mb-1 pl-3'> <span className='text-md font-krona'> - Improved Packaging Design:-</span> <span className='info-text'>Using more durable, eco-friendly materials with better shock absorption for large or delicate items.</span></p>
                        <p className='mb-1 pl-3'> <span className='text-md font-krona'> - Smart Packaging Technologies:-</span> <span className='info-text'>RFID tags or sensors to track product conditions during shipment.</span></p>
                        <p className='mb-1 pl-3'> <span className='text-md font-krona'> - Training for Packaging and Handling Staff:-</span> <span className='info-text'>Proper handling techniques can reduce damage during loading and transportation.</span></p>
                        <p className='mb-1 pl-3'> <span className='text-md font-krona'> - Sustainable Packaging:-</span> <span className='info-text'>Using recyclable materials that reduce both damage risk and environmental impact.</span></p>
                    </div>


                    <div >
                        <div className='flex items-center gap-3 font-krona mb-3'>
                            <h2 className='text-2xl'>Conclusion</h2>
                            <span className=""><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.000488281" width="9.88145" height="4.5111" fill="black"></rect></svg></span>
                            <span className=""><svg width="83" height="5" viewBox="0 0 83 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.580078" width="82.3454" height="4.5111" fill="black"></rect></svg></span>
                        </div>
                        <p className='info-text'>Bad packaging practices cost the Indian consumer durable industry in several ways—financially, in terms of customer satisfaction, supply chain disruptions, and environmental impact. Focusing on better packaging materials, design, and logistics can mitigate these losses and improve overall efficiency and profitability in the sector.</p>
                    </div>

                </div>




            </article>




        </section>
    )
}

export default WhyEPE