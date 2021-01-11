import React from 'react';
import Navbar from '../navbarComponent/navbar';
import Home from '../homeComponent/home';
import About from '../aboutComponent/about';
import Experience from '../experienceComponent/experience';
import Projects from '../projectsComponent/projects';
import Contact from '../contactComponent/contact';
import './wholePage.css';


function WholePage (){
    return (
        <div className = 'wholePageContainer'>
            <Navbar/>
            <Home/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
        </div>
    )


}

export default WholePage