import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Jian Sorge's Portfolio</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/project">Me</Link>
			<Link activeClassName={style.active} href="/project/john">John</Link>
		</nav>
	</header>
);

export default Header;
