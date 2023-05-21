import { h } from 'preact';
import { Link } from 'preact-router/match';
import { ProjectType } from './projects'

interface Props {
    project: ProjectType
    href:string
}

const MiniTile = ({ project, href }: Props) => {
    const thumbUrl =`${project.imgUrl.slice(0,-4)}-min.png`;
	return (
        <a href={href} aria-label="View Item" className="flex flex-col items-center">
            <img
                className="object-top h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 "
                src={thumbUrl}
                alt={project.imgAlt}
            />
            <p className="mb-2 text-xl font-bold leading-none sm:text-2xl text-pink self-start">
                {project.name}
            </p>
            <p className="text-gray-700">
                {project.description}
            </p>
        </a>
    );
};

export default MiniTile;
