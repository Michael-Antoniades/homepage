import React from 'react';
import './portfolio.scss';
import $ from 'jquery';

function Portfolio() {
	
	function refreshAnimation() {
        $('#chart__bar').load(window.location.href + "#chart__bar" );
    }
	
	return(
        <div>
            <head>
                    <link href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
                    <link href = "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
                    <link href = "portfolio.scss" />
            </head>
            <body style = {{marginTop: '0', marginBottom: '0'}}>

            <header class = "dark" id = "projectScrollTag" style = {{height: "40px" }}>
            <nav class="nav nav-masthead justify-content-center float-md-end" style ={{fontSize: "18px", fontColor: "white"}}>
                <a class="nav-link linksWhite" href= "#"  aria-current="page"> Home </a>
                <a class="nav-link linksWhite"  href="#experienceScrollTag" onClick = {refreshAnimation}> Experience </a>
            
            </nav>
            </header>

            <main class = "dark" style = {{paddingTop: '0px', paddingBottom: '40px'}}>

            <section id = "wrapper" class=" text-center container wrapper" id = "wrapper"  style = {{paddingTop: 'none', paddingBottom: 'none'}}>
            {/* <section class="dark"> */}

            <section class="dark">
	    <div class="container" style = {{paddingTop: "0"}}>
		<h1 class="h1 text-center" id="pageHeaderTitle" style ={{marginTop: "0" , marginBottom: "40px" , color: 'white'}}>Projects</h1>

        {/* Next Day Beats Card */}
		<article class="postcard dark blue">
			<a class="postcard__img_link" href="https://www.nextdaybeats.com" target = "blank">
				<img class="postcard__img" src="https://www.bangkokproductions.com/wp-content/uploads/2018/10/music-mixer-mastering.jpg" alt="Image Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title blue"><a href="https://www.nextdaybeats.com" target = "blank">NextDayBeats.com</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>August 18th, 2021
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Ongoing project and passion of mine.  One of my hobbies is making hip-hop music and I've been doing it for roughly 3 years.  For me, was an excellent starter computer science project while also learning CS fundamentals in Harvard's OpenCourseWare CS50 course. I became familiar with React, HTML and CSS but most importantly how JS components and React hooks work. </div>
				<ul class="postcard__tagbox">
                    <a href = "https://reactjs.org/docs/getting-started.html" target = "blank" class = "links" >
                    <li class="tag__item"><i class="fas fa-tag mr-2"></i>React </li>
                    </a>
					<a href = "https://www.w3schools.com/js/" target = "blank" class = "links" >
                    <li class="tag__item"><i class="fas fa-clock mr-2"></i>Js</li>
                    </a>
                    <a href = "https://www.w3schools.com/css/" target = "blank" class = "links" >
                    <li class="tag__item"><i class="fas fa-clock mr-2"></i>Css</li>
                    </a>
                    <a href = "https://www.w3schools.com/html/" target = "blank" class = "links" >
                    <li class="tag__item"><i class="fas fa-clock mr-2"></i>Html</li>
                    </a>
                    <a href = "https://github.com/bobboy65/Beat-Website" target = "blank" class = "links" >
                    <li class="tag__item"><i class="fas fa-clock mr-2"></i>Github</li>
                    </a>
					{/* <li class="tag__item play blue">
						<a href="#"><i class="fas fa-play mr-2"></i>Html + Css</a>
					</li> */}
				</ul>
			</div>
		</article>

        {/* Finance App Card */}
		<article class="postcard dark red">
			<a class="postcard__img_link" href="https://www.youtube.com/watch?v=duOU3CmZZ20" target = "blank">
				<img class="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" />	
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title red"><a href="https://www.youtube.com/watch?v=duOU3CmZZ20" target = "blank"> Finance Application </a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i> November 30th, 2021
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Another project that I may add to in the future (with a few more features could file taxes with it!), based off of Pset9 from CS50 - CS50 provided a Flask Html skeleton that needed built around.  Full stack project with Flask and SQLite3.  CS50 has an example accessible template <a id = "financeLink" href = "https://finance.cs50.net/login" target = "blank">here</a> 
                <> </>otherwise, <a id = "financeLink" href = "https://www.youtube.com/watch?v=duOU3CmZZ20" target = "blank">here</a> is a youtube video of me demonstrating.  </div>
				<ul class="postcard__tagbox">
                <a href = "https://flask.palletsprojects.com/en/2.0.x/" target = "blank" class = "links" >
                    <li class="tag__item"><i class="fas fa-tag mr-2"></i>Flask </li>
                    </a>
					<a href = "https://flask-sqlalchemy.palletsprojects.com/en/2.x/" target = "blank" class = "links" >
                    <li class="tag__item"><i class="fas fa-clock mr-2"></i>CS50.SQL / SQLAlchemy </li>
                    </a>
                    <a href = "https://www.w3schools.com/css/" target = "blank" class = "links" >
                    <li class="tag__item"><i class="fas fa-clock mr-2"></i>Css</li>
                    </a>
                    <a href = "https://www.w3schools.com/html/" target = "blank" class = "links" >
                    <li class="tag__item"><i class="fas fa-clock mr-2"></i>Html</li>
                    </a>
                    <a href = "https://github.com/bobboy65/Finance-Application/tree/master" target = "blank" class = "links" >
                    <li class="tag__item"><i class="fas fa-clock mr-2"></i>Github</li>
                    </a>
				</ul>
			</div>
		</article>

        {/* CS50 Course Completion */}
		<article class="postcard dark green">
			<a class="postcard__img_link" href="https://cs50.harvard.edu/x/2021/" target = "blank">
				<img class="postcard__img" src="https://www.classcentral.com/report/wp-content/uploads/2020/01/cs50-sanders-theater-1024x695.jpg" alt="Image Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title green"><a href="https://cs50.harvard.edu/x/2021/" target = "blank">CS50 OpenCourseWare Course Completion </a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>December 15th, 2021
					</time>
				</div>
				<div class="postcard__bar"></div>
                <div class="postcard__preview-txt"> Course Description: This course teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web programming. Languages include C, Python, and SQL plus HTML, CSS, and JavaScript. Problem sets inspired by the arts, humanities, social sciences, and sciences. </div>
				<ul class="postcard__tagbox">
                <a href = "https://cs50.harvard.edu/x/2021/" target = "blank" class = "links" >
                    <li class="tag__item"><i class="fas fa-tag mr-2"></i> Course Website </li>
                    </a>
                    <a href = "https://github.com/bobboy65/CS50-Problem-Sets" target = "blank" class = "links" >
                    <li class="tag__item"><i class="fas fa-clock mr-2"></i>Assignments (Github)</li>
                    </a>
				</ul>
			</div>
		</article>

        {/* Ethereum Miner */}
		<article class="postcard dark purple">
			<a class="postcard__img_link" href="" target = "blank">
				<img class="postcard__img" src="https://www.enercom.ag/wp-content/uploads/2019/10/ethereum-blockchain.jpg" alt="Image Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title purple"><a href="https://cs50.harvard.edu/x/2021/" target = "blank"> Linux Ubuntu </a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>June 1st, 2021
					</time>
				</div>
				<div class="postcard__bar"></div>
                <div class="postcard__preview-txt"> Cool project during pandemic, built a multi graphics card computer and installed an Ubuntu 20.04 environment to mine Ethereum.  Through it I learned valuable skills programming within a Linux environment - and earned some crypto.  </div>
				<ul class="postcard__tagbox">
                <a href = "https://ubuntu.com/download/desktop" target = "blank" class = "links" >
                    <li class="tag__item"><i class="fas fa-tag mr-2"></i> Ubuntu </li>
                    </a>
                    <a href = "https://miscircuitos.com/difference-between-bare-metal-vs-embedded-linux/" target = "blank" class = "links" >
                    <li class="tag__item"><i class="fas fa-clock mr-2"></i>Linux Article</li>
                    </a>
				</ul>
			</div>
		</article>

        {/* Ohio State Coursework */}
		{/* <article class="postcard dark green">
			<a class="postcard__img_link" href="https://cs50.harvard.edu/x/2021/" target = "blank">
				<img class="postcard__img" src="https://www.classcentral.com/report/wp-content/uploads/2020/01/cs50-sanders-theater-1024x695.jpg" alt="Image Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title green"><a href="https://cs50.harvard.edu/x/2021/" target = "blank">CS50 OpenCourseWare Course Completion </a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>December 15th, 2021
					</time>
				</div>
				<div class="postcard__bar"></div>
                <div class="postcard__preview-txt"> Course Description: This course teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web programming. Languages include C, Python, and SQL plus HTML, CSS, and JavaScript. Problem sets inspired by the arts, humanities, social sciences, and sciences. </div>
				<ul class="postcard__tagbox">
                <a href = "https://cs50.harvard.edu/x/2021/" target = "blank" class = "links" >
                    <li class="tag__item"><i class="fas fa-tag mr-2"></i> Course Website </li>
                    </a>
                    <a href = "https://github.com/bobboy65/CS50-Problem-Sets" target = "blank" class = "links" >
                    <li class="tag__item"><i class="fas fa-clock mr-2"></i>Assignments (Github)</li>
                    </a>
				</ul>
			</div>
		</article> */}






	</div>
</section>

</section>
            
        
            </main>


            <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>


            </body>

        </div>   
    );
}

export default Portfolio;
