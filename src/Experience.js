import React from 'react';
import './Experience.scss';



function Experience() {
    return(

<div class="skills">
        <head>
        <link href = "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.14/angular.min.js" />
        <link href = "Experience.scss" />
        </head>
  
  <ul class="lines" style = {{paddingBottom: '30px'}}>
    <li class="line l--0">
      <span class="line__label title">
        Skill level:
      </span>
    </li>
    <li class="line l--25">
      <span class="line__label">
        The basics
      </span>
    </li>
    <li class="line l--50">
      <span class="line__label">
        Intermediate
      </span>
    </li>
    <li class="line l--75">
      <span class="line__label" style = {{ marginTop: "100px"}}>
        Seasoned
      </span>
    </li>
    <li class="line l--100">
      <span class="line__label">
        Expert
      </span>
    </li>
  </ul>
  
  <div class="charts">
    <div class="chart chart--dev">
      <span class="chart__title" style = {{ textAlign: "left" , paddingLeft: "3px"}} >Development</span>
      <ul class="chart--horiz" style = {{paddingLeft: '0'}}>
        <li class="chart__bar" style={{width: '75%'}}>
          <span class="chart__label">
            HTML5
          </span>
        </li>
        <li class="chart__bar" style={{width: '75%'}}>
          <span class="chart__label">
          CSS3 & SCSS & CSS in JS
          </span>
        </li>
        <li class="chart__bar" style={{width: '75%'}}>
          <span class="chart__label">
            Python (Flask)
          </span>
        </li>
        <li class="chart__bar" style={{width: '75%'}}>
          <span class="chart__label">
            SQL
          </span>
        </li>
        <li class="chart__bar" style={{width: '65%'}}>
          <span class="chart__label">
            ReactJS
          </span>
        </li>
        <li class="chart__bar" style={{width: '55%'}}>
          <span class="chart__label">
            C / C++
          </span>
        </li>
        <li class="chart__bar" style={{width: '45%'}}>
          <span class="chart__label">
            JavaScript
          </span>
        </li>
        <li class="chart__bar" style={{width: '45%'}}>
          <span class="chart__label">
            NodeJS
          </span>
        </li>
        <li class="chart__bar" style={{width: '40%'}}>
          <span class="chart__label">
            Linux (Ubuntu 20.04)
          </span>
        </li>
        <li class="chart__bar" style={{width: '25%'}}>
          <span class="chart__label">
            yarn
          </span>
        </li>
        <li class="chart__bar" style={{width: '25%'}}>
          <span class="chart__label">
            jQuery
          </span>
        </li>
      </ul>
    </div>
    
    <div class="chart chart--prod">
      <span class="chart__title" style = {{ textAlign: "left" , paddingLeft: "3px"}} >Productivity</span>
      <ul class="chart--horiz" style = {{paddingLeft: '0'}}>
      <li class="chart__bar" style={{width: '50%'}}>
        <span class="chart__label">
          Git + Github
        </span>
      </li>
      <li class="chart__bar" style={{width: '75%'}}>
        <span class="chart__label">
          Microsoft Office
        </span>
      </li>
    </ul>
    </div>
    
    <div class="chart chart--design">
      <span class="chart__title" style = {{ textAlign: "left" , paddingLeft: "3px"}}>Design</span>
      <ul class="chart--horiz" style = {{paddingLeft: '0'}}>
      <li class="chart__bar" style={{width: '40%'}}>
        <span class="chart__label">
          Photoshop
        </span>
      </li>
      <li class="chart__bar" style={{width: '35%'}}>
        <span class="chart__label">
          Illustrator
        </span>
      </li>
      <li class="chart__bar" style={{width: '80%'}}>
        <span class="chart__label">
          User Experience
        </span>
      </li>
    </ul>
    </div>
  </div>
  
</div>

    );
}

export default Experience;