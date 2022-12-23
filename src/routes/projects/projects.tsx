import { h } from 'preact';
import MiniTile from './miniTile';
import ProjectTile from './projectTile';
import projects from '../../data/projects.json';

// List of Projects
// Portfolio 2022
// Advertise With Us
// Portfolio 2020
// Sonar Strike

export interface ProjectList  {
    [key:string]: ProjectType;
}
export interface ProjectType {
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



const Projects = () => {
    const Projects:ProjectList = projects;
	return (
		<div class="text-yellow">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                    <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                        <span className="inline-block mb-1 sm:mb-4 text-pink">
                            All Projects 
                        </span>
                        <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                    </h2>
                    <p className="text-indigo font-boldlg:text-sm lg:max-w-md">
                        Here are some of my portfolio highlights.
                    </p>
                </div>
                <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                    { Object.entries(Projects).map((project, index) => {
                        if (index < 4){
                            return (
                                <ProjectTile key={index} project={project[1]} href={`projects/${project[0]}`} />
                            )}
                        }
                    )}
                </div>
                <div className="text-center text-pink">
                    <a
                    href="https://github.com/Jiansorge"
                    target="_blank" rel="noopener noreferrer"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        See My Github Repos
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </a>
                </div>
            </div>

            { Object.keys(projects).length > 4 &&
                <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
                        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
                            <a href="/" aria-label="Item" className="mr-3">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-12 h-12 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                            </a>
                            <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
                                <span className="inline-block mb-2">More Projects</span>
                                <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                            </h2>
                        </div>
                            <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
                                Here are some more projects I've created.
                            </p>
                    </div>
                    <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
                        { 
                            Object.entries(projects).slice(4).map((project)=>{
                                return (
                                    <MiniTile key={project[0]} project={project[1]} href={`projects/${project[0]}`} />
                                )
                            })
                        }
                    </div>
                    {/* <div className="text-center">
                        <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                        See more
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                        </a>
                    </div> */}
                </div>
            }
		</div>
	);
};

export default Projects;
