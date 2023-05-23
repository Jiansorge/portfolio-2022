import { h } from 'preact';
import { Link } from 'preact-router/match';
// import style from './style.css';

const Header = () => (
	<header class="drop-shadow-md bg-purple flex justify-between items-center text-indigo ">
		<a class="hover:text-pink transition-colors duration-200 flex items-center space-x-2 px-2 xs:px-6" href="/">
			<img class="hidden xs:inline-block" src="/assets/icons/header.png" alt="" width="50" height="50" />
			<h1 class="font-bold drop-shadow-md">Jian<span class="hidden sm:inline-block">&nbsp;Sorge</span>'s Portfolio</h1>
		</a>

		<nav class="px-4 py-6 font-bold h-full text-indigo">
			<Link activeClassName="text-pink" class="px-2 py-6 hover:text-yellow transition-colors duration-200 drop-shadow-md" href="/">Home</Link>
			<Link activeClassName="text-pink" class="px-2 py-6 hover:text-yellow transition-colors duration-200 drop-shadow-md" href="/projects">Projects</Link>
			<Link activeClassName="text-pink" class="px-2 py-6 hover:text-yellow transition-colors duration-200 drop-shadow-md" href="/about">About</Link>
		</nav>
	</header>
);

export default Header;
