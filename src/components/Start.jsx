import React, { useState, useRef } from 'react';

import './start.scss';

import arrowUpImg from '../assets/svg/arrow-up.svg';
import developerImg from '../assets/img/developer.png';

import { useMotion } from '../hooks/useMotion';

export const Start = () => {
    const { enableMotion, showPermBtn, motion1, motion2, motion3 } =
        useMotion();

    const touchStartPosition = useRef(0);
    const touchStartTime = useRef(0);
    const touchEndPosition = useRef(0);
    const touchEndTime = useRef(0);
    const touchDistancePercent = useRef(0);

    const [elementMoving, setElementMoving] = useState(0);
    const [transitionSpeed, setTransitionSpeed] = useState('');

    const handleTouchStart = (event) => {
        setTransitionSpeed('');
        touchStartPosition.current = event.touches[0].clientY;
        touchStartTime.current = Date.now();
    };

    const handleTouchMove = (event) => {
        const touchPosition = event.touches[0].clientY;
        const touchDistance = touchStartPosition.current - touchPosition;
        touchDistancePercent.current = (touchDistance * 100) / screen.height;

        if (touchDistance > 0) {
            setElementMoving(-touchDistancePercent.current);
        }
    };

    const handleTouchEnd = (event) => {
        touchEndPosition.current = event.changedTouches[0].clientY;
        touchEndTime.current = Date.now();

        const totalTime = touchEndTime.current - touchStartTime.current;
        const touchSpeed = touchDistancePercent.current / totalTime; // percent/ms

        if (touchDistancePercent.current >= 40 || touchSpeed > 0.1) {
            if (touchSpeed > 0.1) {
                setTransitionSpeed('.4s');
            } else {
                setTransitionSpeed('.5s');
            }
            setElementMoving(-100);
        } else {
            setTransitionSpeed('.3s');
            setElementMoving(0);
        }
    };

    return (
        <>
            <div
                className={`container container--start `}
                onTouchMove={handleTouchMove}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{
                    transform: `translateY(${elementMoving}%)`,
                    opacity: `${elementMoving + 100}%`,
                    transition: `all linear ${transitionSpeed}`,
                }}
            >
                <div className="start">
                    <div className="start__frame" style={motion3}></div>

                    <div className="start__items" style={{ motion1 }}>
                        <div className="start__name " style={motion2}>
                            <h1>
                                Willy <br /> Antunez
                            </h1>
                        </div>

                        <div className="start__title " style={motion2}>
                            <h2>Web developer</h2>
                        </div>

                        <div className="start__technologies">
                            <div
                                className="start__item start__item--javascript"
                                style={motion1}
                            >
                                JS
                            </div>
                            <div
                                className="start__item start__item--html"
                                style={motion1}
                            >
                                {'<HTML>'}
                            </div>
                            <div
                                className="start__item start__item--css"
                                style={motion1}
                            >
                                CSS
                            </div>
                            <div
                                className="start__item start__item--vue"
                                style={motion1}
                            >
                                Vue.js
                            </div>
                            <div
                                className="start__item start__item--git"
                                style={motion1}
                            >
                                Git/Github
                            </div>
                            <div
                                className="start__item start__item--react"
                                style={motion1}
                            >
                                React.js
                            </div>
                            <div
                                className="start__item start__item--sass"
                                style={motion1}
                            >
                                SASS
                            </div>
                        </div>
                    </div>

                    <div className="start__bottom">
                        <p className="start__text start__text--bold">
                            Te doy la bienvenida
                        </p>
                        <p className="start__text">Desliza hacia arriba</p>
                        <img
                            className="start__arrow"
                            src={arrowUpImg}
                            alt="Flecha apuntando hacia arriba"
                        />
                    </div>

                    <img
                        src={developerImg}
                        alt="developer"
                        className="start__image"
                    />
                </div>

                {showPermBtn && (
                    <div
                        className={`floatingBtn ${
                            showPermBtn ? '' : 'floatingBtn--hidden'
                        }`}
                    >
                        <button onClick={enableMotion}>Activa la magia</button>
                    </div>
                )}
            </div>
        </>
    );
};
