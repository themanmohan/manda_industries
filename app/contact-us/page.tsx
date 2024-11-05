'use client';
import React from "react";
import toast from 'react-hot-toast';

import { HeroBanner } from "@/components";
import { managementContacts, officeLocations } from "@/constants";
import ManagmentContactCard from "@/components/contact-page/ManagmentContactCard";
import ContactDetailCard from "@/components/contact-page/ContactDetailCard";

const notify = () => toast('Your response has been successfully submitted.');

const Contact = () => {

  const submitFormHandler = () => {
    notify();
    console.log("Form submitted");
  };

  return (
      <section className="mb-14" >
    
        <HeroBanner lableText="Contact Us" />
        <h2 className="text-center text-3xl font-krona mt-10 mb-8 ">Contact Details</h2>

        <div className="max-container xl:flex md:block w-full gap-10 whitespace" data-aos="fade-right">
     
          <div className="xl:w-1/2 md:w-full flex flex-col justify-center">

            {
              officeLocations.map((officeLocation,i)=>{
                return <ContactDetailCard
                key={i}
                title={officeLocation.title}
                address={officeLocation.address}
                mobileNumber={officeLocation.mobilenumber}
                emailAddress={officeLocation.emailAddress}
              />
              })
            }


          </div>

          <div className="xl:w-1/2 md:w-full xl:mt-0 mt-5 bg-lightBlue p-5 md:p-10 rounded-md "  data-aos="fade-left">

            <div className="relative mt-4 mb-14">
              <select
                className="peer border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-transparent"
                id="select"
              >
                <option value=""></option>
                <option value="option1">Air Bubble</option>
                <option value="option2">EPE</option>
              </select>
              <label
                className="mb-2 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-4.5 peer-focus:text-sm  pl-2"
                htmlFor="select"
              >
                Select product
              </label>
            </div>

            <div className="xl:flex sm:block gap-5 w-full mb-14">
              <div className="relative w-full mb-14 xl:mb-0">
                <input
                  className="peer border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-transparent"
                  type="text"
                  placeholder="Please enter name"
                  id="name"
                />
                <label
                  className="mb-2 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4.5 peer-focus:text-sm  pl-2"
                  htmlFor="name"
                >
                  Name
                </label>
              </div>

              <div className="relative w-full xl:mb-0 ">
                <input
                  className="peer border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-transparent"
                  type="text"
                  placeholder="Please enter name"
                  id="company"
                />
                <label
                  className="mb-2 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base  peer-focus:-top-4.5 peer-focus:text-sm  pl-2"
                  htmlFor="company"
                >
                  Company Name
                </label>
              </div>

            </div>

            <div className="xl:flex sm:block gap-5 w-full mb-14">
              <div className="relative w-full mb-14 xl:mb-0">
                <input
                  className="peer border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-transparent"
                  type="text"
                  placeholder="Please enter name"
                  id="number"
                />
                <label
                  className="mb-2 absolute left-0 -top-3.5 text-gray-600  text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base  peer-focus:-top-4.5 peer-focus:text-sm  pl-2"
                  htmlFor="number"
                >
                  Contact Number
                </label>
              </div>

              <div className="relative w-full">
                <input
                  className="peer border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-transparent"
                  type="email"
                  placeholder="Please enter name"
                  id="email"
                />
                <label
                  className="mb-2 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base  peer-focus:-top-4.5 peer-focus:text-sm  pl-2"
                  htmlFor="email"
                >
                  Email
                </label>
              </div>

            </div>

            <div className="xl:flex sm:block gap-5 w-full mb-14">
              <div className="relative w-full mb-14 xl:mb-0">
              <select
                className="peer border-b-2 border-300 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-transparent"
                id="state"
              >
                <option value=""></option>
                <option value="option1">Himachal</option>
                <option value="option2">Punjab</option>
              </select>
              <label
                className="mb-2 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4.5 peer-focus:text-sm  pl-2"
                htmlFor="state"
              >
                Select State
              </label>
              </div>

              <div className="relative w-full">
                <input
                  className="peer border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-transparent"
                  type="text"
                  placeholder="Please enter name"
                  id="city"
                />
                <label
                  className="mb-2 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4.5 peer-focus:text-sm  pl-2"
                  htmlFor="city"
                >
                  City/Town/District
                </label>
              </div>

            </div>

 
            <div className="relative mt-4 mb-10">
              <textarea
                className="peer border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-transparent"
                rows={1}
                placeholder="Enter your message"
                id="message"
              ></textarea>
              <label
                className="mb-2 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4.5 peer-focus:text-sm  pl-2"
                htmlFor="message"
              >
                Enter your message
              </label>
            </div>

            <p
onClick={submitFormHandler}
className={`flex justify-center w-auto items-center gap-2 px-5 py-3 border font-krona text-sm rounded-md leading-none bg-coral-red text-white border-coral-red`}
>

Submit

</p>
            
          </div>

        </div>

       
        <section className='mt-10 max-container whitespace flex justify-center flex-wrap gap-9' data-aos="zoom-in">
          {managementContacts.map((managementContact, i) => (
            <ManagmentContactCard key={i} {...managementContact} />
          ))}
         </section>



         
     
      </section >
 
  );
};

export default Contact;
