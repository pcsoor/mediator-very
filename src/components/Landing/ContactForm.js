import React from 'react'
import Input from '../Form/Input'
import "./contactform.css"
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onChangeNameHandler = event => {
    setName(event.target.value);
  };

  const onChangeEmailHandler = event => {
    setEmail(event.target.value);
  };

  const onChangePhoneHandler = event => {
    setPhone(event.target.value);
  };

  return (
    <div className='contact-form'>
        <Input label="Név" autoFocus={true} name="name" autoComplete="off" placeholder="Név" onChange={onChangeNameHandler} value={name} />
        <Input label="E-mail cím" autoFocus={true} name="email" autoComplete="off" placeholder="E-mail cím" onChange={onChangeEmailHandler} value={email} />
        <Input label="Telefonszám" autoFocus={true} name="phone" autoComplete="off" placeholder="Telefonszám" onChange={onChangePhoneHandler} value={phone} />

        <button className='btn btn--primary w-full lg:w-fit'>
          <a href={`mailto:dr.kaszo.eva@gmail.com?subject=${name}&body=${name}%0D%0A${email}%0D%0A${phone}`}>
            Adatok elküldése
          </a>
        </button>
    </div>
  )
}

export default ContactForm
