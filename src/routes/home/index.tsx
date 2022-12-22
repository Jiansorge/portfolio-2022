import { h } from 'preact';
// import style from './style.css';

const Home = () => (
	<div class="text-pink bg-purple">
		<div className="hero min-h-screen bg-base-200 bg-index-hero">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">Hello! </h1>
					<p className="py-6 text-purple">My name is Jian.</p>
					<a href="/projects">
						<button className="btn btn-primary text-indigo bg-purple">Check out my portfolio!</button>
					</a>
				</div>
			</div>
		</div>
		<div class="px-4 py-2 flex flex-row-reverse">
			<span>Image: <a class="text-indigo" href="https://dribbble.com/shots/3339732-Horizon" target="_blank" rel="noopener noreferrer">Horizon</a> by <a class="text-indigo" href="https://www.unlocklayer.com/" target="_blank" rel="noopener noreferrer">Jeremy Brown</a>
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
