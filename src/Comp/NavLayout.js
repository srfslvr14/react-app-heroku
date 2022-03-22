import React from 'react';
import Controller from './Controller.js';

import {
    BrowserRouter as Router, Link
  } from "react-router-dom";

class NavLayout extends React.Component{

  // real code here

  render(){
    return(
        <Router>
            <nav>
                <div class="nav-wrapper">
                <a href="/" class="brand-logo">SRF</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="/about">   About   </a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/resume">  Resume  </a></li>
                    <li><a href="/Contact"> Contact </a></li>
                    {/* <li><a href="/about">   About   </a></li> */}
                    {/* <li><a href="badges.html">Components</a></li>
                    <li class="active"><a href="collapsible.html">JavaScript</a></li> */}
                </ul>
                </div>
            </nav>
            <Controller/>
        </Router>
    );
  }
} 


export default NavLayout;
