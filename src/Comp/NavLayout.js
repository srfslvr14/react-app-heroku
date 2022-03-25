import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Particles from "react-tsparticles";

import M from 'materialize-css'
import './styles/Navbar.css'

import Controller from './Controller.js';

import ResumePage from "../assests/SpencerFulghamResume.pdf";
import home from './home-5-128.png'
import hikePhotoBn from '../assests/castlerock.JPG'

class NavLayout extends React.Component{

    componentDidMount() {
        M.AutoInit();
    }

    render(){
        return(
            <Router> {/*grey lighten-5*/}
                <nav class="indigo lighten-1 z-depth-3 bar">
                    <div class="nav-wrapper">
                        <div class="container">
                            <a href="/" class="brand-logo center hide-on-large-only"> <img src={home} alt="home" Style="width:18%;"/> SRF</a>
                            <a href="/" class="brand-logo left hide-on-med-and-down"> <img src={home} alt="home" Style="width:18%;"/> SRF</a>
                            <ul id="nav-mobile" class="right hide-on-med-and-down" Style="margin-right:-4%;">
                                <li><a class="navlink" href="/about">About</a></li>
                                <li><a href="/experience" class="navlink">Experience</a></li>
                                <li><a href="/projects" class="navlink">Projects</a></li>
                                <li><a href={ResumePage} target="_blank" class="navlink">Resume</a></li>
                                <li><a href="/Contact" class="navlink">Contact</a></li>
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
                        <li><a href="/" Style="color:#5c6cc0">
                            <i class="material-icons" Style="color:#5c6cc0">home</i> Home
                        </a></li>
                        <li><a href="/about" Style="color:#5c6cc0">
                            <i class="material-icons" Style="color:#5c6cc0">account_box</i> About
                        </a></li>
                        <li><a href="/experience" Style="color:#5c6cc0">
                            <i class="material-icons" Style="color:#5c6cc0">poll</i> Experience
                        </a></li>
                        <li><a href="/projects" Style="color:#5c6cc0">
                            <i class="material-icons" Style="color:#5c6cc0">local_florist</i> Projects
                        </a></li>
                        <li><a href={ResumePage} target="_blank" Style="color:#5c6cc0">
                            <i class="material-icons" Style="color:#5c6cc0">description</i> Resume
                        </a></li>
                        <li><a href="/Contact" Style="color:#5c6cc0">
                            <i class="material-icons" Style="color:#5c6cc0">perm_phone_msg</i> Contact
                        </a></li>
                    </ul>
                </ul>

                <Route path="/about">
                    <img width="100%" src={hikePhotoBn}/>
                </Route>
                
                <div class="container" Style="margin-top:2%;">   
                    <Controller/>
                </div>
            </Router>
        );
    }
} 


export default NavLayout;
