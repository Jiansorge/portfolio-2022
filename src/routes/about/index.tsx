import { h } from 'preact';
// import { useEffect, useState } from 'preact/hooks';
import { Faq } from './faq';
import { useHead, useLink } from 'hoofd/preact';

const About = () => {
    // const [time, setTime] = useState<number>(Date.now());
    // const [count, setCount] = useState<number>(0);

    // useEffect(() => {
	// 	const timer = setInterval(() => setTime(Date.now()), 1000);
	// 	return () => clearInterval(timer);
	// }, []);
	const url = 'https://www.jiansorge.com/about';
	const title = 'Jian\'s Portfolio-About Page';
	const description = 'About page for Jian Sorge\'s web development portfolio';

	useHead({
		title: title,
		metas: [
				{ name: 'description', content: description},
				{ name: 'og:url', content: url},
				{ name: 'og:title', content: title},
				{ name: 'og:description', content: description},

				{ name: 'twitter:url', content: url},
				{ name: 'twitter:title', content: title},
				{ name: 'twitter:description', content: description},
			]
	});
	useLink({rel: 'canonical', href: url});

    return (
		<div class="text-pink bg-gradient-to-b from-purple via-lightPurple to-purple">
			<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div class="grid gap-10 lg:grid-cols-2">
					<div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
					{/* <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
						<svg class="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
						<polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points=" 8,5 8,1 16,1 16,5" stroke-linejoin="round"></polyline>
						<polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="9,15 1,15 1,5 23,5 23,15 15,15" stroke-linejoin="round"></polyline>
						<polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="22,18 22,23 2,23 2,18" stroke-linejoin="round"></polyline>
						<rect x="9" y="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" width="6" height="4" stroke-linejoin="round"></rect>
						</svg>
					</div> */}
					<div class="max-w-xl ">
						<h2 class="max-w-lg mb-8 font-sans text-3xl font-bold tracking-tight text-indigo sm:text-4xl sm:leading-none drop-shadow-2xl">
							About Jian
						</h2>
						<div class="bg-purple rounded-md p-4">
							<p class="text-base text-gray-700 md:text-lg">
								I've worked as a front-end web developer 
								for 2.5 years full-time professionally. I have been programming with JavaScript, HTML, CSS and React since 2018.
							</p>
							<p class="text-base text-gray-700 md:text-lg pt-5 opacity-90">
								After spending 7 years in the aerospace industry as 
								a project engineer, I decided to change careers. I took a role as a software product manager, which gave me crucial insights on working on a team with developers.
								I received two certificates in web development and successfully made the switch into programming full-time.
							</p>
						</div>	
					</div>
					{/* <div>
						<a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
						Learn more
						<svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
							<path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
						</svg>
						</a>
					</div> */}
					</div>
					<div class="flex items-center justify-center mx-4 lg:pl-8">
						<div class="flex flex-col items-end px-3">
							<img
							class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56   hover:shadow-2xl hover:animate-bounce  transition duration-200"
							src="../../assets/about-images/trees.jpeg"
							alt="forest picture captures in Portland, OR"
							/>
							<img class="object-cover w-20 h-20 rounded hover:-translate-x-4 hover:translate-y-4 shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40  hover:shadow-2xl transition duration-200  ease-in" src="	../../assets/about-images/me-in-forest.jpg" alt="me in a forest field" />
						</div>
						<div class="px-3">
							<img class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 hover:shadow-2xl hover:rotate-180 ease-in-out duration-1000 transition" src="../../assets/about-images/robotics.jpg" alt="making Arduino robots at Stanford" />
						</div>
					</div>
				</div>
			</div>

			<Faq />
		</div>
	);
};

export default About;
