import React from 'react'
import Section7Image from "../../images/section-7.png"

const Section7 = () => {
  return (
    <div className='container mx-auto max-w-[1170px] px-5 pb-10 lg:pb-24'>
        <div className='lg:flex justify-between'>
            <div className='mb-10'>
                <img src={Section7Image} className='mx-auto' />
            </div>

            <div className='max-w-[470px]'>
                <h2 className='h2 mb-10' id='oroklesi-vitak'>Öröklési viták</h2>

                <p>
                    Az öröklési viták kialakulhatnak az örökhagyó életében az örökhagyó és az örökösök között, vagy az örökösök között is.
                </p>

                <h2 className='h2 mt-10 lg:mt-[90px]'>Gyakoribb azonban az örökhagyó halálát követően az örökösök közötti vita főként a következő esetekben:</h2>

                <p className='pb-8'>
                    végrendeletben foglaltak miatti vita
                </p>

                <p className='pb-8'>
                    végrendeleti örökös és törvényes örökösök közötti egyet nem értés
                </p>

                <p className='pb-8'>
                    gyermekek és túlélő házastársa vitája
                </p>

                <p>
                    az örökléssel közös tulajdonba kerülő vagyontárgyak későbbi használata miatti vita
                </p>
            </div>
        </div>
    </div>
  )
}

export default Section7
