import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Section8 = () => {
  return (
    <div className='bg--primary'>
        <div className='container mx-auto max-w-[1170px] px-5 pt-10 pb-10 lg:pb-24'>
            <div className='lg:flex justify-between'>
                <div className='lg:order-2 mb-10'>
                    <StaticImage src='../../images/section-8.png' alt='Gazdasági viták' className='mx-auto' />
                </div>

                <div className='max-w-[470px] lg:order-1'>
                    <h2 className='h2 mb-10' id='gazdasagi-vitak'>Gazdasági viták</h2>

                    <p>
                        A gazdasági élet számos konfliktust gerjeszt, melyeket eredménytelen tárgyalást követően peres eljárás során próbálnak rendezni a felek.
                    </p>
                </div>            
            </div>

            <h2 className='h2 mt-12 max-w-[470px]'>Miért előnyösebb mediáció útján rendezni a vitát</h2>

            <div className='lg:flex'>
                <div className='max-w-[470px] mr-24'>
                    <p className='pb-8'>a mediáció során gyors megállapodáshoz vezethet, a peres eljárás sokkal hosszabb időt, általában éveket igényel</p>
                    <p className='pb-8'>minden részlet kidolgozására a mediáció alkalmasabb, a feleknek annyi idő áll rendelkezésre amennyit ők igényelnek, nem szorítja a bírósági időkeret</p>
                    <p className='pb-8'>a peres eljárás sokkal drágább a mediációs eljárásnál , peres eljárás esetén illeték, ügyvédi munkadíj, szakértői költség merül fel</p>
                    <p>a mediációs megállapodásba olyan kérdések is bele foglalhatók, melyeket nem szeretnének a bíróság előtt tárgyalni a felek</p>
                </div>

                <div className='max-w-[470px]'>
                    <p className='pb-8'>a megállapodás megkötését követően, a feltételek megváltozása esetén, közösen kérhetik a megállapodás módosítását, kiegészítését, mely rövid határidővel lebonyolítható</p>
                    <p className='pb-8'>a megkötött megállapodás bíróság által történő jóváhagyása kérhető</p>
                    <p>a mediáció megállapodással történő lezárása mindkét fél számára előnyös, (win-win), nincs pernyertes vagy vesztes fél</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Section8
