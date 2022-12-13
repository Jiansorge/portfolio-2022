import { h } from 'preact';
import { Project } from './projects'

interface Props {
    project: Project
    href:string
}

const MiniTile = ({ project, href }: Props) => {
	return (
        <a href={href} aria-label="View Item">
            <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                src={project.imgUrl}
                alt={project.imgAlt}
            />
            <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                {project.name}
            </p>
            <p className="text-gray-700">
                {project.description}
            </p>
        </a>
    );
};

export default MiniTile;
