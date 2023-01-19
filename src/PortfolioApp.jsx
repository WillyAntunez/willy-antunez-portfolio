import React from 'react';
import './PortfolioApp.scss';

import { Start,  NavBar,AboutMe, Skills } from './components';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function PortfolioApp() {
    return (
        <div className="container--main">
            <NavBar />
            <Start />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default PortfolioApp;
