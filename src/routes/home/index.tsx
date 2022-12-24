import { h } from 'preact';
// import style from './style.css';

const Home = () => (
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
);

export default Home;
