import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Section6 = () => {
  return (
    <div className='bg--primary'>
        <div className='container mx-auto max-w-[1170px] px-5 pt-10 pb-24' id='tovabbi-teruletek'>
            <h2 className='h2 pb-14'>
                További területek
            </h2>
        
            <div className='lg:flex justify-between'>
                <div className='lg:order-2'>
                    <StaticImage src='../../images/section-6.png' alt='Családi viták' className='mx-auto mb-10' />
                </div>

                <div className='lg:order-1'>
                    <h3 className='h3 mb-10' id='csaladi-vitak'>Családi viták</h3>

                    <p className='subtitle max-w-[600px]'>
                        A családon belüli viták rendkívül szerteágazóak lehetnek és természetüknél fogva erős érzelmi befolyás alatt állnak.
                    </p>

                    <h3 className='h3 mt-[90px]'>A leggyakoribb vitás esetek:</h3>

                    <p className='max-w-[470px] pb-8'>
                        együttélésből eredő viták a párok/házastársak között, ami felöleli a mindennapok megszervezését, időbeosztását, feladat megosztást, de lehet a közös lakás kiválasztása vagy a szabadidő eltöltése, a tágabb családdal történő kapcsolattartás is
                    </p>

                    <p className='max-w-[470px] pb-8'>
                        szülő-gyermek közötti konfliktus ami lehet a nevelés alatt álló gyermek és a szülő közötti vita, vagy felnőtt gyerek és szülő közötti is, nagyszülő és az unokák láthatása, kapcsolattartása miatt vita
                    </p>

                    <p className='max-w-[470px]'>
                        konfliktus a szűk családon belül testvér-testvér, párok szülei testvérei miatti konfliktus
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section6
