import React from 'react'
import Section9Image from "../../images/section-9.png"

const Section9 = () => {
  return (
    <div className='container mx-auto max-w-[1170px] px-5 pt-10 pb-48'>
        <img src={Section9Image} className='mb-[100px]' />

        <h2 className='h2 mb-10' id='munkaugyi-vitak'>Munkaügyi viták</h2>

        <div className='lg:flex justify-between'>
            <div className='max-w-[470px] mr-10'>
                <p className='pb-8'>
                    Munkahelyen vita keletkezhet a dolgozók, a dolgozók és a vezetők között. Ezek a konfliktusok mediáció útján a problémák feltárásával, a megoldás megkeresésével megoldhatók.
                </p>

                <p>
                    Ugyanez vonatkozik az olyan munkavállaló és munkáltató közötti vitákra is, mely rossz esetben bíróság előtti peres eljárássá alakulhat.
                </p>
            </div>

            <div className='max-w-[470px]'>
                <p>
                    A viták gyors lezárásával elkerülhető a rossz munkahelyi légkör kialakulása ami a teljesítmény rovására vezet. Ehhez nyújt a mediáció hathatós segítséget.
                </p>
                
            </div>
        </div>
    </div>
  )
}

export default Section9