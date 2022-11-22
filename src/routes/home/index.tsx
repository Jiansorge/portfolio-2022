import { h } from 'preact';
import Footer from '../../components/footer';
// import style from './style.css';

const Home = () => (
	<div>
		<h1>Hello!</h1>
		<p>My name is Jian.</p>
		<p>Check out some of my projects.</p>

		<section>
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
		</section>
		<section>
			<h2>About Jian</h2>
		</section>
		<Footer />
	</div>
);

export default Home;
