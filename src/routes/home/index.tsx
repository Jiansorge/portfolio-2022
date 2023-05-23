import { h } from 'preact';
import { useHead, useLink } from 'hoofd/preact';
// import style from './style.css';

const Home = () => {
	const url = 'https://www.jiansorge.com';
	const title = 'Jian\'s Portfolio-Home Page';
	const description = 'Homepage for Jian Sorge\'s web development portfolio';

	useHead({
		title: title,
		metas: [
				{ name: 'description', content: description},
				{ name: 'og:url', content: url},
				{ name: 'og:title', content: title},
				{ name: 'og:description', content: description},

				{ name: 'twitter:url', content: url},
				{ name: 'twitter:title', content: title},
				{ name: 'twitter:description', content: description},
			]
	});
	useLink({rel: 'canonical', href: url});
	return(
		<div class="text-purple bg-purple">

			<div className="hero min-h-screen bg-index-hero">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Hello! </h1>
						<p className="py-6 font-bold">My name is Jian.</p>
						<a href="/projects">
							<button className="btn btn-primary text-teal bg-purple hover:text-yellow transition-colors duration-200  shadow-md mb-4">Check out my portfolio!</button>
						</a>
					</div>
				</div>
			</div>
			<div class="p-4 flex justify-center text-pink">
				<span>Animation Credit: <a class="text-yellow underline hover:text-teal transition-colors duration-200" href="https://dribbble.com/shots/3339732-Horizon" target="_blank" rel="noopener noreferrer">Horizon</a> by <a class="text-yellow underline hover:text-teal transition-colors duration-200" href="https://www.unlocklayer.com/" target="_blank" rel="noopener noreferrer">Jeremy Brown</a>
				</span>
			</div>

			{/* <section>
				<div className="carousel w-full">
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
				</div>
			</section> */}

		</div>
	)
};

export default Home;
