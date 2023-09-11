import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Section1 = () => {
  return (
    <div className='bg--primary'>
      <div className='container mx-auto max-w-[1170px] px-5 pt-20 lg:pt-[200px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='md:order-2'>
            <StaticImage src='../../images/section-1.png' alt="Mi a mediáció?" />
          </div>

          <div className='md:order-1 pt-5'>
            <h2 className='h2 pb-10' id='mi-a-mediacio'>Mi a mediáció?</h2>

            <p className='subtitle max-w-[500px]'>
              A mediáció alternatív vitarendezési, konfliktuskezelési módszer, melynek során 
              egy pártatlan közvetítő segíti a feleket megállapodásra jutni a vitás kérdésekben az 
              élet bármely területén, melyek lehetnek párkapcsolati, családi, gazdasági, öröklési, munkahelyi vagy bármely más viták. 
            </p>
          </div>

          <div className='order-3'>
            <p className='mb-5 max-w-[470px]'>
              Biztosítja mindazokat a feltételeket, amelyek a nézetletérések és összeütközések érdemi kezeléséhez szükségesek.
            </p>

            <p className='max-w-[470px]'>
              A mediáció során a mediátor segytsésével és vezetésével a konfliktusban érintett személyek saját szükségleteik és érdekeik megfogalmazásán túl képessé válnak arra, hogy megértsék és elfogadják a másik fél igényét is.
            </p>
          </div>
          
          <div className='order-4'>
            <p className='max-w-[470px]'>
              A mediáció lehetőséget biztosít a felek számára elfogadható megoldás és ezt követően a megállapodás kidolgozására. A mediációs megállapodás a mediátor vezetésével kialakított, a felek együttműködésével született, mindkettőjük által elfogadott megállapodás.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Section1
