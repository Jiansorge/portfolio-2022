import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class="bg-purple flex justify-between items-center text-teal">
		<a class="flex items-center space-x-4 px-6" href="/">
			<img src="./assets/icon.png" alt="" width="50" />
			<h1 class="font-bold">Jian Sorge's Portfolio</h1>
		</a>

		<nav class="px-4 py-6 font-bold h-full text-indigo">
			<Link activeClassName="text-pink bg-[rgb(92,113,222)]" class="px-2 py-6 hover:text-yellow transition-colors duration-200" href="/">Home</Link>
			<Link activeClassName="text-pink" class="px-2 py-6 hover:text-yellow transition-colors duration-200" href="/projects">Projects</Link>
			<Link activeClassName="text-pink" class="px-2 py-6 hover:text-yellow transition-colors duration-200" href="/about">About</Link>
		</nav>
	</header>
);

export default Header;
