import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { ProfileContext } from '../../context';

import { useForm, useFormSpree } from '../../hooks';

import { formConfig } from './config/formConfig';

import { whatsappIcon, facebookIcon, linkedinIcon, twitterIcon } from '../../assets';

import './Contact.scss';
import { Modal } from '../Modal/Modal';


export const Contact = ({id}) => {

  const {social} = useContext(ProfileContext)
  
  const [modalState, setModalState] = useState({
    show: false,
    success: true,
    msg: '',
  });
  
  const {name, email, subject, msgBody, onInputChange, isFormValid, setFormSubmitted, wasFormSubmited, resetForm} = useForm(formConfig);

  const sendEmail = useFormSpree({id: 'mayznpal', dailyLimit: 3, totalLimit: 10});

  const onFormSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted();


    if(isFormValid){
      const res = await sendEmail({
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: msgBody.value,
      });

      console.log('entro')

      setModalState(modalState => ({
        ...modalState,
        show: true,
        success: res.ok,
        msg: res.msg,
      }))
    }
  };

  const onCloseModal = () => {
    setModalState(modalState => ({
      ...modalState,
      show: false,
    }));

    resetForm();

    window.scrollTo(0, 0);
  };

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
              
              {
                (modalState.show)
                ? <Modal success={modalState.success} msg={modalState.msg} onCloseModal={onCloseModal} />
                : null
              }

            </div>
        </div>
    </>
  )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
}