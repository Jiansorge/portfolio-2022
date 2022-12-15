import { h } from 'preact';
import { ProjectType, ProjectList } from './projects'
import projects from '../../data/projects.json';

// Note: `name` comes from the URL, courtesy of our router
const Project = () => {
    const projectPath:string = window.location.pathname.split('/')[2];
    const projectList:ProjectList = projects;
    const project:ProjectType = projectList[projectPath];
    return (
		<div class="">
            <div class="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
            <div class="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
                <div class="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
                <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
                    {project.name}
                </h2>
                <p class="mb-5 text-base text-gray-700 md:text-lg md:text-center">
                    {project.description}
                </p>
                <div class="text-center">
                    <a
                    href={project.liveUrl}
                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        See the hosted project
                    </a>
                </div>
                <div class="mb-10 text-center md:mb-16 lg:mb-20">
                    <a
                    href={project.gitUrl}
                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                    Git Repo
                    </a>
                </div>


                </div>
            </div>
            <div class="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                src={project.imgUrl}
                alt={project.imgAlt}
                />
            </div>
            </div>

            <div class="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <div class="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                    <div class="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div class="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 class="mb-2 font-semibold leading-5">{project.subHeader1}</h6>
                            <p class="text-sm text-gray-900">
                            {project.subDescription1}
                            </p>
                        </div>
                    </div>
                    <div class="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div class="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 class="mb-2 font-semibold leading-5">{project.subHeader2}</h6>
                            <p class="text-sm text-gray-900">
                                {project.subDescription2}
                            </p>
                        </div>
                    </div>
                    <div class="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div class="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 class="mb-2 font-semibold leading-5">{project.subHeader3}</h6>
                            <p class="text-sm text-gray-900">
                                {project.subDescription3}
                            </p>
                        </div>
                    </div>
                    <div class="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div class="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 class="mb-2 font-semibold leading-5">{project.subHeader4}</h6>
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