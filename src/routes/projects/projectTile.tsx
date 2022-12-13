import { h } from 'preact';
import style from './style.css';

interface Props {
    project: Project
    href: string
}

interface Project {
    name: string,
    description: string,
    liveUrl?: string,
    gitUrl?: string,
    imgUrl?: string,
    imgAlt?: string,
    subHeader1: string,
    subDescription1: string,
    subHeader2: string,
    subDescription2: string,
    subHeader3: string,
    subDescription3: string,
    subHeader4: string,
    subDescription4: string
}

const ProjectTile = ({ project, href }: Props) => {
	return (
        <a href={href} aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={project.imgUrl}
                alt={project.imgAlt}
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-4 text-lg font-bold text-gray-100">{project.name}</p>
                    <p className="text-sm tracking-wide text-gray-300">
                        {project.description}
                    </p>
                </div>
            </div>
        </a>
	);
};

export default ProjectTile;
