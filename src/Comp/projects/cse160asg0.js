import React from "react";
import M from 'materialize-css'
import cse160asg0 from "../../assests/cse160asg0.png"

export default class AboutPage extends React.Component {

  componentDidMount() {
    M.AutoInit();
  } 

  render(){
    return ( 
        <div class="card small">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" alt="vector" src={cse160asg0} />
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                    Visual Vector Calculator 
                    <i class="material-icons white right">more_vert</i>
                </span>
                <p><a target="_blank" href="https://people.ucsc.edu/~srfulgha/lab0/asg0.html">
                  Check it out!
                </a></p>
            </div>

            <div class="card-reveal">
              <i class=" card-title material-icons right">close</i>
              <br></br>
              <br></br>
              <span class="card-title grey-text text-darken-4">
                Visual Vector Calculator
                </span>
                <p>
                  A graphic project to calculate different vector equations from user input.
                  The output of the calculator is either shown on the canvas or on the browser's
                  console.
                </p>
                <p><a target="_blank" href="https://people.ucsc.edu/~srfulgha/lab0/asg0.html">
                  Check it out!
                </a></p>
            </div>
        </div>
    );
  }
}

