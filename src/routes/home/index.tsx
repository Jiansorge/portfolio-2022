import { h } from 'preact';
import { useHead } from 'hoofd/preact';
// import style from './style.css';

const Home = () => {
	useHead({
		title: 'Jian\'s Portfolio',
		metas: [{ name: 'author', content: 'Jian Sorge'},
				{ name: 'description', content: 'Homepage for Jian Sorge\'s web development portfolio'},
				{ name: 'author', content: 'Jian Sorge'}]
				// <!-- Standard favicon -->
				// <link rel="icon" type="image/x-icon" href="https://example.com/favicon.ico">
				// <!-- Recommended favicon format -->
				// <link rel="icon" type="image/png" href="https://example.com/favicon.png"></link>
				// <!-- Apple Touch Icon (at least 200x200px) -->
				// <link rel="apple-touch-icon" href="/custom-icon.png">

				// <!-- Status Bar Style (see Supported Meta Tags below for available values) -->
				// <!-- Has no effect unless you have the previous meta tag -->
				// <meta name="apple-mobile-web-app-status-bar-style" content="black"></meta>
				// <!-- Microsoft Tiles -->
				// <meta name="msapplication-config" content="browserconfig.xml" />
				// <link rel="canonical" href="http://example.com/2017/09/a-new-article-to-read.html">

				
				// <meta property="og:type" content="website">
				// <meta property="og:url" content="https://example.com/page.html">
				// <meta property="og:title" content="Content Title">
				// <meta property="og:image" content="https://example.com/image.jpg">
				// <meta property="og:description" content="Description Here">
				// <meta property="og:site_name" content="Site Name">
				// <meta property="og:locale" content="en_US">
				// <!-- Next tags are optional but recommended -->
				// <meta property="og:image:width" content="1200">
				// <meta property="og:image:height" content="630">
				// <meta name="twitter:card" content="summary">
				// <meta name="twitter:site" content="@site_account">
				// <meta name="twitter:creator" content="@individual_account">
				// <meta name="twitter:url" content="https://example.com/page.html">
				// <meta name="twitter:title" content="Content Title">
				// <meta name="twitter:description" content="Content description less than 200 characters">
				// <meta name="twitter:image" content="https://example.com/image.jpg"></meta>
 			});
	return(
		<div class="text-purple bg-purple">

			<div className="hero min-h-screen bg-index-hero">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Hello! </h1>
						<p className="py-6 font-bold">My name is Jian.</p>
						<a href="/projects">
							<button className="btn btn-primary text-teal bg-purple hover:text-yellow transition-colors duration-200  shadow-md">Check out my portfolio!</button>
						</a>
					</div>
				</div>
			</div>
			<div class="p-4 flex flex-row-reverse text-pink">
				<span>Animation Credit: <a class="text-yellow underline hover:text-teal transition-colors duration-200" href="https://dribbble.com/shots/3339732-Horizon" target="_blank" rel="noopener noreferrer">Horizon</a> by <a class="text-yellow underline hover:text-teal transition-colors duration-200" href="https://www.unlocklayer.com/" target="_blank" rel="noopener noreferrer">Jeremy Brown</a>
				</span>
			</div>

			<section>
				{/* <div className="carousel w-full">
					<div id="slide1" className="carousel-item relative w-full">
						<img src="https://placeimg.com/800/200/arch" className="w-full" />
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide4" className="btn btn-circle">❮</a> 
							<a href="#slide2" className="btn btn-circle">❯</a>
						</div>
					</div> 
					<div id="slide2" className="carousel-item relative w-full">
						<img src="https://placeimg.com/800/200/arch" className="w-full" />
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide1" className="btn btn-circle">❮</a> 
							<a href="#slide3" className="btn btn-circle">❯</a>
						</div>
					</div> 
					<div id="slide3" className="carousel-item relative w-full">
						<img src="https://placeimg.com/800/200/arch" className="w-full" />
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide2" className="btn btn-circle">❮</a> 
							<a href="#slide4" className="btn btn-circle">❯</a>
						</div>
					</div> 
					<div id="slide4" className="carousel-item relative w-full">
						<img src="https://placeimg.com/800/200/arch" className="w-full" />
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide3" className="btn btn-circle">❮</a> 
							<a href="#slide1" className="btn btn-circle">❯</a>
						</div>
					</div>
				</div> */}
			</section>

		</div>
	)
};

export default Home;
