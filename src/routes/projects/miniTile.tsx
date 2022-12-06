import { h } from 'preact';

interface Props {
    title: string;
    description: string;
    href: string;
    imgSrc: string;
    imgAlt: string;
}

const MiniTile = ({ title, description, href, imgSrc, imgAlt }: Props) => {
	return (
        <a href={href} aria-label="View Item">
            <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                src={imgSrc}
                alt={imgAlt}
            />
            <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                {title}
            </p>
            <p className="text-gray-700">
                {description}
            </p>
        </a>
    );
};

export default MiniTile;
