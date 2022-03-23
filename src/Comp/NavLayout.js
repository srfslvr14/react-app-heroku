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
            <nav class="teal accent-4" Style="height: 100px; line-height: 100px; font-size:150%;">
                <div class="nav-wrapper">
                    <div class="container">
                        <a href="/" class="brand-logo" 
                            // Style="font-weight: bold;"
                            > 
                            <img src={home} alt="home" Style="width:18%"/>
                            SRF
                        </a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down" Style="margin-right:-4%;">
                            <li><a href="/about" Style="font-size:100%;">About</a></li>
                            <li><a href="/projects" Style="font-size:100%;">Projects</a></li>
                            <li><a href={ResumePage} Style="font-size:100%;">Resume</a></li>
                            <li><a href="/Contact" Style="font-size:100%;">Contact</a></li>
                        </ul>

                        <a data-target="slide-out" class="sidenav-trigger left show-on-med-and-down" 
                            Style="line-height: 100px; height: 100px; font-size:150%;">
                            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                        </a>
                        
                    </div>
                </div>
            </nav>

            <ul id="slide-out" class="sidenav" Style="width:auto">
                <ul Style="margin-top:15%">
                    <li><a href="/" Style="color:teal">
                        <i class="material-icons" Style="color:teal">home</i> Home
                    </a></li>
                    <li><a href="/about" Style="color:teal">
                        <i class="material-icons" Style="color:teal">account_box</i> About
                    </a></li>
                    <li><a href="/projects" Style="color:teal">
                        <i class="material-icons" Style="color:teal">local_florist</i> Projects
                    </a></li>
                    <li><a href={ResumePage} Style="color:teal">
                        <i class="material-icons" Style="color:teal">description</i> Resume
                    </a></li>
                    <li><a href="/Contact" Style="color:teal">
                        <i class="material-icons" Style="color:teal">perm_phone_msg</i> Contact
                    </a></li>
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
