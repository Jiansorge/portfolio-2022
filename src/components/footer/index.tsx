import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Footer = () => (
	<footer class={style.footer}>
		<div>
			<p>Footer</p>
		</div>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/projects">Projects</Link>
			<Link activeClassName={style.active} href="/about">About</Link>
		</nav>
	</footer>
);

export default Footer;
