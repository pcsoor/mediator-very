import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Section2 = () => {
  return (
    <div className='bg--primary'>
        <div className='container mx-auto max-w-[1170px] px-5 pt-10 pb-28'>
            <div className='md:flex justify-between items-end'>
                <StaticImage src='../../images/section-2.png' alt="Milyen esetben segít a mediátor?" className='md:mr-4' />

                <div className='max-w-[570px] pb-10'>
                    <h1 className='h1 pt-5  pb-5 md:pb-14' id='milyen-esetekben-segit'>
                        Milyen esetben segít a mediátor?
                    </h1>

                    <p>
                        A meidáció során nemcsak megállapodás elérése a cél, segít a kommunikáció megváltoztatásában, a bizalom felépítésében vagy újraépítésében, a problémák közös megoldásában, a teljesség igénye nélkül az alábbi esetekben:
                    </p>
                </div>
            </div>

            <div className='lg:flex max-w-[900px] mx-auto py-10 md:py-20'>
                <div className='flex flex-col h-[250px] justify-between mb-10'>
                    <p>válás közös megegyezéssel</p>
                    <p>gyermek elhelyezés, láthatás</p>
                    <p>válást követően a gyermek nevelés kérdései</p>
                    <p>párkapcsolati problémák</p>
                    <p>családon belüli nézet külömbségek</p>
                </div>

                <div className='flex flex-col h-[250px] justify-between'>
                    <p>gazdasági életben felmerülő viták külső partnerekkel</p>
                    <p>cégen belüli viták, üzlettársak közötti konfliktusok</p>
                    <p>generáció váltás cégen belüli problémái, kihatása a családi kapcsolatokra</p>
                    <p>munkahelyi, munkaügyi viták</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Section2
