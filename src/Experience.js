import React from 'react';
import { BsTranslate } from 'react-icons/bs';
import './Experience.scss';



function Experience() {

    return(
      
<div class = " experienceContainer dark" style = {{}}>   
  <header id = "experienceScrollTag" style = {{height: "45px"}}>
            <nav class="nav nav-masthead float-md-end justify-content-left light" style ={{background: "#110f16" , fontSize: "18px", fontColor: "white" , color: "gray"}}>
                <a class="nav-link linksWhite"  href= "#" aria-current="page"> Home </a>
                <a class="nav-link linksWhite"  href="#projectScrollTag"> Projects </a>
            </nav>
  </header>
  <div class="skills dark" style = {{width: "85%" ,  marginLeft: "5%" }}>
        <head class = "dark">
        <link href = "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.14/angular.min.js" />
        <link href = "Experience.scss" />
        </head>
      <ul class="lines" style = {{  paddingBottom: '30px'}} >
        <li class="line l--0" >
          <span class="line__label title" id = "align" style = {{textAlign:"right"}} >
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
          <span class="line__label" style = {{ marginTop: "0px"}}>
            Seasoned
          </span>
        </li>
        <li class="line l--100">
          <span class="line__label" id = "align2" style = {{textAlign: 'left', width: "30px"}} >
            Expert
          </span>
        </li>
        </ul> 
    <div class="charts">
      <div class="chart chart--dev">
        <span class="chart__title" style = {{ textAlign: "left" , paddingLeft: "3px"}} >Development</span>
          <ul class="chart--horiz" style = {{paddingLeft: '0'}}>
            <li class="chart__bar" id = "chart__bar" style={{width: '75%'}}>
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
                React JS / JS
              </span>
            </li>
            <li class="chart__bar" style={{width: '65%'}}>
              <span class="chart__label">
                SQL
              </span>
            </li>
            <li class="chart__bar" style={{width: '55%'}}>
              <span class="chart__label">
              C / C++
              </span>
            </li>
            <li class="chart__bar" style={{width: '45%'}}>
              <span class="chart__label">
              Restful APIs
              </span>
            </li>
            <li class="chart__bar" style={{width: '45%'}}>
              <span class="chart__label">
              NodeJS / Express JS
              </span>
            </li>
            <li class="chart__bar" style={{width: '40%'}}>
              <span class="chart__label">
              AWS / Heroku / Netlify stacks
              </span>
            </li>
            <li class="chart__bar" style={{width: '30%'}}>
              <span class="chart__label">
              Linux (Ubuntu 20.04)
              </span>
            </li>
            <li class="chart__bar" style={{width: '25%'}}>
              <span class="chart__label">
              Matlab
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
      <span class="chart__title" style = {{ textAlign: "left" , paddingLeft: "3px"}}>Interests</span>
      <ul class="chart--horiz" style = {{paddingLeft: '0'}}>
      <li class="chart__bar" style={{width: '100%'}}>
        <span class="chart__label">
          Full stack development
        </span>
      </li>
      <li class="chart__bar" style={{width: '100%'}}>
        <span class="chart__label">
          Cloud/Bare Metal Applications and Industrial Automation
        </span>
      </li>
      <li class="chart__bar" style={{width: '100%' , marginBottom: '80px'}}>
        <span class="chart__label" >
          Customer/User centric design
        </span>
      </li>
    </ul>
    </div>
    </div>  
  </div>  
</div>

    );
}

export default Experience;