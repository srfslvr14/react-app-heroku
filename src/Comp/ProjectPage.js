import React from "react";
import M from 'materialize-css';
import pcss from './styles/project.css'

import Cse160asg0 from './projects/cse160asg0.js'
import Cse160asg1 from './projects/cse160asg1.js'
import Cse160asg2 from './projects/cse160asg2.js'
import Cse160asg3 from './projects/cse160asg3.js'
import Cse160asg4 from './projects/cse160asg4.js'
import Cse160asg5 from './projects/cse160asg5.js'
import Groupify from './projects/groupify.js'
import Pawfect from './projects/pawfect.js'
import LML from './projects/LML.js'
import Bigby from './projects/bigbys.js'
import Chicken from './projects/chicken.js'

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

            <Groupify/>
            <Pawfect/>
            <LML/>

            <Chicken/>
            <Bigby/>

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


        {/* 
        LML - site to be deployed 

        Logos - show png

        Incoming Games! */}

      </div>
    );
  }
}
