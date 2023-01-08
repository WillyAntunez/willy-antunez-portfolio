import React from 'react';
import './PortfolioApp.scss';

import { Start,  NavBar,AboutMe, Skills } from './components';
import { Projects } from './components/Projects';

function PortfolioApp() {
    return (
        <div className="container--main">
            <NavBar />
            <Start />
            <AboutMe />
            <Skills />
            <Projects />
        </div>
    );
}

export default PortfolioApp;
