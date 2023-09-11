import React from 'react'
import "./section3.css"
import { StaticImage } from "gatsby-plugin-image"

const Section3 = () => {
  return (
    <div className='bg--primary'>
        <div className='container mx-auto max-w-[1170px] px-5 pt-10 pb-16'>
            <h1 className='h1 pb-14' id='mediacio-menete'>
                A mediáció menete
            </h1>

            <div class="lg:flex justify-center justify-between relative steps-container">
                <div class="step-content-wrapper">
                    <div class="step-content flex justify-center flex-col">
                        <div class="flex mb-2">
                            <h2 class="h2">Előzetes konzulátció</h2>
                        </div>
                        <p>amikor a felek ismertetik, hogy mit szeretnének elérni a mediációval. Általában egy-egy a felekkel külön folytatott beszélgetés, melyen elhangzottak csak a fél kifejezett kérésére kerülnek be a közös ülésre.</p>
                    </div>

                    <div class="hidden lg:block"></div>

                    <div class="step-content flex justify-center flex-col">
                        <div class="flex mb-2">
                            <h2 class="h2">Lehetséges kimenetelek</h2>
                        </div>
                        <p>Lehetséges, hogy az első ülésen létrejön a megállapodás, de gyakran több ülés (2-5) szükséges. A mediációs ülés a felek időbeosztását és igényét figyelembe véve hetente, kéthetente egy alkalommal javasolt.</p>
                    </div>

                    <div class="hidden lg:block"></div>

                    <div class="step-content flex justify-center flex-col">
                        <div class="flex mb-2">
                            <h2 class="h2">Titoktartási kötelezettség</h2>
                        </div>
                        <p>A mediátort titoktartási kötelezettség terheli, mely kiterjed minden olyan tényre, amelyre a mediációs eljárás során szerzett tudomást és ez a kötelezettsége az eljárás lezárása, megszűnését követően is fennáll.</p>
                    </div>
                </div>

                <div class="step-line h-full absolute lg:relative top-0 items-center">
                    <div class="dot"><StaticImage src='../../images/step-icon.png' /></div>
                    <div class="dot"><StaticImage src='../../images/step-icon.png' /></div>
                    <div class="dot"><StaticImage src='../../images/step-icon.png' /></div>
                    <div class="dot"><StaticImage src='../../images/step-icon.png' /></div>
                    <div class="dot"><StaticImage src='../../images/step-icon.png' /></div>
                </div>

                <div class="step-content-wrapper">
                    <div class="hidden lg:block"></div>

                    <div class="step-content flex justify-center flex-col">

                    <div class="flex mb-2">
                        <h2 class="h2">Közös mediációs ülés</h2>
                    </div>
                    <p>A felek részletesen elmondják álláspontjukat, a mediátor vezetésével megbeszélik a lehetséges alternatívákat, megoldásokat. Elemezik a megállapodás részleteit, kidolgozzák a megállapodást. A közös mediációs ülés időtartama alkalmakként maximum. 3 óra.</p>
                </div>

                <div class="hidden lg:block"></div>

                    <div class="step-content flex justify-center flex-col">
                        <div class="flex mb-2">
                            <h2 class="h2">Megállapodás írásba foglalása, a feleknek átadása</h2>
                        </div>
                        <p>A megállapodást a közvetítő és az együttesen, személyesen jelen levő felek aláírásukkal látják el. A felek a megállapodásban foglaltakat kötelezőnek ismerik el magukra nézve. Ez a megállapodás azonban nem jelenti azt, hogy a felek ezen vitás ügyet bírósági eljárásban nem érvényesíthetik.</p>
                    </div>

                    <div class="hidden lg:block"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section3
