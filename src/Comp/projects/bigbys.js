import React from "react";
import M from 'materialize-css'
import BBOE from "../../assests/bigby.png"

export default class AboutPage extends React.Component {

  componentDidMount() {
    M.AutoInit();
  } 

  render(){
    return ( 
        <div class="card hoverable small">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" alt="vector" src={BBOE} />
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                    Bigby's Bot of Everything
                    <i class="material-icons white right">more_vert</i>
                </span>
                <p><a target="_blank" href="https://github.com/srfslvr14/cruzhacks21">
                  Check it out!
                </a></p>
            </div>

            <div class="card-reveal">
              <i class=" card-title material-icons right">close</i>
              <br></br>
              <br></br>
              <span class="card-title grey-text text-darken-4">
                Bigby's Bot of Everything
                </span>
                <p>
                  Bigby's Bot is a responsive chat-bot developed for use on 
                  Discord to improve player experience for online games of 
                  Dungeons and Dragons.
                </p>
                <p><a target="_blank" href="https://github.com/srfslvr14/cruzhacks21y">
                  Check it out!
                </a></p>
            </div>
        </div>
    );
  }
}

