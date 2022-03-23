import React from 'react';
import Controller from './Controller.js';
import ResumePage from "../assests/SpencerFulghamResume.pdf";
import Particles from "react-tsparticles";
import bg from "../assests/bg.jpg"

import {
    BrowserRouter as Router, Link
  } from "react-router-dom";

class NavLayout extends React.Component{

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
            <nav class="teal accent-4">
                <div class="nav-wrapper">
                    <div class="container">
                        <a href="/" class="brand-logo"> 
                            <img src='home-5-128.png' alt="home"/>
                            {/* <img src="https://i.guim.co.uk/img/media/adb07692c230ca00b2a3867d42e30f3fcd7e4a61/193_388_7132_4281/master/7132.jpg?width=1200&quality=85&auto=format&fit=max&s=d4cdbdf58e5ac51973a0bf7f0a7f5f3d" alt="wave"></img> */}
                            {/* <img src="https://www.pikpng.com/pngl/m/457-4574987_white-house-icon-png-clipart.png" alt="White House Icon Png Clipart@pikpng.com"></img> */}
                            SRF
                        </a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="/about">   About   </a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href={ResumePage}> Resume  </a></li>
                            <li><a href="/Contact"> Contact </a></li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
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
