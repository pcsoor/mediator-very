import React from 'react';
import "./header.css";
import { StaticImage } from "gatsby-plugin-image"


const Header = () => {
  return (
    <div id='header-section'>
      <div className='container mx-auto max-w-[1170px] px-5 pt-5 lg:pt-[80px]'>
        <div>
          <div className='lg:flex justify-between items-center'>
            <div className='portrait-image lg:order-2'>
              <StaticImage src="../../images/portrait.jpg" alt="Dr. Kaszó Éva" />
            </div>

            <div className='lg:order-first mt-10 lg:mt-0'>
              <span className='px-5 py-2 bg-secondary rounded-full text-sm font-black'>
                Mediátor
              </span>

              <h1 className='h1 pt-3 pb-5'>Dr. Kaszó Éva</h1>

              <p className='max-w-[470px] leading-10'>
                Célom az, hogy lehetőséget adjak a felek számára problémáik megoldásánál a békés megegyezésre, elkerülve ezzel a hosszas jogi eljárást.
              </p>
            </div>
          </div>
          
          <div className='flex flex-col lg:flex-row justify-center mt-[100px]'>
            <span className='quotation-marks'>”</span>
            <h3 className='h3 max-w-[670px]'>
              Légy nyitott az emberek gondolataira, hogy segítsd a közöttük fennálló konfliktusok eredményes rendezését.
            </h3>
            <span className='quotation-marks'>„</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
