import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ProfileContext } from '../context/ProfileContext';

import './Contact.scss';

import whatsappIcon from '../assets/img/whatsapp-icon.png';
import facebookIcon from '../assets/svg/facebook.svg';
import linkedinIcon from '../assets/svg/linkedin.svg';
import twitterIcon from '../assets/svg/twitter.svg';
import { useForm } from '../hooks/useForm';
import { useFormSpree } from '../hooks/useFormSpree';

const formConfig = [
  {
    name: 'name',
    regexValidators: [
      [/\S+/, 'Este campo no puede estar vacío'],
      [/^[a-zA-Z\s]*$/, 'Ingresaste caracteres no validos'],
      [/^((?!asdasd).)*$/, '¿Estás escribiendo caracteres al azar?'],
    ]
  },
  {
    name: 'email',
    regexValidators: [
      [/\S+/, 'Este campo no puede estar vacío'],
      [
        /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/, 
        'Ingresaste un correo no válido'
      ],
    ]
  },
  {
    name: 'subject',
    regexValidators: [
      [/\S+/, 'Este campo no puede estar vacío'],
      [/^.{0,50}$/, 'El máximo de caracteres son 50'],
      [/^((?!asdasd).)*$/, '¿Estás escribiendo caracteres al azar?'],
    ],
  },
  {
    name: 'msgBody',
    regexValidators: [
      [/\S+/, 'Este campo no puede estar vacío'],
      [/^[\s\S]{0,5000}$/, 'Tampoco me contés tu vida... se más breve por favor.'],
    ]
  }
]

export const Contact = ({id}) => {

  const {social} = useContext(ProfileContext)
  
  const {name, email, subject, msgBody, onInputChange, isFormValid, setFormSubmitted, wasFormSubmited} = useForm(formConfig);
  const sendEmail = useFormSpree('mayznpal');

  const onFormSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted();

    if(isFormValid){
      await sendEmail({
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: msgBody.value,
      });
    }
  }


  return (
    <>
        <div className='contact__container' id={id}>
            <div className="contact">

              <h2 className='contact__title'> Contáctame </h2>  

              <div className='contact__way contact__way--centered contact__way--first'>
                <h3 className='contact__subtitle'> ¡Enviame un Whatsapp!</h3>
                <a className='contact__whatsappButton' href={ social.whatsappUrl } target='_blank' rel="noreferrer"> 
                  <img src={whatsappIcon} alt="Whatsapp Icon" />
                  ¡Mandame un whatsapp!
                </a>
              </div>

              <div className='contact__way contact__way--centered contact__way--second'>
                <h3 className='contact__subtitle'> ¡Visita mis redes sociales!</h3>
                <div className='contact__socialButtons'>
                  <a href={social.facebookUrl} target="_blank" rel="noreferrer" className='contact__iconButton'> 
                    <img src={ facebookIcon } alt="Facebook icon" /> 
                  </a>
                  <a href={social.linkedinUrl} target="_blank" rel="noreferrer" className='contact__iconButton'> 
                    <img src={ linkedinIcon } alt="Facebook icon" /> 
                  </a>
                  <a href={social.twitterUrl} target="_blank" rel="noreferrer" className='contact__iconButton'> 
                    <img src={ twitterIcon } alt="Facebook icon" /> 
                  </a>
                </div>
              </div>

              <div className="contact__way contact__way--form">
                <h3 className='contact__subtitle'> ¡Usa mi formulario de contacto!</h3>
                <form className="contact__form" onSubmit={onFormSubmit} noValidate>
                  <div className="contact__formGroup contact__formGroup--wrapable">
                    <label className='contact__text contact__label'><b>Tu nombre:</b></label>
                    <input 
                      className={`contact__input contact ${(wasFormSubmited && name.notValid)? 'contact__input--notValid' : ''}`} 
                      type="text" 
                      placeholder='Ej: Alan Turing'
                      value={name.value} 
                      name="name"
                      onChange={onInputChange}
                    />
                    {
                      (wasFormSubmited && name.notValid) && <small className='contact__inputError'>{name.notValid}</small>
                    }
                  </div>

                  <div className="contact__formGroup contact__formGroup--wrapable">
                    <label className='contact__text contact__label'><b>Correo electrónico:</b></label>
                    <input 
                      type="text" 
                      placeholder='Ej: Alan_turing@enigma.com'
                      className={`contact__input contact ${(wasFormSubmited && email.notValid)? 'contact__input--notValid' : ''}`} 
                      value={email.value}
                      name="email"
                      onChange={onInputChange}
                    />
                    {
                      (wasFormSubmited && email.notValid) && <small className='contact__inputError'>{email.notValid}</small>
                    }
                  </div>
                  
                  <div className="contact__formGroup">
                    <label className='contact__text contact__label'><b> Asunto: </b></label>
                    <input 
                      type="text" 
                      placeholder='¿Por qué tema me contactas?'
                      className={`contact__input contact ${(wasFormSubmited && subject.notValid)? 'contact__input--notValid' : ''}`} 
                      value={subject.value}
                      name="subject"
                      onChange={onInputChange} 
                    />
                    {
                      (wasFormSubmited && subject.notValid) && <small className='contact__inputError'>{subject.notValid}</small>
                    }
                  </div>
                  
                  <div className="contact__formGroup">
                    <label className='contact__text contact__label'> <b> Mensaje: </b> </label>
                    <textarea 
                      placeholder='Escribe aquí lo que me quieras decir' 
                      rows={8}
                      className={`contact__input contact ${(wasFormSubmited && msgBody.notValid)? 'contact__input--notValid' : ''}`} 
                      value={msgBody.value}
                      name="msgBody"
                      onChange={onInputChange} 
                    ></textarea>
                    {
                      (wasFormSubmited && msgBody.notValid) && <small className='contact__inputError'>{msgBody.notValid}</small>
                    }
                  </div>

                  <button className='contact__submitButton' type='sumbit'>Enviar mensaje</button>
                </form>
              </div>

            </div>
        </div>
    </>
  )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
}