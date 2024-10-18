import React from "react";
import { Button } from "@/components"
import { HeroBanner } from "@/components";
import { services } from "@/constants";
import ContactCard from "@/components/ContactCard";
const Contact = () => {
  return (
    <>
      <section className="mb-20" >

        <HeroBanner lableText="Contact Us" />
      
        <div className="max-container padding-x  padding-l padding-r xl:flex md:block w-full mt-20 gap-10">

          <div className="xl:w-1/2 md:w-full flex flex-col justify-center">

            <div>

              <h1 className="text-4xl font-bold font-krona"><span className="text-coral-red">Registered</span> Office</h1>
              <div className="flex gap-2 items-center mt-5">
                <span className="p-2 bg-coral-red block w-fit rounded-full">             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3" /><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" /></svg></span>
                <p className="font-sans text-lg">612, Raheja Chambers, Nariman Point, Mumbai - 400021</p>
              </div>

              <div className="flex gap-2 items-center mt-4">
                <span className="p-2 bg-coral-red block w-fit rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
                <p className="font-sans text-lg">+919218100126</p>
              </div>

              <div className="flex gap-2 items-center mt-4">
                <span className="p-2 bg-coral-red block w-fit rounded-full">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
                <p className="font-sans text-lg" >joe@gmail.com</p>
              </div>

            </div>

            <div className="mt-10">

              <h1 className="text-3xl font-bold font-krona"><span className="text-coral-red">Corporate </span> Office</h1>
              <div className="flex gap-2 items-center mt-5">
                <span className="p-2 bg-coral-red block w-fit rounded-full">             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3" /><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" /></svg></span>
                <p className="font-sans text-lg">
                  1161, Solitaire Corporate Park, Andheri- Ghatkopar Link Road, Chakala, Andheri (East), Mumbai - 400093</p>
              </div>

              <div className="flex gap-2 items-center mt-4">
                <span className="p-2 bg-coral-red block w-fit rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
                <p className="font-sans text-lg">+919218100126</p>
              </div>

              <div className="flex gap-2 items-center mt-4">
                <span className="p-2 bg-coral-red block w-fit rounded-full">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
                <p className="font-sans text-lg">joe@gmail.com</p>
              </div>

            </div>


          </div>

          <div className="xl:w-1/2 md:w-full md:mt-10 bg-lightBlue p-10 rounded-md">

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
                className="mb-2 absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-4.5 peer-focus:text-sm  pl-2"
                htmlFor="select"
              >
                Select product
              </label>
            </div>

            <div className="xl:flex sm:block gap-5 w-full mb-14">
              <div className="relative w-full xl:mb-0 md:mb-14 sm:mb-14">
                <input
                  className="peer border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-transparent"
                  type="text"
                  placeholder="Please enter name"
                  id="name"
                />
                <label
                  className="mb-2 absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-4.5 peer-focus:text-sm  pl-2"
                  htmlFor="name"
                >
                  Name
                </label>
              </div>

              <div className="relative w-full xl:mb-0 md:mb-14 sm:mb-14">
                <input
                  className="peer border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-transparent"
                  type="text"
                  placeholder="Please enter name"
                  id="company"
                />
                <label
                  className="mb-2 absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-4.5 peer-focus:text-sm  pl-2"
                  htmlFor="company"
                >
                  Company Name
                </label>
              </div>

            </div>

            <div className="xl:flex sm:block gap-5 w-full mb-14">
              <div className="relative w-full xl:mb-0 sm:mb-14">
                <input
                  className="peer border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-transparent"
                  type="text"
                  placeholder="Please enter name"
                  id="number"
                />
                <label
                  className="mb-2 absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-4.5 peer-focus:text-sm  pl-2"
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
                  className="mb-2 absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-4.5 peer-focus:text-sm  pl-2"
                  htmlFor="email"
                >
                  Email
                </label>
              </div>

            </div>

            <div className="xl:flex sm:block gap-5 w-full mb-14">
              <div className="relative w-full xl:mb-0 sm:mb-14 xs:mb-14">
              <select
                className="peer border-b-2 border-300 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-transparent"
                id="state"
              >
                <option value=""></option>
                <option value="option1">Himachal</option>
                <option value="option2">Punjab</option>
              </select>
              <label
                className="mb-2 absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-4.5 peer-focus:text-sm  pl-2"
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
                  className="mb-2 absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-4.5 peer-focus:text-sm  pl-2"
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
                className="mb-2 absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-4.5 peer-focus:text-sm  pl-2"
                htmlFor="message"
              >
                Enter your message
              </label>
            </div>

            <Button label="Submit" />

          </div>

        </div>

       
        <section className='mt-10 max-container whitespace flex justify-center flex-wrap gap-9'>
          {services.map((service) => (
            <ContactCard key={service.label} {...service} />
          ))}
         </section>
     
      </section >
    </>
  );
};

export default Contact;
