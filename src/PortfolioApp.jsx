import React from 'react';
import './PortfolioApp.scss';

import { Start,  NavBar,AboutMe, Skills, Projects, Contact, Footer } from './components';

function PortfolioApp() {
    return (   
        <div className="container--main">
            <NavBar />
            <Start id= 'start' />
            <AboutMe id='about' />
            <Skills id='skills' />
            <Projects id='projects' />
            <Contact id='contact' />
            <Footer />
        </div>
    );
}

export default PortfolioApp;
