import React from 'react';
import { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';

import './Contact.scss';

import whatsappIcon from '../assets/img/whatsapp-icon.png';
import facebookIcon from '../assets/svg/facebook.svg';
import linkedinIcon from '../assets/svg/linkedin.svg';
import twitterIcon from '../assets/svg/twitter.svg';

export const Contact = () => {

  const {contact, social} = useContext(ProfileContext)

  return (
    <>
        <div className='contact__container'>
            <div className="contact">

              <h2 className='contact__title'> Contáctame </h2>  
              <hr className='contact__separator' />

              <div className="contact__intro">
                <p className='contact__text'>
                  ¿Tienes dudas, sugerencias, problemas, comentarios o peticiones? Estoy para tí, no dudes en contactarme. 
                </p>
                <p className='contact__text'>
                  Existen 4 formas en las que puedes contactarme:
                </p>
              </div>

              <div className='contact__way'>
                <h3 className='contact__subtitle'>Opcion 1: ¡Usa mi información de contacto!</h3>
                <p className='contact__text'> <b>Mi teléfono:</b> { contact.cellphone } </p>
                <p className='contact__text'> <b>Mi correo:</b> { contact.email } </p>
              </div>

              <div className='contact__way contact__way--centered'>
                <h3 className='contact__subtitle'>Opcion 2: Enviame un Whatsapp</h3>
                <a className='contact__whatsappButton' href={ social.whatsappUrl } target='_blank' rel="noreferrer"> 
                  <img src={whatsappIcon} alt="Whatsapp Icon" />
                  ¡Mandame un whatsapp!
                </a>
              </div>

              <div className='contact__way contact__way--centered'>
                <h3 className='contact__subtitle'>Opcion 3: Visita en mis redes sociales</h3>
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

              <div className="contact__way">
                <h3 className='contact__subtitle'>Opcion 4: Usa este formulario:</h3>
                <form className="contact__form">
                  <label className='contact__text contact__label'><b>Tu nombre:</b></label>
                  <input className='contact__input' type="text" placeholder='Ej: Alan Turing' />

                  <label className='contact__text contact__label'><b>Correo electrónico:</b></label>
                  <input className='contact__input' type="text" placeholder='Ej: Alan_turing@enigma.com' />
                  
                  <label className='contact__text contact__label'><b> Asunto: </b></label>
                  <input className='contact__input' type="text" placeholder='¿Por qué tema me contactas?' />
                  
                  <label className='contact__text contact__label'> <b> Mensaje: </b> </label>
                  <textarea className='contact__input' placeholder='Escribe aquí lo que me quieras decir' rows={8}></textarea>

                  <button className='contact__submitButton' type='sumbit'>Enviar mensaje</button>
                </form>
              </div>

              <p className='contact__text'>Una vez resiones &quot;Enviar mensaje&quot; me llegará un correo y me pondré en contacto contigo tan pronto sea posible</p>

            </div>
        </div>
    </>
  )
}
