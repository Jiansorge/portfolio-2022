import { h } from 'preact';
import Footer from '../../components/footer';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>Hello!</h1>
		<p>My name is Jian.</p>
		<p>Check out some of my projects.</p>

		<section>
			<h2>Jian's Project Highlights</h2>

		</section>
		<section>
			<h2>About Jian</h2>
		</section>
		<Footer />
	</div>
);

export default Home;
