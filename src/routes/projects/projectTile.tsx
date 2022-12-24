import { h } from 'preact';
import { ProjectType } from './projects'

interface Props {
    project: ProjectType
    href: string
}

const ProjectTile = ({ project, href }: Props) => {
	return (
        <a href={href} aria-label="View Item">
            <div className="text-teal relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl bg-purple">
                <img
                className="object-cover w-full h-56 md:h-64 xl:h-80 hover:hidden"
                src={project.imgUrl}
                alt={project.imgAlt}
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 hover:bg-purple">
                    <p className="mb-4 text-lg font-bold text-pink">{project.name}</p>
                    <p className="text-sm tracking-wide text-gray-300">
                        {project.description}
                    </p>
                </div>
            </div>
        </a>
	);
};

export default ProjectTile;
