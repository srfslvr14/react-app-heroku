import React from "react";
import M from 'materialize-css'
import GroupifySS from "../../assests/gappy.png"

export default class AboutPage extends React.Component {

  componentDidMount() {
    M.AutoInit();
  } 

render(){
    return ( 
      <div class="card hoverable small">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" alt="vector" src={GroupifySS} />
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
                Check-In Chicken
                <i class="material-icons white right">more_vert</i>
            </span>
            <p><a target="_blank" href="https://chrome.google.com/webstore/detail/check-in-chicken/igpoimkggagpelmpjlojcnjddehkoamp?hl=en&authuser=1">
              Check it out!
            </a></p>
        </div>

        <div class="card-reveal">
          <i class=" card-title material-icons right">close</i>
          <br></br>
          <br></br>
          <span class="card-title grey-text text-darken-4">
            Check-In Chicken
            </span>
            <p>
              Check-In Chicken is a Pomodoro study assisent Chrome Extenstion with a heavy
              focus on mental health and healthy studying habits.
            </p>
            <p><a target="_blank" href="https://chrome.google.com/webstore/detail/check-in-chicken/igpoimkggagpelmpjlojcnjddehkoamp?hl=en&authuser=1">
              Check it out!
            </a></p>
        </div>
      </div>
    );
  }
}

