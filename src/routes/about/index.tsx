import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Footer from '../../components/footer';
import style from './style.css';

const About = () => {
    const [time, setTime] = useState<number>(Date.now());
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
		const timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

    return (
		<div class={style.about}>
			<h1>About Jian</h1>
			<p>I am a front-end web developer.</p>

			<div>Current time: {new Date(time).toLocaleString()}</div>

			<p>
				<button onClick={() => setCount((count) => count + 1)}>Click Me</button>
				{' '}
				Clicked {count} times.
			</p>

			<h2>Other Facts</h2>
			<Footer />
		</div>
	);
};

export default About;
