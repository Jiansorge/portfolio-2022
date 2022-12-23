import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class="bg-purple flex justify-between items-center text-teal">
		<a class="flex items-center space-x-4 p-4" href="/">
			<img src="./assets/icons/android-chrome-512x512.png" alt="" width="50" />
			<h1 class="font-bold">Jian Sorge's Portfolio</h1>
		</a>

		<nav class="px-4 space-x-4 font-bold h-full">
			<Link activeClassName="text-pink" class="hover:text-yellow transition-colors duration-200" href="/">Home</Link>
			<Link activeClassName="text-pink" class="hover:text-yellow transition-colors duration-200" href="/projects">Projects</Link>
			<Link activeClassName="text-pink" class="hover:text-yellow transition-colors duration-200" href="/about">About</Link>
		</nav>
	</header>
);

export default Header;
