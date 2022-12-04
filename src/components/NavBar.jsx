import React, { useState } from 'react';

import { IconBtn } from './IconBtn';

import './NavBar.scss';

import hambIcon from '../assets/img/hamb.png';
import closeIcon from '../assets/img/close-icon.png';

export const NavBar = () => {
    const [showNav, setShowNav] = useState(false);

    const onShowNav = () => {
        document.body.classList.add('no-scroll');
        setShowNav(true);
    };

    const onHideNav = () => {
        document.body.classList.remove('no-scroll');
        setShowNav(false);
    };

    const onClickOutside = (event) => {
        if (!event.target.matches('.nav') && !event.target.matches('.nav *')) {
            onHideNav();
        }
    };

    return (
        <>
            <div
                onClick={onClickOutside}
                className={`nav__container ${!showNav ? 'nav__container--hidden' : ''}`}
            >
                <nav className="nav">
                    <div className="nav__top">
                        <div className="nav__name text--blueback">
                            <h2>
                                Willy <br /> Antunez
                            </h2>
                        </div>

                        <div className="nav__title text--orangeback">
                            <h3>Web developer</h3>
                        </div>
                    </div>

                    <span className="nav__separator"></span>

                    <ul className="nav__items">
                        <li className="nav__item">
                            <a className="nav__link">¿Quién soy?</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link">Habilidades</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link">Proyectos</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link">Contacto</a>
                        </li>
                    </ul>

                    <button className="nav__close" onClick={onHideNav}>
                        <img src={closeIcon} alt="close 'x' icon" />
                    </button>
                </nav>
            </div>

            <IconBtn icon={hambIcon} onClick={onShowNav} className={'navbtn'} />
        </>
    );
};
