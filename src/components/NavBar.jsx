import React, { useState, useRef } from 'react';

import { IconBtn } from './IconBtn';

import './NavBar.scss';

import hambIcon from '../assets/img/hamb.png';
import closeIcon from '../assets/img/close-icon.png';

export const NavBar = () => {
    const [showNav, setShowNav] = useState(false);

    const navBarRef = useRef();

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

    const onScrollToId = (targetId) => {
        const elementPosition = document.getElementById(targetId).getBoundingClientRect().top + window.pageYOffset;
        
        const navBarHeight = navBarRef.current.clientHeight;

        if(window.innerWidth >= 768 ){
            window.scrollTo({top: elementPosition - navBarHeight});
        }else{
            window.scrollTo({top: elementPosition});
            onHideNav();
        }

    }

    return (
        <>
            <div
                onClick={onClickOutside}
                className={`nav__container ${!showNav ? 'nav__container--hidden' : ''}`}
                ref={navBarRef}
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
                        <li className="nav__item nav__item--start">
                            <a className="nav__link" onClick={() => {onScrollToId('start')}}>Inicio</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" onClick={() => {onScrollToId('about')}}>¿Quién soy?</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" onClick={() => {onScrollToId('skills')}}>Habilidades</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" onClick={() => {onScrollToId('projects')}}>Proyectos</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" onClick={() => {onScrollToId('contact')}}>Contacto</a>
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
