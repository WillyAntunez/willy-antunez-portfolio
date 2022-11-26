import React, { useState, useEffect, useRef } from 'react';

import './start.scss';

import arrowUpImg from '../assets/svg/arrow-up.svg';
import developerImg from '../assets/img/developer.png';

export const Start = () => {
    const [showPermBtn, setShowPermBtn] = useState(false);

    const [, forceUpdate] = useState(null);

    const initialMotion = useRef({ x: null, y: null });
    const motion = useRef({ x: 0, y: 0 });
    const rotation = useRef({ x: 0, y: 0 });
    const translation = useRef({ x: 0, y: 0 });

    const setInitialMotion = (data) => {
        initialMotion.current = data;
        forceUpdate(data);
    };
    const setMotion = (data) => {
        motion.current = data;
        forceUpdate(data);
    };
    const setRotation = (data) => {
        rotation.current = data;
        forceUpdate(data);
    };
    const setTranslation = (data) => {
        translation.current = data;
        forceUpdate(data);
    };

    /* Función para pedir permiso para activar los sensores de movimiento en IOS 13 o superior */
    const enableMotion = () => {
        setShowPermBtn(false);
        DeviceMotionEvent.requestPermission();
    };

    useEffect(() => {
        const motionLimit = 25;

        const ua = navigator.userAgent.toLowerCase();
        const isAndroid = ua.indexOf('android') > -1;

        /* HANDLE ORIENTATION */
        const handleOrientationEvent = (event) => {
            /* Aqui hace falta usar el initial motion */
            let beta = (event.beta - 90) / 3;
            let gamma = event.gamma / 3;

            let newMotionY = gamma * 5;
            let newMotionX = beta * 5;

            if (!initialMotion.current.x && !initialMotion.current.y) {
                setInitialMotion({ x: newMotionX, y: newMotionY });
            }

            newMotionX = newMotionX - initialMotion.current.x;
            newMotionY = newMotionY - initialMotion.current.y;

            Math.abs(newMotionX) >= motionLimit &&
                (newMotionX = motion.current.x);
            Math.abs(newMotionY) >= motionLimit &&
                (newMotionY = motion.current.y);

            setMotion({
                x: newMotionX,
                y: newMotionY,
            });

            let rotationX = motion.current.x * 1.3;
            let rotationY = -motion.current.y;
            let translationX = motion.current.y;
            let translationY = motion.current.x;

            setRotation({
                x: rotationX,
                y: rotationY,
            });

            setTranslation({
                x: translationX,
                y: translationY,
            });
        };

        /* HANDLE MOTION */
        const handleMotionEvent = (event) => {
            setShowPermBtn(false);

            let newMotionY = motion.current.y + event.rotationRate.beta / 10;
            let newMotionX = motion.current.x + event.rotationRate.alpha / 10;

            Math.abs(newMotionX) >= motionLimit &&
                (newMotionX = motion.current.x);
            Math.abs(newMotionY) >= motionLimit &&
                (newMotionY = motion.current.y);

            setMotion({
                x: newMotionX,
                y: newMotionY,
            });

            let rotationX = motion.current.x * 1.3;
            let rotationY = -motion.current.y;
            let translationX = motion.current.y;
            let translationY = motion.current.x;

            if (window.orientation === 90) {
                let auxX = translationX;
                translationX = translationY;
                translationY = -auxX;

                auxX = rotationX;
                rotationX = rotationY;
                rotationY = -auxX;
            } else if (window.orientation === -90) {
                let auxX = translationX;
                translationX = -translationY;
                translationY = auxX;

                auxX = rotationX;
                rotationX = -rotationY;
                rotationY = auxX;
            }

            setRotation({
                x: rotationX,
                y: rotationY,
            });

            setTranslation({
                x: translationX,
                y: translationY,
            });
        };

        if (isAndroid) {
            window.addEventListener(
                'deviceorientation',
                handleOrientationEvent
            );
        } else {
            window.addEventListener('devicemotion', handleMotionEvent);
        }

        return () => {
            window.removeEventListener('devicemotion', handleMotionEvent);
            window.removeEventListener(
                'deviceorientation',
                handleOrientationEvent
            );
        };
    }, []);

    useEffect(() => {
        if (
            window.DeviceMotionEvent &&
            typeof DeviceMotionEvent.requestPermission === 'function'
        ) {
            setShowPermBtn(true);
        }
    }, []);

    /* Estilos para el movimiento de los elementos */
    const motion3 = {
        transform: `
        translateX(${translation.current.x / 8}px)
        translateY(${translation.current.y / 8}px)`,
        transition: '',
    };

    const motion2 = {
        transform: `
        rotateY(${rotation.current.y / 4}deg) 
        rotateX(${rotation.current.x / 4}deg) 
        translateX(${translation.current.x / 2}px)
        translateY(${translation.current.y / 2}px)`,
        transition: '',
    };

    const motion1 = {
        transform: `
        rotateY(${rotation.current.y}deg) 
        rotateX(${rotation.current.x}deg) 
        translateX(${translation.current.x}px)
        translateY(${translation.current.y}px)`,
        transition: '',
    };

    return (
        <div className="start">
            <div className="start__container">
                <div className="start__frame" style={motion3}></div>
                <div className="start__elements" style={{ motionZ1: motion1 }}>
                    <div
                        className="start__text start__text--title"
                        style={motion2}
                    >
                        <h1>
                            Willy <br /> Antunez
                        </h1>
                    </div>
                    <div
                        className="start__text start__text--subtitle"
                        style={motion2}
                    >
                        <h2>Web developer</h2>
                    </div>
                    <div className="start__technologies">
                        <div
                            className="start__text start__text--javascript"
                            style={motion1}
                        >
                            JS
                        </div>
                        <div
                            className="start__text start__text--html"
                            style={motion1}
                        >
                            {'<HTML>'}
                        </div>
                        <div
                            className="start__text start__text--css"
                            style={motion1}
                        >
                            CSS
                        </div>
                        <div
                            className="start__text start__text--vue"
                            style={motion1}
                        >
                            Vue.js
                        </div>
                        <div
                            className="start__text start__text--git"
                            style={motion1}
                        >
                            Git/Github
                        </div>
                        <div
                            className="start__text start__text--react"
                            style={motion1}
                        >
                            React.js
                        </div>
                        <div
                            className="start__text start__text--sass"
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

                <div
                    className={`floatingBtn ${
                        showPermBtn ? '' : 'floatingBtn--hidden'
                    }`}
                >
                    <button
                        className="floatingBtn__button"
                        onClick={enableMotion}
                    >
                        Activa la magia
                    </button>
                </div>

                {/* <div className={`floatingBtn $`}>
                    <button
                        className="floatingBtn__button"
                        onClick={enableMotion}
                    >
                        Rotation {JSON.stringify(rotation)} <br />
                        Initialmotion {JSON.stringify(initialMotion)} <br />
                    </button>
                </div> */}
            </div>
        </div>
    );
};
