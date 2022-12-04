import React, { useEffect, useState } from 'react';

import { IconBtn } from './IconBtn';

import { useMotion } from '../hooks/useMotion';
import { useUnlock } from '../hooks/useUnlock';

import './start.scss';

import arrowUpImg from '../assets/svg/arrow-up.svg';
import developerImg from '../assets/img/developer.png';
import lockIcon from '../assets/img/lock-icon.webp';
import lockSound from '../assets/audio/lock-sound.mp3';

export const Start = () => {
    const [showLockBtn, setShowLockBtn] = useState(true);

    const { enableMotion, showPermBtn, motion1, motion2, motion3 } = useMotion();
    const { unLockEvents, elementMoving, transitionSpeed, lock } = useUnlock({
        maxWidth: 769,
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowLockBtn(false);
            } else {
                setShowLockBtn(true);
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLock = () => {
        let audio = new Audio(lockSound);
        audio.play();
        lock();
    };

    return (
        <>
            <div
                className={`container container--start `}
                onTouchMove={unLockEvents.handleTouchMove}
                onTouchStart={unLockEvents.handleTouchStart}
                onTouchEnd={unLockEvents.handleTouchEnd}
                style={{
                    transform: `translateY(${elementMoving}%)`,
                    opacity: `${elementMoving + 100}%`,
                    transition: `all  ${transitionSpeed}`,
                }}
            >
                <div className="start">
                    <div className="start__frame" style={motion3}></div>

                    <div className="start__items" style={{ motion1 }}>
                        <div className="start__name text--blueback" style={motion2}>
                            <h1>
                                Willy <br /> Antunez
                            </h1>
                        </div>

                        <div className="start__title text--orangeback" style={motion2}>
                            <h2>Web developer</h2>
                        </div>

                        <div className="start__technologies">
                            <div className="start__item start__item--javascript" style={motion1}>
                                JS
                            </div>
                            <div className="start__item start__item--html" style={motion1}>
                                {'<HTML>'}
                            </div>
                            <div className="start__item start__item--css" style={motion1}>
                                CSS
                            </div>
                            <div className="start__item start__item--vue" style={motion1}>
                                Vue.js
                            </div>
                            <div className="start__item start__item--git" style={motion1}>
                                Git/Github
                            </div>
                            <div className="start__item start__item--react" style={motion1}>
                                React.js
                            </div>
                            <div className="start__item start__item--sass" style={motion1}>
                                SASS
                            </div>
                        </div>
                    </div>

                    <div className="start__bottom">
                        <p className="start__text start__text--bold">Te doy la bienvenida</p>
                        <p className="start__text">Desliza hacia arriba</p>
                        <img
                            className="start__arrow"
                            src={arrowUpImg}
                            alt="Flecha apuntando hacia arriba"
                        />
                    </div>

                    <img src={developerImg} alt="developer" className="start__image" />
                </div>

                {showPermBtn && (
                    <div className={`floatingBtn ${showPermBtn ? '' : 'floatingBtn--hidden'}`}>
                        <button onClick={enableMotion}>Activa la magia</button>
                    </div>
                )}
            </div>

            <IconBtn
                onClick={handleLock}
                icon={lockIcon}
                className={`lockbtn ${!showLockBtn ? 'lockbtn--hidden' : ''}`}
            />
        </>
    );
};
