import React from 'react';
import Controller from './Controller.js';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class NavLayout extends React.Component{

  // real code here

  render(){
    return(
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
    );
  }
} 


export default NavLayout;
