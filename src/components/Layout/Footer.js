import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import VerycreativesLogo from "../../images/verycreatives.svg"

const Footer = () => {
  return (
    <div className='container mx-auto max-w-[1170px] px-3 lg:px-0'>
      <div className='lg:flex justify-between'>
        <div className='clear-right mb-10 lg:mb-0'>
          <h2 className='h2'>Dr. Kaszó Éva</h2>
          <h3 className='subtitle-2'>Keressen bizalommal</h3>
        </div>

        <div className='lg:flex float-left'>
          <h3 className='subtitle-2 pr-10 mb-5'>Szolgáltatások</h3>
          <ul className='text-xs md:text-base'>
            <li className='mb-3 pt-2'><AnchorLink to="#mi-a-mediacio" title="Mediáció"  /></li>
            <li className='mb-3'><AnchorLink to="#valasi-mediacio" title="Válási mediáció" /></li>
            <li className='mb-3'><AnchorLink to="#csaladi-vitak" title="Családi viták"/></li>
            <li className='mb-3'><AnchorLink to="#oroklesi-vitak" title="Öröklési viták" /></li>
            <li className='mb-3'><AnchorLink to="#gazdasagi-vitak" title="Gazdasági és üzleti viták" /></li>
            <li className='mb-2'><AnchorLink to="#munkaugyi-vitak" title="Munkaügyi viták" /></li>
            <li><AnchorLink to="#mediacio-menete" title="A mediáció menete" /></li>
          </ul>
        </div>

        <div className='lg:flex'>
          <h3 className='subtitle-2 pr-10 mb-5'>Kontakt</h3>

          <div className='text-xs md:text-base'>
            <p className='pb-2'>
              <a href='mailto:dr.kaszo.eva@gmail.com'>dr.kaszo.eva@gmail.com</a>
            </p>

            <p>
              <a href='tel:+36302114563'>+36302114563</a>
            </p>
          </div>
        </div>
      </div>

      <div className='md:flex justify-between py-5 clear-left'>
        <p className='py-5 md:py-0'>© 2023. All rights reserved</p>

        <div className='flex items-center'>
          <p className='mr-5 font-bold'>Created by </p>
          <a href='https://verycreatives.com/' target='_blank'><img src={VerycreativesLogo} className='mt-0.5' /></a>
        </div>
        
      </div>
    </div>
    
  )
}

export default Footer
