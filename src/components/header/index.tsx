import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<div>
			<img src="./assets/icons/android-chrome-512x512.png" alt="" />
			<h1 class="">Jian Sorge's Portfolio</h1>
		</div>

		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/projects">Projects</Link>
			<Link activeClassName={style.active} href="/about">About</Link>
		</nav>
	</header>
);

export default Header;
