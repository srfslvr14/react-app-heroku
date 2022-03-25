import React from "react";
import M from 'materialize-css'
import cse160asg0 from "../../assests/cse160asg3.png"

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
                    <i class="material-icons right">more_vert</i>
                </span>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>
    );
  }
}

