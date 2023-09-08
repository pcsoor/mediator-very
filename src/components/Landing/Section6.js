import React from 'react'
import Section6Image from "../../images/section-6.png"

const Section6 = () => {
  return (
    <div className='container mx-auto max-w-[1170px] px-5 pt-10 pb-24' id='tovabbi-teruletek'>
        <h1 className='h1 pb-14'>
            További területek
        </h1>
      
        <div className='lg:flex justify-between'>
            <div className='lg:order-2'>
                <img src={Section6Image} className='mx-auto mb-10' />
            </div>

            <div className='lg:order-1'>
                <h2 className='h2 mb-10' id='csaladi-vitak'>Családi viták</h2>

                <p className='subtitle max-w-[600px]'>
                    A családon belüli viták rendkívül szerteágazóak lehetnek és természetüknél fogva erős érzelmi befolyás alatt állnak.
                </p>

                <h2 className='h2 mt-[90px]'>A leggyakoribb vitás esetek:</h2>

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
  )
}

export default Section6
