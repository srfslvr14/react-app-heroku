import React from "react";
import tljs from '../vertical-timeline-master/assets/js/main'
import TimnelineStyle from '../vertical-timeline-master/assets/css/timelineStyle.css'
export default function AboutPage() {
  return ( 
    <div>
      {/* <header class="cd-main-header text-center flex flex-column flex-center"> </header> */}

        <div class="container max-width-lg cd-timeline__container">
          <div class="cd-timeline__block">
            <div class="cd-timeline__img cd-timeline__img teal accent-1">
              Grad.
            </div> 
            <div class="cd-timeline__content text-component">
              <h2>Title of section 1</h2>
              <p class="color-contrast-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.

              </p>

              <div class="flex justify-between items-center">
                <span class="cd-timeline__date">2018</span>
                <a href="#0" class="btn btn--subtle">Read more</a>
              </div>
            </div>
          </div> 
          

          <div class="cd-timeline__block">
            <div class="cd-timeline__img cd-timeline__img--movie">
              N
            </div> 
            <div class="cd-timeline__content text-component">
              <h2>Final Section</h2>
              <p class="color-contrast-medium">This is the content of the last section</p>

              <div class="flex justify-between items-center">
                <span class="cd-timeline__date">2022</span>
              </div>
            </div> 
          </div> 
          
        </div>
    </div>
  );
}

