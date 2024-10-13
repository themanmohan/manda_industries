import React from 'react'

function HeroBanner({
  imgULR="https://res.cloudinary.com/hpnoardgude/image/upload/v1728202052/CropImage_cxpukm.jpg",
  lableText
}) {
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
   

      <div className="hero" style={backgroundImageStyle} >
        <div style={backgroundImageStyle2}>

        </div>

        <div style={backgroundImageStyle3}>

          <div className='flex items-center gap-3 justify-center'>
          <h1 className="text-white font-bold text-4xl font-krona">{lableText || " "}</h1>
                        <span className=""><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.000488281" width="9.88145" height="4.5111" fill="white"></rect></svg></span>
                        <span className=""><svg width="83" height="5" viewBox="0 0 83 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.580078" width="82.3454" height="4.5111" fill="white"></rect></svg></span>
                    </div>
        </div>
      </div>
  )
}

export default HeroBanner