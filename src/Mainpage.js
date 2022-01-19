import React from 'react';
import './Mainpage.css';
import {IoIosMail} from 'react-icons/io'
import {IoLogoLinkedin} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'
import {FaEthereum} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {GiCircle} from 'react-icons/gi'

function Mainpage() {
    return (

        <div class="cover-container d-flex w-100 h-100 mx-auto flex-column" id = 'borderContainer'>  
        <header class="mb-auto w-100" id = 'navbar'  >
            <div>

            <nav class="nav nav-masthead justify-content-center float-md-end" style ={{fontSize: "18px"}}>
                <a class="nav-link links" aria-current="page" href="#projectScrollTag"> Projects </a>
                <a class="nav-link links"  href="#"> Experience </a>
            
            </nav>
            </div>
        </header>

        <main class="px-3" id = "main_container">
            <h1 class = 'jumbotron' > Hi, I'm Mike Antoniades  </h1>
            <h3 class = 'jumbotron2'> Developer • Student • Entrepreneur   </h3>

            <ul id = "listItems"> 
            <a href = "https://www.linkedin.com/in/michael-antoniades" target = "blank" class = "links" >    
                <li id = "gmail" style={{ display: 'inline-block', position: 'relative' }}> 
                    <GiCircle size = {70} textAnchor="middle" alignmentBaseline="middle" />
                    <IoIosMail size = {40}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        style={{ position: 'absolute', left: '.95em', bottom: '.95em' }}   
                    />
                </li>
            </a>

            <a href = "https://www.linkedin.com/in/michael-antoniades" target = "blank" class = "links" >
                <li id = "linkedin" style={{ display: 'inline-block', position: 'relative' }}> 
                    <GiCircle size = {70} textAnchor="middle" alignmentBaseline="middle" />
                    <IoLogoLinkedin size = {40}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        style={{ color: '#0072b1', position: 'absolute', left: '.95em', bottom: '.95em' }}   
                    />
                </li>
            </a>
                <br></br>

            <a href = "https://github.com/bobboy65" class = "links" target = "blank" >
                <li id = "github" style={{ display: 'inline-block', position: 'relative' }}> 
                    <GiCircle size = {70} textAnchor="middle" alignmentBaseline="middle" />
                    <BsGithub size = {40}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        style={{ position: 'absolute', left: '.95em', bottom: '.95em' }}   
                    />
                </li>
            </a>

                <br></br>

            <a href = "https://etherscan.io/address/0x3caea97e7ce1d9565ac4cccd269b7ce09c5a3552" target = "blank" class = "links" >
                <li id = "ethWallet" style={{ display: 'inline-block', position: 'relative' }}> 
                    <GiCircle size = {70} textAnchor="middle" alignmentBaseline="middle" />
                    <FaEthereum size = {40}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        style={{ color: '#9e35e0', position: 'absolute', left: '.95em', bottom: '.95em' }}   
                    />
                </li>
            </a>    

            <a href = "https://www.linkedin.com/in/michael-antoniades" target = "blank" class = "links" >
                <li id = "twitter" style={{ display: 'inline-block', position: 'relative' }}> 
                    <GiCircle size = {70} textAnchor="middle" alignmentBaseline="middle" />
                    <BsTwitter size = {40}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        style={{ color: '#1DA1F2', position: 'absolute', left: '.95em', bottom: '.95em' }}   
                    />
                </li>
            </a>    

            </ul>

        </main>

        <footer>
            <div class = "pageCushion"> 
                <a href="#projectScrollTag" > <div id = "down_arrow"> </div> </a>
                <div id = "copyright" >  © 2021 Michael Antoniades. Content available under </div> 
                <a href="https://creativecommons.org/licenses/by-nc/3.0/us/" id = "ccLink"> CC BY-NC 3.0 license</a>
                <a href="#projectScrollTag" > <div id = "down_arrow"> </div> </a>
            </div>
        </footer>
        </div>
    );
}

export default Mainpage;