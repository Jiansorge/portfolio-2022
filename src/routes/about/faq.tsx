import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';

interface Props {
  title: string;
  children: preact.JSX.Element;
}

const Item = ({ title, children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border-b border-teal text-white">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-left text-lg font-medium text-indigo">{title}</p>
          <svg
            viewBox="0 0 24 24"
            className={`w-3 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="">{children}</p>
          </div>
        )}
      </div>
    );
  };
  export const Faq = () => {
    return (
      <div class="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 ">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="mb-4 max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 class="drop-shadow-2xl max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-indigo sm:text-4xl md:mx-auto">
              FAQ
            </h2>
            {/* <p class="text-base text-pink md:text-lg ">
              
            </p> */}
          </div>
          <div class="space-y-4 bg-purple rounded-md">
            <Item title="Why do you enjoy front-end web development?">
              <>
                I have fun creating user experiences that flow and are visually captivating. 
                I am inspired to design things with responsiveness
                and accessibility in mind, to ensure all users have access.
              </>
            </Item>
            <Item title="What is your programming work experience?">
              <>
                <ul>
                  <li className="font-bold pb-1">Front-end Software Developer, <a href="https://www.bionic-ads.com/" className="underline" target="_blank" rel="noopener noreferrer">Bionic Advertising Systems</a>, Remote, 2021 – Present</li>
                    <li className="pl-4">• Building legible, maintainable and performant code for a <a href="http://www.bionic-ads.com/agencies/demo/" className="underline" target="_blank" rel="noopener noreferrer">media planning web application</a>.</li>
                        <li className="pl-8">◦ Created and tested numerous features using self-managed GitHub tracking.</li>
                        <li className="pl-8">◦  Outlined and communicated clear API requirements with back-end developers.</li>
                        <li className="pl-8">◦ Created new hire UI guide along with 100+ product ideas and usability issues.</li>
                    <li className="pl-4">• Implemented front-end for advertising search engine, <a href="https://www.advertise-with-us.com/" className="underline" target="_blank" rel="noopener noreferrer">Advertise With Us</a>.</li>
                        <li className="pl-8">◦ Mobile-friendly design using responsive Tailwind methods.</li>
                        <li className="pl-8">◦ Site performance Google Lighthouse scores greater than 95 on average.</li>
                        <li className="pl-8">◦ Enhanced SEO and search rankings using JSON-LD and HTML metadata.</li>
                </ul>
                  
                <ul className="pt-4">
                  <li className="font-bold pb-1">Front-end Software Developer, <a href="https://www.collineargroup.com/" className="underline" target="_blank" rel="noopener noreferrer">Collinear Group</a>, Remote, 2020 – 2021</li>
                      <li className="pl-4">• Developed React functional components using agile methods for Fortune 100 company.</li>
                      <li className="pl-4">• Utilized Typescript and Mobx to perform CRUD API handling with micro-service back-end.</li>
                      <li className="pl-4">• Implemented production admin pages for factory floor QA survey metrics.</li>
                </ul>
              </>
            </Item>
            <Item title="Do you have any coding certifications or coursework?">
              <ul>
                <li>• Certificate, <a href="https://www.pce.uw.edu/certificates/full-stack-development-with-javascript" className="underline" target="_blank" rel="noopener noreferrer">Full-Stack Development with JavaScript</a>, University of Washington, 2019</li>
                <li>• Certificate, <a href="https://www.pce.uw.edu/certificates/front-end-development-with-html-css-and-javascript" className="underline" target="_blank" rel="noopener noreferrer">Front-End Development with HTML, CSS & JS</a>, University of Washington, 2018</li>
                <li>• Python – Stanford 2012</li>
                <li>• R for Data Science – Stanford 2012</li>
                <li>• C++ – UCLA 2008</li>
              </ul>
            </Item>
            <Item title="What technologies do you prefer to work with?">
              <>
                For static sites, I like to use <a href="https://www.11ty.dev/" target="_blank" rel="noopener noreferrer" class="">Eleventy</a> or <a href="https://github.com/preactjs-templates/typescript" target="_blank" rel="noopener noreferrer">Preact</a> deployed with <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a> or <a href="https://surge.sh/" target="_blank" rel="noopener noreferrer">Surge</a>.
                For full-stack projects, I have been experimenting with the <a href="https://github.com/topics/t3-stack" className="underline" target="_blank" rel="noopener noreferrer">T3 stack</a> with React + TypeScript.
              </>
            </Item>
            <Item title="Why did you switch careers?">
              <>
                I wanted a job role focused on solving technical challenges and creating things that make people happy or improve their lives.
                I'm glad that I made the switch!
              </>
            </Item>
            <Item title="What else are you working on?">
              <>
                I have more to learn using Next.js, Vite and Sveltekit. I am slowly learning Vue and Nuxt.js. I am also interested in learning game development with <a href="https://unity.com/" target="_blank" rel="noopener noreferrer">Unity</a>.
              </>
            </Item>
            <Item title="What else is on your programming learning list?">
              <>
                Aside from growing my React and Typescript skill-sets, eventually, I'd like to learn more about cyber security, cloud networking, Linux, and Solid.js. 
              </>
            </Item>
          </div>
        </div>
      </div>
    );
  };