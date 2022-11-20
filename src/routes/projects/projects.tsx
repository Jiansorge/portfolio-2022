import { h } from 'preact';
import Footer from '../../components/footer';
import style from './style.css';


const Projects = () => {
	return (
		<div class={style.project}>
			<h1>All Projects Overview</h1>
			<p>Check out my projects!</p>

			<ul>
				<h2>Highlights</h2>
				<li>This project was a challenge.</li>
				<li>This project was a challenge.</li>

			</ul>
            <Footer />
		</div>
	);
};

export default Projects;
