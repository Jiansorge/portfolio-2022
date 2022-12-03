import { h } from 'preact';
import { useState } from 'preact/hooks';

interface Props {
    title: string;
    // TODO remove?
    children: string;
}

const Item = ({ title, children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border-b">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transform transition-transform duration-200 ${
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
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };
  export const Faq = () => {
    return (
      <div class="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              FAQ
            </h2>
            <p class="text-base text-gray-700 md:text-lg ">
              What would you like to know about me?
            </p>
          </div>
          <div class="space-y-4">
            <Item title="Why do you enjoy front-end web development?">
              I have fun creating user experiences that flow and are visually captivating. 
              It's important for me to design things with responsiveness
              and accessibility in mind, to ensure all users have access.
             </Item>
            <Item title="What technologies do you prefer to work with?">
              For static sites, I like to use <a href="https://www.11ty.dev/" target="_blank" rel="noopener">Eleventy</a> or <a href="https://github.com/preactjs-templates/typescript">Preact</a> deployed with Surge.
              For full-stack projects, I prefer to use the <a href="https://github.com/topics/t3-stack" target="_blank" rel="noopener">T3 stack</a> with React + TypeScript.
            </Item>
            <Item title="Why did you switch careers?">
              I wanted a job role focused on solving technical challenges and creating things that make people happy.
              I'm happy I switched!
            </Item>
            <Item title="What else are you working on?">
              I am learning game development with <a href="https://unity.com/" target="_blank" rel="noopener">Unity</a>. I am also interested in learning <a href="https://www.rust-lang.org/what/wasm" target="_blank" rel="noopener">Rust + WASM</a>.
            </Item>
          </div>
        </div>
      </div>
    );
  };