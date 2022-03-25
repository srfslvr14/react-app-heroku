import React from "react";
import M from 'materialize-css';
import pcss from './styles/project.css'

import Cse160asg0 from './projects/cse160asg0.js'
import Cse160asg1 from './projects/cse160asg1.js'
import Cse160asg2 from './projects/cse160asg2.js'
import Cse160asg3 from './projects/cse160asg3.js'
import Cse160asg4 from './projects/cse160asg4.js'
import Cse160asg5 from './projects/cse160asg5.js'

export default class ProjectPage extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  
  render(){
    return (
      <div>
        <div class="container">
          <div class="gCards center">
            <Cse160asg0/>
            <Cse160asg1/>
            <Cse160asg2/>
            <Cse160asg3/>
            <Cse160asg4/>
            <Cse160asg5/>
            <div class="card">TWO</div>
            <div class="card">THREE</div>
            <div class="card">FOUR</div>
            <div class="card">FIVE</div>
            <div class="card">SIX</div>
            <div class="card">SEVEN</div>
            <div class="card">EIGHT</div>
            <div class="card">NINE</div>
            <div class="card">TEN</div>
            <div class="card">ELEVEN</div>
            <div class="card">TWELVE</div>
          </div>
        </div>

        
        {/* <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
        
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div> */}


        {/* CSE 160 asg0 - https://people.ucsc.edu/~srfulgha/lab0/asg0.html
        CSE 160 asg1 - https://people.ucsc.edu/~srfulgha/lab1/asg1.html
        CSE 160 asg2 - https://people.ucsc.edu/~srfulgha/lab2/asg2.html
        CSE 160 asg3 - https://people.ucsc.edu/~srfulgha/lab3/asg3.html
        CSE 160 asg4 - https://people.ucsc.edu/~srfulgha/lab4/asg4.html
        CSE 160 asg5 - https://people.ucsc.edu/~srfulgha/lab5/lab5.html

        Groupify - https://shams.pythonanywhere.com/groupify/index
        Pawfect Match - https://github.com/srfslvr14/PawfectMatch
        LML - site to be deployed 
        This Site! - https://spencerfulgham.herokuapp.com/

        Bigby’s Bot - https://github.com/srfslvr14/cruzhacks21
        Check In Chicken - https://chrome.google.com/webstore/detail/check-in-chicken/igpoimkggagpelmpjlojcnjddehkoamp?hl=en&authuser=1

        Logos - show png

        Incoming Games! */}

      </div>
    );
  }
}

/* <div dangerouslySetInnerHTML={lab5} /> */