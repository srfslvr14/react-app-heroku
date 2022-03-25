import React from "react";
import M from 'materialize-css'
import cse160asg0 from "../../assests/cse160asg1.png"

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
                Shape Coloring Book 
                <i class="material-icons white right">more_vert</i>
            </span>
            <p><a target="_blank" href="https://people.ucsc.edu/~srfulgha/lab1/asg1.html">
              Check it out!
            </a></p>
        </div>

        <div class="card-reveal">
          <i class=" card-title material-icons right">close</i>
          <br></br>
          <br></br>
          <span class="card-title grey-text text-darken-4">
            Shape Coloring Book
            </span>
            <p>
              A graphic project which allows users to draw on a canvas 
              using brushes of different shapes, sizes, and colors. Painting
              is used by mouse input. 
 
            </p>
            <p><a target="_blank" href="https://people.ucsc.edu/~srfulgha/lab1/asg1.html">
              Check it out!
            </a></p>
        </div>
      </div>
    );
  }
}

