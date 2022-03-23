import React from "react";
import behind from '../assests/particlesjs-config.json'
import M from 'materialize-css'


export default class HomePage extends React.Component{

  get_date(){
    let today = new Date().getDay();
    let todayAsString = ''
    switch (today){
      case 0: todayAsString = 'Sunday'; break;
      case 1: todayAsString = 'Monday'; break;
      case 2: todayAsString = 'Tuesday'; break;
      case 3: todayAsString = 'Wednesday'; break;
      case 4: todayAsString = 'Thursday'; break;
      case 5: todayAsString = 'Friday'; break;
      case 6: todayAsString = 'Saturday'; break;
    }
    return todayAsString;
  }

  render(){  
    return (
      <div>
        <div class="day">I hope you’re having a good <span id="day">{this.get_date()}</span>.</div>
      </div>
    );
  }
}