import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
  return (
  <div id='hero' >

        <Navbar />
        <div className='cotainer-grid lg:grid-cols-2 h-[calc(100vh-60px)]'>

            <div className='hidden lg:block'></div>
            <div className='text-[100px] sm:text-[130px] font-bold leading-tight justify-center items-center'>
                <div>
                    <p data-aos="fade-right">I'm</p>
                    <p data-aos="fade-right">Haris</p>
                    <p data-aos="fade-right">Arif</p>
                </div>
                </div>  

        </div> 
       
      
    </div>
  )
}

export default Hero;
