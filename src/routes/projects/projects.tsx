import { h } from 'preact';
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

		</div>
	);
};

export default Projects;
