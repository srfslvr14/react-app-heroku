import React from "react";
import M from 'materialize-css'

export default class ProjectPage extends React.Component {
  componentDidMount() {
      M.AutoInit();
  }
  render(){
    return (
      <div>
       
       <div class="container">
        <h2 class="header"> Responsive Image Gallary</h2>
        <div class="row">
          <div class="col s12 l4 m6">
            <div class="card small responsive-img" Style="background-color:#F00 ">1</div>
          </div>
          <div class="col l4 m6 s12">
            <div class="card small responsive-img" Style="background-color:#F00 ">2</div>
          </div>
          <div class="col l4 m6 s12">
            <div class="card small responsive-img" Style="background-color:#F00 ">3</div>
          </div>
          <div class="col l4 m6 s12">
            <div class="card small responsive-img" Style="background-color:#F00 ">4</div>
          </div>
          <div class="col l4 m6 s12">
            <div class="card small responsive-img" Style="background-color:#F00 ">5</div>
          </div>
          <div class="col l4 m6 s12">
            <div class="card small responsive-img" Style="background-color:#F00 ">6</div>
          </div>
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