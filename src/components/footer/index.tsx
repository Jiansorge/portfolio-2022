import { h } from 'preact';


const Footer = () => {
	return(
		<footer className="footer footer-center p-10 bg-purple text-indigo">
			<div>
				<img src="../../assets/icons/footer-logo.svg" alt="" />
				<p className="font-bold">
				Jian Sorge<br />Front-end Web Developer
				</p> 
			</div> 
			<div>
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
			</div>
		</footer>
	)
};

export default Footer;
