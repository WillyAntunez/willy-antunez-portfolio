import React, { useEffect } from 'react'

import { ModalPortal } from './ModalPortal/ModalPortal'

import { envelopeCheckIcon, envelopeFailIcon } from '../../assets';

import './Modal.scss';

export const Modal = ({success, msg, onCloseModal}) => {

    const onClickModal = (event) => {
        if(event.target.matches('.modal__container') || event.target.matches('.modal__close')){
            onCloseModal();
        }
    };

    const onScrollModal = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        const x = window.scrollX;
        const y = window.scrollY;

        const onScroll = (event) => {
            event.preventDefault();

            window.scrollTo({
                top: y,
                left: x,
                behavior: 'instant',
            });
            console.log('hola')
        }

        window.addEventListener('scroll', onScroll)
        
        return () =>{
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <ModalPortal>
            <div className='modal__container' onClick={onClickModal} onScroll={onScrollModal} >
                <div className="modal">
                    {
                        success 
                        ? (<img src={ envelopeCheckIcon } alt="Email sended icon" className='modal__icon modal__icon--success' />)
                        : (<img src={ envelopeFailIcon } alt="Email failed icon" className='modal__icon modal__icon--fail' />)
                    }
                    
                    <p className='modal__text'>{ msg }</p>

                    <button className='modal__close'>
                        Regresar
                    </button>
                </div>
            </div>
        </ModalPortal>
    )
}
