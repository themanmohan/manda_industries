import React from 'react'

function HeroBanner({
  imgULR="https://res.cloudinary.com/hpnoardgude/image/upload/v1729530993/WhatsApp_Image_1946-07-14_at_09.18.27_mqlqxc.jpg",
  lableText
}: { imgULR?: string; lableText?: string }) {
    const backgroundImageStyle = {
        backgroundImage: `url(${imgULR})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        alignItems: 'center',
        position: "relative",
        zIndex: -1000
      };
    
      const backgroundImageStyle2 = {
        position: 'absolute',
        width: '100%',
        height: 'inherit',
        backgroundColor: "black",
        backdropFilter: 'blur(8px)',
        zIndex: 0,
        opacity: 0.6,
      };
      const backgroundImageStyle3 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };

  return (
   

      <div className="hero" style={{...backgroundImageStyle, position: 'relative'}} >
        <div style={{...backgroundImageStyle2, position: 'absolute'}}>

        </div>

        <div style={{...backgroundImageStyle3, position: 'absolute'}}>

          <div className='flex items-center gap-3 justify-center text-center'>
          <h1 className="text-white font-bold text-4xl font-krona">{lableText || " "}</h1>

                    </div>
        </div>
      </div>
  )
}

export default HeroBanner