import React from 'react';
import Controller from './Controller.js';

import {
    BrowserRouter as Router, Link
  } from "react-router-dom";

class NavLayout extends React.Component{

  // real code here

  render(){
    return(
        <div>

        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
            </div>
        </nav>

            <Router>
                <div>
                    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
                        <a class="navbar-brand" href="#"> SRayFulgham </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">

                                <li class="nav-item active">
                                    <a class="nav-link"> <Link to="/">Home</Link></a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/about">About</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/projects">Projects</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/resume">Resume</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"> <Link to="/contact">Contact</Link></a>
                                </li>

                            
                            </ul>
                        </div>
                    </nav>
                    <Controller/>
                </div>
            </Router>
        </div>
    );
  }
} 


export default NavLayout;
