import { h } from 'preact';


const Footer = () => {
	return(
		<footer className="footer footer-center py-6 bg-purple text-indigo flex justify-center">
				{/* <img src="../../assets/icons/footer-logo.svg" alt="" /> */}
				<span className="">Jian Sorge</span>
				<span>|</span>
				<span>Front-end Web Developer</span>
				<span>|</span>
				<div className="grid grid-flow-col gap-4">
					<a href="https://github.com/Jiansorge" target="_blank" rel="noopener noreferrer">
						<img src="../../assets/icons/github.svg" alt="Jian's Github" />
					</a> 

					<a href="https://www.linkedin.com/in/jiansorge/" target="_blank" rel="noopener noreferrer">
						<img src="../../assets/icons/linkedin.svg" alt="Jian's LinkedIn" />
					</a>

					<a href="https://twitter.com/code_with_jian" target="_blank" rel="noopener noreferrer">
						<img src="../../assets/icons/twitter.svg" alt="Jian's Twitter" />
					</a> 
				</div>
		</footer>
	)
};

export default Footer;
