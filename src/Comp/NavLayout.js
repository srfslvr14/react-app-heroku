import React from 'react';
import Controller from './Controller.js';
import ResumePage from "../assests/SpencerFulghamResume.pdf";
import Particles from "react-tsparticles";
import bg from "../assests/bg.jpg"
import home from './home-5-128.png'
import M from 'materialize-css'

import {
    BrowserRouter as Router, Link
  } from "react-router-dom";

class NavLayout extends React.Component{

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems);
        });
    }
    

    particlesInit = (main) => {
        console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };
    particlesLoaded = (container) => {
        console.log(container);
    };
  // real code here


  render(){
    return(
        <Router>
            <nav class="teal accent-4" >
                <div class="nav-wrapper">
                    <div class="container">
                        <a href="/" class="brand-logo" 
                            // Style="font-weight: bold;"
                            > 
                            <img src={home} alt="home" Style="width:18% "/>
                            SRF
                        </a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="/about">About</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href={ResumePage}>Resume</a></li>
                            <li><a href="/Contact">Contact</a></li>
                        </ul>
                        <a data-target="slide-out" class="sidenav-trigger left show-on-med-and-down">
                            <i class="material-icons">menu</i>
                        </a>
                        
                    </div>
                </div>
            </nav>
            <ul id="slide-out" class="sidenav teal accent-4">
                <ul>
                    <li><a href="/">
                        <img src={home} alt="home" Style="width:18% "/>
                    </a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href={ResumePage}>Resume</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </ul>
            
            <div class="container" Style="margin-top:2%;">
                
                <Controller/>
                {/* <Particles
                    id="tsparticles"
                    // init={particlesInit}
                    // loaded={particlesLoaded}
                    options={{
                    background: {
                        // color: "#000"
                    },
                    // fullScreen: {
                    //     enable: false
                    // },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                        },
                        modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        },
                    },
                    particles: {
                        color: {
                        value: "#ffffff",
                        },
                        links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                        },
                        collisions: {
                        enable: false,
                        },
                        move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 3,
                        straight: false,
                        },
                        number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 100,
                        },
                        opacity: {
                        value: 0.2,
                        },
                        shape: {
                        type: "circle",
                        },
                        size: {
                        random: true,
                        value: 5,
                        },
                    },
                    detectRetina: true,
                    }}
                /> */}
            </div>
        </Router>

    );
  }
} 


export default NavLayout;
