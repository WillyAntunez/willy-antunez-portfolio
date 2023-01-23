import React from 'react';
import PropTypes from 'prop-types';

import miFoto from '../assets/img/yo.jpg';
import arrow from '../assets/img/handmade-arrow.png';

import './AboutMe.scss';
import { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';

export const AboutMe = ({id}) => {

    const { cvUrl } = useContext(ProfileContext)

    return (
        <>
            <div className="container container--about" id={id}>
                <div className="about">
                    <p className="about__welcome">!Empecemos el recorrido!</p>
                    <h2 className="about__title">¿Quien soy?</h2>
                    <div className="photo-composition">
                        <div className="photo-composition__background">
                            <img
                                src={miFoto}
                                alt="imagen de Willy Antunez"
                                className="photo-composition__img"
                            />
                        </div>

                        <div className="photo-composition__arrow">
                            <img src={arrow} alt="handmade arrow" />
                            <span>(Este soy yo)</span>
                        </div>
                    </div>
                    <p className="about__description">
                        Mi nombre es Willy Emanuel Antunez Gonzales, tengo 25 años y vivo en
                        Tegucigalpa, capital de Honduras. <br /> <br /> Soy un autodidacta, me gusta
                        aprovechar todos los recursos online disponibles para ser un desarrollador
                        capaz de encontrar soluciones sofisticadas a problemas complejos.
                    </p>
                    <a className="about__button" href={ cvUrl } target='_blank' rel="noreferrer">Descargar CV</a>
                </div>
            </div>
        </>
    );
};

AboutMe.propTypes = {
    id: PropTypes.string.isRequired,
}