import React from 'react';
import { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';

import './Contact.scss';

import whatsappIcon from '../assets/img/whatsapp-icon.png';
import facebookIcon from '../assets/svg/facebook.svg';
import linkedinIcon from '../assets/svg/linkedin.svg';
import twitterIcon from '../assets/svg/twitter.svg';

export const Contact = () => {

  const {social} = useContext(ProfileContext)

  return (
    <>
        <div className='contact__container'>
            <div className="contact">

              <h2 className='contact__title'> Contáctame </h2>  
              {/* <hr className='contact__separator' /> */}

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
                <form className="contact__form">
                  <div className="contact__formGroup contact__formGroup--wrapable">
                    <label className='contact__text contact__label'><b>Tu nombre:</b></label>
                    <input className='contact__input contact' type="text" placeholder='Ej: Alan Turing' />
                  </div>

                  <div className="contact__formGroup contact__formGroup--wrapable">
                    <label className='contact__text contact__label'><b>Correo electrónico:</b></label>
                    <input className='contact__input contact' type="text" placeholder='Ej: Alan_turing@enigma.com' />
                  </div>
                  
                  <div className="contact__formGroup">
                    <label className='contact__text contact__label'><b> Asunto: </b></label>
                    <input className='contact__input' type="text" placeholder='¿Por qué tema me contactas?' />
                  </div>
                  
                  <div className="contact__formGroup">
                    <label className='contact__text contact__label'> <b> Mensaje: </b> </label>
                    <textarea className='contact__input' placeholder='Escribe aquí lo que me quieras decir' rows={8}></textarea>
                  </div>

                  <button className='contact__submitButton' type='sumbit'>Enviar mensaje</button>
                </form>
              </div>

            </div>
        </div>
    </>
  )
}
