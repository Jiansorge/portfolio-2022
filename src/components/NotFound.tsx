import { h } from 'preact';
import { useHead } from 'hoofd/preact';

interface Props {
    default: boolean
}

const NotFoundPage = (props: Props) => {
	const title = 'Jian\'s Portfolio-Not Found';
	const description = 'Page Not Found - Jian Sorge\'s web development portfolio';
	useHead({
		title: title,
		metas: [
				{ name: 'description', content: description},
                { name: 'robots', content: 'noindex'}
			]
	});

    return (
        <div className="px-4 py-16 w-full text-yellow bg-gradient-to-b from-purple via-lightPurple to-purple">
            <div className="mb-10 text-center">
                <h2 className="text-pink mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl">
                404 - Page Not Found
                </h2>
                <p className="text-base md:text-lg">
                Whoops, looks like I can't find what you're looking for.
                </p>
            </div>
            <div className="mx-auto lg:max-w-2xl">
                <div className="relative w-full">
                    <img
                        className="mb-8 object-contain w-full h-56 rounded sm:h-64 md:h-80 lg:h-96 motion-safe:animate-spin"
                        src="../assets/404.png"
                        alt=""
                    />
                    <a
                    href="/"
                    className="inset-0 flex items-center justify-center transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                    >
                        <button className="btn btn-primary text-teal bg-purple hover:text-yellow transition-colors duration-200  shadow-md">Go back to home</button>
                    </a>
                </div>
            </div>
        </div>
    );
    };

export default NotFoundPage;
