import React from 'react';
import './PortfolioApp.scss';

import { Start,  NavBar,AboutMe, Skills } from './components';

function PortfolioApp() {
    return (
        <div className="container--main">
            <NavBar />
            <Start />
            <AboutMe />
            <Skills />
        </div>
    );
}

export default PortfolioApp;
