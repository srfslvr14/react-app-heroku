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
            <nav class="teal accent-4">
                <div class="nav-wrapper">
                    <div class="container">
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
                </div>
            </nav>
            <div class="container" Style="margin-top:2%;">
                <Controller/>
            </div>
        </Router>
    );
  }
} 


export default NavLayout;
