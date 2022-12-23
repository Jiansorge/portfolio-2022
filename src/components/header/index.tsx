import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class="bg-purple flex justify-between items-center text-teal">
		<a class="flex items-center space-x-4 p-4" href="/">
			<img src="./assets/icons/android-chrome-512x512.png" alt="" width="50" />
			<h1 class="">Jian Sorge's Portfolio</h1>
		</a>

		<nav class="px-4 space-x-4">
			<Link activeClassName={style.active} class="" href="/">Home</Link>
			<Link activeClassName={style.active} href="/projects">Projects</Link>
			<Link activeClassName={style.active} href="/about">About</Link>
		</nav>
	</header>
);

export default Header;
