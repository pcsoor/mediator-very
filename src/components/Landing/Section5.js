import React from 'react'

const Section5 = () => {
  return (
    <div className='container mx-auto max-w-[1170px] px-5 py-10'>
        <h1 className='h1 pb-14' id='valasi-mediacio'>
            Válási mediáció
        </h1>

        <p className='subtitle max-w-[700px]'>
            A válási mediáció nemcsak a szorosan vett házasság felbontását jelenti, hanem minden olyan párkapcsolat megszüntetését, mely közös, írásban történő megállapodást igényel.
        </p>

        <div className='lg:flex justify-between mt-12'>
            <div className='max-w-[470px]'>
                <p className='pb-5'>
                    Mediátorhoz fordulhatnak bontóper előtt, per alatt és peres eljárást követően is, és abban az esetben is, ha a vitás kérdéseket megállapodással kívánják rendezni és nem akarnak bírósághoz fordulni. Lehetséges, hogy önként választják a mediációs eljárást, de a bíróság is kötelezheti a feleket a peres eljárás során.
                </p>

                <p className='pb-5'>
                    A mediátor igénybevételével történő válás leggyakrabban a házasság közös megegyezéssel történő felbontását jelenti. Ennek menetele a házastársak közös elhatározásával kezdődik, a mediátorral történő egy vagy több üléssel 
                </p>
            </div>
            
            <div className='max-w-[470px]'>
                <p className='pb-5'>
                    folytatódik. A megállapodás megkötését követően az iratok bíróságra történő beadásával folytatódik és a válás kimondásával zárul.
                </p>

                <p className='pb-5'>
                    A válás azonban ennél sokkal több részlet tisztázását igényli a házasság, élettársi kapcsolat, párkapcsolat felbontása esetén.
                </p>

                <p>
                    Házasság felbontása csak bíróság által történhet, azonban a mediációs megállapodás minden kérdést tartalmazhat, mely a házasság felbontásához szükséges, melyet a bíróság egyezséggel jóváhagy.
                </p>
            </div>
        </div>

        <h2 className='h2 pt-16 pb-10'>Válási mediáció során rendezhető:</h2>

        <div className='grid grid-cols-1 md:grid-cols-2'>
            <p className='pb-7'>a tartásdíj</p>
            <p className='pb-7'>a gyermekkel való kapcsolattartás</p>
            <p className='pb-7'>a közös lakás használata, tulajdonának kérdése</p>
            <p className='pb-7'>a gyermek elhelyezés</p>
            <p className='pb-7'>a szülői felügyeleti jog</p>
            <p className='pb-7'>vagyonjogi kérdések</p>
            <p>a gyermek elhelyezés</p>
        </div>

        <p className='max-w-[870px] mt-20'>
            A vagyon megosztásának kérdése nem feltétele a házasság felbontásának, az erről történő megállapodást ügyvéd által ellenjegyzett okiratba kell foglalni, azonban a részletek kidolgozása, a megállapodás előkészítése mediációs ülésen történhet.
        </p>
    </div>
  )
}

export default Section5
