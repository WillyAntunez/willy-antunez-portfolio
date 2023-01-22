import React from 'react';
import './PortfolioApp.scss';

import { Start,  NavBar,AboutMe, Skills, Projects, Contact, Footer } from './components';

function PortfolioApp() {
    return (
        <div className="container--main">
            <NavBar />
            <Start />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default PortfolioApp;
