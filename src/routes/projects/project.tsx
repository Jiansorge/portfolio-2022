import { h } from 'preact';
import { ProjectType, ProjectList } from './projects'
import projects from '../../data/projects.json';

// Note: `name` comes from the URL, courtesy of our router
const Project = () => {
    const projectPath:string = window.location.pathname.split('/')[2];
    const projectList:ProjectList = projects;
    const project:ProjectType = projectList[projectPath];
    return (
		<div class="text-yellow bg-gradient-to-b from-purple via-lightPurple to-purple">
            <div class="relative flex flex-col-reverse pt-16 pb-4 lg:py-0 lg:flex-col">
                <div class="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
                    <div class="mb-0 py-6 lg:max-w-lg lg:pr-8 xl:pr-6 space-y-4">
                        <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-pink sm:text-4xl sm:leading-none md:text-center">
                            {project.name}
                        </h2>
                        <p class="pt-4 pb-6 text-base text-gray-700 md:text-lg md:text-center">
                            {project.description}
                        </p>
                        {
                            project.liveUrl
                            && <div class="text-center">
                                <button class="px-6 py-2 transition-colors duration-200  shadow-md border border-teal text-pink bg-purple hover:bg-teal hover:text-purple rounded-lg">
                                <a
                                href={project.liveUrl}
                                class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                >                        


                                        See the hosted project
                                        <svg
                                            className="inline-block w-3 ml-2"
                                            fill="currentColor"
                                            viewBox="0 0 12 12"
                                        >
                                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                        </svg>
                                </a>
                                </button>
           
                            </div>
                        }
                        {
                            project.gitUrl
                            && <div class="text-center">
                                <a
                                href={project.gitUrl}
                                class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                >
                                    <button class="px-6 py-2 transition-colors duration-200  border border-teal bg-purple text-pink hover:bg-teal hover:text-purple rounded-lg">
                                        Git Repo
                                        <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                        >
                                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                        </svg>
                                    </button>
                                </a>

                            </div>
                        }
                    </div>
                </div>
                <div class="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                    <img
                    class="object-contain w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src={project.imgUrl}
                    alt={project.imgAlt}
                    />
                </div>
            </div>

            <div class="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-teal">

                <div class="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                    <div class="duration-300 transform hover:-translate-y-2">
                        <div class="h-full p-5 border rounded-md shadow-sm border-indigo bg-purple">
                            <h6 class="mb-2 font-semibold leading-5 text-pink">{project.subHeader1}</h6>
                            <p class="text-sm text-gray-900">
                            {project.subDescription1}
                            </p>
                        </div>
                    </div>
                    <div class="duration-300 transform hover:-translate-y-2">
                        <div class="h-full p-5 border rounded-md shadow-sm border-indigo bg-purple ">
                            <h6 class="mb-2 font-semibold leading-5 text-pink">{project.subHeader2}</h6>
                            <p class="text-sm text-gray-900">
                                {project.subDescription2}
                            </p>
                        </div>
                    </div>
                    <div class="duration-300 transform hover:-translate-y-2">
                        <div class="h-full p-5 border rounded-md shadow-sm border-indigo bg-purple">
                            <h6 class="mb-2 font-semibold leading-5 text-pink">{project.subHeader3}</h6>
                            <p class="text-sm text-gray-900">
                                {project.subDescription3}
                            </p>
                        </div>
                    </div>
                    <div class="duration-300 transform hover:-translate-y-2">
                        <div class="h-full p-5 border rounded-md shadow-sm border-indigo bg-purple">
                            <h6 class="mb-2 font-semibold leading-5 text-pink">{project.subHeader4}</h6>
                            <p class="text-sm text-gray-900">
                                {project.subDescription4}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default Project;