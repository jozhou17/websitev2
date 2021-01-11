import React, { Component } from 'react';
import './about.css'
import proPic from './proPic.jpeg';


function About(){

    return (
            <div className = "aboutContainer" id = 'aboutMe' >
                <header className = 'aboutTitleContainer'>
                    <h3 className = 'aboutTitle'>About Me</h3>
                </header>
                <div className = "aboutDescription">
                    <section className = 'paraContainer'>
                        <p className = 'abouttxt'>
                            Hey, welcome to my page! I'm Jonathan and I'm a junior CS major at UMass Amherst.
                        </p>
                        <p className = 'abouttxt'>
                            Growing up, I loved to create things and problem-solve. It always brought me a special type
                            of satisfaction whenever I was able to build something from scratch and this still holds true for me today.
                            Although the websites and applications I make now aren't as tangible, I get that same type of satisfaction whenever I'm
                            coding up a new project.        
                        </p>
                        <p className = 'abouttxt'>
                            I'm currently interested in front-end web development, but I'm always willing to learn
                            back-end technologies as well as I eventually want to become a full stack developer in the future. 
                        </p>
                        <p className = 'abouttxt'>
                            During my free time I enjoy going to the gym, playing table tennis, and playing an autochess 
                            game called Teamfight Tactics.
                        </p>
                        <span className = 'buttonLinks'>
                            <a class = "button" href = "https://www.linkedin.com/in/jonathan-zhou-635241186/" target = "blank">
                                <i class="fab fa-linkedin btcolor"></i>
                            </a>
                            <a class = "button" href = "https://umass.joinhandshake.com/users/11786891" target = "blank">
                                <i class="fas fa-handshake btcolor"></i>
                            </a>
                            <a class = "button" href = "https://github.com/jozhou17" target = "blank">
                                <i class="fab fa-github btcolor"></i>
                            </a>
                        </span>
                    </section>
                    <section className = "proPicContainer">
                        <img src = {proPic} alt = "propic" className = "proPic"></img>
                    </section> 
                </div>
                <section className = "proPicContainer2">
                        <img src = {proPic} alt = "propic" className = "proPic"></img>
                </section> 
            </div>

    )

}

export default About