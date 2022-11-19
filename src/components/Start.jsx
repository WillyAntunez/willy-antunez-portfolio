import React from 'react';

import './start.scss';

import arrowUpImg from '../assets/svg/arrow-up.svg';
import developerImg from '../assets/img/developer.png';

export const Start = () => {
    return (
        <div className="start">
            <div className="start__container">
                <div className="start__frame"></div>
                <div className="start__elements">
                    <div className="start__text start__text--title">
                        <h1>
                            Willy <br /> Antunez
                        </h1>
                    </div>
                    <div className="start__text start__text--subtitle">
                        <h2>Web developer</h2>
                    </div>
                    <div className="start__technologies">
                        <div className="start__text start__text--javascript">
                            JS
                        </div>
                        <div className="start__text start__text--html">
                            {'<HTML>'}
                        </div>
                        <div className="start__text start__text--css">CSS</div>
                        <div className="start__text start__text--vue">
                            Vue.js
                        </div>
                        <div className="start__text start__text--git">
                            Git/Github
                        </div>
                        <div className="start__text start__text--react">
                            React.js
                        </div>
                        <div className="start__text start__text--sass">
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
        </div>
    );
};
