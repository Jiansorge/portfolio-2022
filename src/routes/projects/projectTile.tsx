import { h } from 'preact';
import style from './style.css';

interface Props {
    title: string;
    description: string;
    href: string;
    imgSrc: string;
    imgAlt: string;
  }
  
  const ProjectTile = ({ title, description, href, imgSrc, imgAlt }: Props) => {
	return (
        <a href={href} aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={imgSrc}
                alt={imgAlt}
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-4 text-lg font-bold text-gray-100">{title}</p>
                    <p className="text-sm tracking-wide text-gray-300">
                        {description}
                    </p>
                </div>
            </div>
        </a>
	);
};

export default ProjectTile;
