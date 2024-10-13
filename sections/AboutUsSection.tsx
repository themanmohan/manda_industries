import React from 'react'
export default function AboutUsSection() {
  // const backgroundImageStyle = {
  //   backgroundImage: 'url(https://res.cloudinary.com/hpnoardgude/image/upload/v1728202052/CropImage_cxpukm.jpg)',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   height: '400px',
  //   alignItems: 'center',
  //   position: "relative",
  //   borderRadius: '10px',
  // };

  // const backgroundImageStyle2 = {
  //   position: 'absolute',
  //   width: '100%',
  //   height: 'inherit',
  //   backgroundColor: "black",
  //   backdropFilter: 'blur(8px)',
  //   zIndex: 0,
  //   opacity: 0.6,
  //   borderRadius: '10px',
  // };
  // const backgroundImageStyle3 = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  // };
  return (

    <section className="max-container padding-x">


      {/* <div className="hero" style={backgroundImageStyle} >
        <div style={backgroundImageStyle2}>

        </div>

        <div style={backgroundImageStyle3}>
          <h1 className="text-white font-bold text-4xl"> About Us</h1>
        </div>
      </div> */}

      <div style={{
        marginBottom:"30px"
      }} className='flex flex-col justify-center items-center mt-10 mb-10'>
        <div className="py-8 w-64 text-center flex flex-col items-center">
          <h2 className='text-coral-red font-bold text-2xl pb-[10px] font-kronaone'>M AND A INDUSTRIES</h2>
          <h3>Founded in the year 2005.</h3>
          <p style={{
            width:"50%",
            padding:"20px"
          }} className="w-1/2">Our state-of-the-art plant is situated in Baddi, Himachal Pradesh. We are one of the most comprehensive industrial flexible packaging manufacturers in India.</p>
          <p style={{
            width:"65%"
          }} className="w-full">Our plants are the most technologically advanced in India, capable of converting 1100 tons of plastics into air bubble film annually. We produce films with a range of thicknesses, from 30gsm to 200gsm, offering a diverse array of packaging solutions tailored to your products.</p>

        </div>

        <div style={{
          width:"80%",
          padding:"20px",
          borderRadius:"10px",
          margin:"20px 0"
        }} className=' flex bg-coral-red justify-center md:block'>
          <div className="rounded-sm text-green-700 h-400 w-full">
            <h1 className="text-center text-3xl font-bold pb-2">OUR GOAL</h1>
            <p>The goal of M&A Industries is to be known as a leader in innovative packaging solutions, with continued focus on value engineering and building brand equity on the pillars of Quality, Service, Pricing & Constant Innovation</p>
          </div>

          <div className='w-full' >
            <h1 className="text-center text-3xl font-bold pb-3">OUR COMMITMENT</h1>
            <p>We offer high-quality products and consistent support service to our customers and business partners. Our strategies were formulated in line with our focus on anticipation and satisfying our customer needs and constantly providing good service and prompt delivery. The strength and success of our Group can be directly attributable to our technical skill, innovation & creativity, long-standing dedicated employees, and our strong relationships with our customers and suppliers</p>
          </div>

        </div>

        <div style={{
          width:"90%"
        }}>


          <p style={{
            marginBottom:"20px"
          }}>Our EPE line can convert 2000 tons of plastics into Expanded Polyethylene Foam per annum. These films are made in thickness ranging from 0.5 mm to 150 mm. We also manufacture EPE blocks which are used by the Automobile industry, Glass Industry, Furniture Manufacturing, and the food processing industries. These blocks are a direct substitute of EPS blocks (Thermocol), which are polluting in nature.</p>
          <p>Our fully integrated manufacturing process from raw materials to finished goods helps us maintain our superiority when it comes to Quality, Service & Pricing standards for our industry.</p>
        </div>

      </div>


    </section>
  )
}
