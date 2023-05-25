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
                className="drop-shadow-2xl object-top h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 "
                src={thumbUrl}
                alt={project.imgAlt}
            />
            <div className="bg-purple p-4 rounded-md border border-indigo">
                <p className="mb-4 text-xl font-bold leading-none sm:text-2xl text-indigo self-start">
                    {project.name}
                </p>
                <p className="text-gray-700">
                    {project.description}
                </p>
            </div>
        </a>
    );
};

export default MiniTile;
