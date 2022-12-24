import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';

interface Props {
  title: string;
  children: preact.JSX.Element;
}

const Item = ({ title, children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border-b border-teal text-teal">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-left text-lg font-medium text-pink">{title}</p>
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
            <h2 class="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-indigo sm:text-4xl md:mx-auto">
              FAQ
            </h2>
            {/* <p class="text-base text-pink md:text-lg ">
              
            </p> */}
          </div>
          <div class="space-y-4">
            <Item title="Why do you enjoy front-end web development?">
              <>
                I have fun creating user experiences that flow and are visually captivating. 
                It's important for me to design things with responsiveness
                and accessibility in mind, to ensure all users have access.
              </>
             </Item>
            <Item title="What technologies do you prefer to work with?">
              <>
                For static sites, I like to use <a href="https://www.11ty.dev/" target="_blank" rel="noopener noreferrer">Eleventy</a> or <a href="https://github.com/preactjs-templates/typescript">Preact</a> deployed with <a href="https://surge.sh/">Surge</a>.
                For full-stack projects, I like to use the <a href="https://github.com/topics/t3-stack" target="_blank" rel="noopener noreferrer">T3 stack</a> with React + TypeScript.
              </>
            </Item>
            <Item title="Why did you switch careers?">
              <>
                I wanted a job role focused on solving technical challenges and creating things that make people happy.
                I'm happy I switched!
              </>
            </Item>
            <Item title="What else are you working on?">
              <>
                I am slowly learning Vue and Nuxt.js. I am also interested in learning game development with <a href="https://unity.com/" target="_blank" rel="noopener noreferrer">Unity</a>.
              </>
            </Item>
          </div>
        </div>
      </div>
    );
  };