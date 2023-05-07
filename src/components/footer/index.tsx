import { h } from 'preact';


const Footer = () => {
	return(
		<footer className="footer footer-center space-x-3 py-6 bg-purple flex justify-center text-indigo">
				{/* <img src="../../assets/icons/footer-logo.svg" alt="" /> */}
				<a href="/" className="hover:text-pink transition-colors duration-200">Jian Sorge</a>
				<span>|</span>
				<span class="hidden sm:inline-block">Front-end Web Developer</span>
				<span class="hidden sm:inline-block">|</span>
				<div className="grid grid-flow-col space-x-2">
					<a href="https://github.com/Jiansorge" target="_blank" rel="noopener noreferrer">
						<img src="../../assets/icons/github.svg" alt="Jian's Github" height="24" width="24" />
					</a> 

					<a href="https://www.linkedin.com/in/jiansorge/" target="_blank" rel="noopener noreferrer">
						<img src="../../assets/icons/linkedin.svg" alt="Jian's LinkedIn" height="24" width="24" />
					</a>

					<a href="https://twitter.com/code_with_jian" target="_blank" rel="noopener noreferrer">
						<img src="../../assets/icons/twitter.svg" alt="Jian's Twitter" height="24" width="24" />
					</a> 
				</div>
		</footer>
	)
};

export default Footer;
