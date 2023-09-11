import React from 'react'
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className='bg--primary'>
      <div className='container mx-auto max-w-[1170px] px-5 pt-10 pb-16'>
          <h2 className='h2 pb-14' id='contact'>
              Kontakt
          </h2>
        
          <div className='lg:flex justify-between'>
            <div>
              <p className='max-w-[570px] pb-10'>
                Amennyiben kérdése van, vagy időpontot szeretne kérni hívjon a megadott számon vagy küldjön üzenetet az űrlapon keresztül. Amennyiben nem tudom fogadni hívását, amint lehet visszahívom:
              </p>

              <p className='pb-4'>
                <a href='mailto:dr.kaszo.eva@gmail.com'>dr.kaszo.eva@gmail.com</a>
              </p>

              <p>
                <a href='tel:+36302114563'>+36302114563</a>
              </p>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact
