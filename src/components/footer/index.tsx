import { h } from 'preact';
import { Link } from 'preact-router/match';
// import style from './style.css';

const Footer = () => {
	return(
		<footer className="footer footer-center p-10 bg-primary text-primary-content">
			<div>
				<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446.204 446.204"><circle style="fill:#20505b" cx="387.446" cy="360.897" r="17"/><path style="fill:#20505b" d="m121.517 193.247 199.248 66.818c-18.45 55.02-78.006 84.661-133.037 66.208-55.02-18.45-84.661-78.007-66.211-133.026z"/><circle style="fill:#154047" cx="222.159" cy="227.533" r="74.443"/><circle style="fill:#092a2d" cx="222.159" cy="227.533" r="40.761"/><path style="fill:#20505b" d="M325.959 219.578 141.78 157.806c27.067-31.174 71.199-44.726 112.766-30.782 41.578 13.948 68.627 51.361 71.413 92.554z"/><path style="fill:#fcbc1d" d="m320.765 260.065 39.474 13.233c-25.766 76.816-108.925 118.204-185.744 92.449S56.298 256.837 82.042 180.014l39.474 13.233c-18.45 55.02 11.192 114.576 66.212 133.026 55.03 18.453 114.587-11.189 133.037-66.208z"/><path style="fill:#eac16e" d="M437.687 286.375c3.285 1.593 4.052 4.786 3.166 7.44-.976 2.921-3.965 5.194-7.786 3.906l-72.828-24.422-39.474-13.233-199.248-66.818-39.474-13.233.004-.011L9.218 155.58c-7.28-2.431-4.382-13.335 3.148-11.837a107.053 107.053 0 0 0 52.211-2.638c16.692-5.083 32.16-14.217 44.928-26.881 41.167-40.815 103.296-57.453 162.002-37.76 58.71 19.682 98.252 70.413 106.485 127.801 5.1 35.597 27.318 66.439 59.695 82.11zM141.78 157.806l184.179 61.772c-2.786-41.193-29.835-78.606-71.413-92.554-41.567-13.944-85.7-.392-112.766 30.782z"/><path style="fill:#333" d="M221.133 394.221a167.435 167.435 0 0 1-53.078-8.646l-.202-.068c-19.625-6.579-37.615-16.571-53.455-29.692a5 5 0 0 1 6.379-7.701c14.889 12.333 31.802 21.726 50.269 27.917l.163.055c59.916 20.009 125.794 2.368 167.845-44.939a5.003 5.003 0 0 1 7.06-.416 5.002 5.002 0 0 1 .415 7.059c-32.476 36.536-78.325 56.431-125.396 56.431zM99.357 339.27a4.984 4.984 0 0 1-3.754-1.696c-32.037-36.38-46.851-84.661-40.643-132.461a5 5 0 0 1 9.917 1.289c-5.837 44.944 8.097 90.346 38.23 124.565a5 5 0 0 1-3.75 8.303zm257.425-18.007a5 5 0 0 1-4.166-7.758 156.764 156.764 0 0 0 9.283-16.035 5 5 0 0 1 8.936 4.489 167.11 167.11 0 0 1-9.877 17.061 4.997 4.997 0 0 1-4.176 2.243zm68.866-56.419a4.98 4.98 0 0 1-3.214-1.172c-18.309-15.385-30.279-37.03-33.707-60.949a5 5 0 0 1 9.898-1.419c3.078 21.481 13.818 40.911 30.242 54.711a5 5 0 0 1-3.219 8.829zm-37.544-83.12a5.003 5.003 0 0 1-4.788-3.567c-6.461-21.571-16.973-41.354-31.243-58.8a168.22 168.22 0 0 0-37.047-33.572 5 5 0 0 1 5.541-8.326 178.224 178.224 0 0 1 39.246 35.566c15.11 18.472 26.24 39.42 33.083 62.262a5 5 0 0 1-3.355 6.224 4.95 4.95 0 0 1-1.437.213zM59.938 130.953a5.002 5.002 0 0 1-1.454-9.785 87.702 87.702 0 0 0 19.46-8.645 5 5 0 0 1 5.135 8.581 97.664 97.664 0 0 1-21.682 9.63 5.004 5.004 0 0 1-1.459.219zm38.407-22.98a5 5 0 0 1-3.521-8.55 179.796 179.796 0 0 1 84.188-47.027c32.671-7.93 66.869-6.467 98.896 4.229l.229.077a181.104 181.104 0 0 1 16.989 6.668 5 5 0 0 1 2.495 6.616 4.997 4.997 0 0 1-6.616 2.496 171.317 171.317 0 0 0-16.049-6.299l-.205-.068c-30.252-10.104-62.539-11.486-93.381-4a169.794 169.794 0 0 0-79.505 44.411 4.993 4.993 0 0 1-3.52 1.447z"/><path style="fill:#333" d="M221.012 378.369c-15.955 0-32.167-2.537-48.107-7.881-77.713-26.056-120.456-109.332-97.112-187.309L7.628 160.321c-5.737-1.917-8.777-7.558-7.224-13.413 1.555-5.858 6.997-9.251 12.937-8.069a102.529 102.529 0 0 0 49.772-2.516c16.059-4.89 30.881-13.759 42.87-25.65a163.94 163.94 0 0 1 76.765-42.879c29.848-7.244 61.09-5.886 90.348 3.93 29.26 9.809 55.005 27.561 74.451 51.335a163.936 163.936 0 0 1 35.393 80.496c4.896 34.158 26.176 63.437 56.925 78.32 5.193 2.518 7.549 8.078 5.731 13.523-.962 2.879-3.017 5.278-5.638 6.582-2.58 1.284-5.594 1.454-8.489.478l-31.685-10.625a5 5 0 0 1 3.18-9.482l31.692 10.628c.565.191.778.082.848.047.248-.123.485-.436.606-.796.305-.915-.243-1.181-.606-1.356-33.743-16.333-57.096-48.446-62.463-85.9a153.936 153.936 0 0 0-33.234-75.583c-18.252-22.313-42.419-38.976-69.89-48.186-27.471-9.215-56.797-10.492-84.81-3.693a153.949 153.949 0 0 0-72.083 40.262c-13.139 13.032-29.389 22.754-46.992 28.114a112.55 112.55 0 0 1-54.641 2.76c-.395-.079-1.048-.208-1.322.826-.273 1.029.356 1.239.732 1.364l72.833 24.424a5 5 0 0 1 3.147 6.341c-24.828 74.09 15.232 154.571 89.301 179.404 74.082 24.84 154.566-15.222 179.415-89.299a5.002 5.002 0 0 1 6.33-3.15l12.159 4.078a5 5 0 0 1-3.18 9.482l-7.496-2.514c-22.556 60.629-80.459 98.763-142.298 98.765z"/><path style="fill:#333" d="M221.249 336.783c-11.783 0-23.612-1.914-35.111-5.77-27.876-9.348-50.443-28.991-63.543-55.312-13.1-26.32-15.167-56.167-5.819-84.044a5 5 0 0 1 9.482 3.18c-17.543 52.317 10.746 109.152 63.061 126.695 25.348 8.5 52.487 6.622 76.418-5.287 23.931-11.91 41.789-32.426 50.288-57.77a5 5 0 1 1 9.48 3.18c-9.348 27.876-28.991 50.443-55.313 63.543-15.466 7.696-32.156 11.584-48.943 11.585zM325.959 224.578c-.534 0-1.07-.085-1.59-.26L140.19 162.547a5.002 5.002 0 0 1-2.185-8.019c29.358-33.813 75.729-46.47 118.131-32.245 26.968 9.047 49.112 27.885 62.354 53.045a5 5 0 1 1-8.85 4.657c-12.038-22.872-32.169-39.997-56.685-48.222-36.142-12.125-75.445-2.77-102.211 23.775l169.424 56.823a100.303 100.303 0 0 0-3.984-16.949 5 5 0 0 1 9.501-3.125 110.085 110.085 0 0 1 5.263 26.952 4.995 4.995 0 0 1-1.934 4.295 4.986 4.986 0 0 1-3.055 1.044z"/><path style="fill:#333" d="M360.24 278.299a4.987 4.987 0 0 1-1.59-.261l-89.628-30.052a5 5 0 0 1 3.18-9.482l89.626 30.052a5 5 0 0 1 3.151 6.33 5 5 0 0 1-4.739 3.413zM247.581 240.523a4.997 4.997 0 0 1-1.591-.261L63.569 179.091a5 5 0 1 1 3.18-9.48l182.421 61.171a5 5 0 0 1-1.589 9.741z"/><path style="fill:#fcbc1d" d="M52.446 60.614a5 5 0 0 1-5-5V34.181a5 5 0 0 1 10 0v21.434a5 5 0 0 1-5 4.999z"/><path style="fill:#fcbc1d" d="M63.163 49.897H41.729a5 5 0 0 1 0-10h21.433a5 5 0 0 1 .001 10zM321.446 417.023a5 5 0 0 1-5-5V390.59a5 5 0 1 1 10 0v21.433a5 5 0 0 1-5 5z"/><path style="fill:#fcbc1d" d="M332.163 406.307h-21.434a5 5 0 1 1 0-10h21.434a5 5 0 1 1 0 10z"/><path style="fill:#fff" d="M378.395 263.993c-.53 0-1.066-.085-1.589-.26l-40.64-13.629a5 5 0 1 1 3.18-9.48l28.051 9.407a133.006 133.006 0 0 1-11.269-30.542 5 5 0 0 1 3.721-6.013 4.998 4.998 0 0 1 6.014 3.72c3.289 13.962 8.914 27.105 16.721 39.065a5.003 5.003 0 0 1-.231 5.791 5.01 5.01 0 0 1-3.958 1.941zM357.476 204.053a5.001 5.001 0 0 1-4.896-4.011c-4.667-23.111-15.303-44.591-30.758-62.115-15.504-17.579-35.577-30.854-58.051-38.39l-.153-.051c-32.522-10.862-67.433-9.025-98.313 5.17a5 5 0 0 1-4.176-9.086c33.197-15.26 70.717-17.238 105.651-5.571l.159.053c24.151 8.099 45.719 22.366 62.384 41.261 16.614 18.839 28.046 41.92 33.061 66.75a5.001 5.001 0 0 1-4.908 5.99zM95.411 153.864a5 5 0 0 1-2.45-9.363 123.976 123.976 0 0 0 26.635-20.097 146.257 146.257 0 0 1 23.311-18.803 5 5 0 0 1 5.443 8.389 136.227 136.227 0 0 0-21.714 17.517 134.016 134.016 0 0 1-28.785 21.718 4.977 4.977 0 0 1-2.44.639zM121.813 177.949a4.987 4.987 0 0 1-1.59-.261l-45.638-15.304a5 5 0 0 1 3.18-9.482l45.637 15.304a5 5 0 0 1-1.589 9.743zM151.148 187.786a4.987 4.987 0 0 1-1.59-.261l-13.038-4.372a5 5 0 0 1 3.18-9.482l13.038 4.372a5 5 0 0 1-1.59 9.743zM310.865 241.347a4.997 4.997 0 0 1-1.591-.261l-140.161-47.002a5 5 0 0 1 3.18-9.482l140.161 47.002a5 5 0 0 1-1.589 9.743zM128.165 314.286a4.986 4.986 0 0 1-3.745-1.685c-24.657-27.838-36.235-64.856-31.764-101.563a5 5 0 0 1 9.927 1.209c-4.125 33.867 6.563 68.028 29.322 93.724a5 5 0 0 1-3.74 8.315zM152.458 335.412a4.972 4.972 0 0 1-2.756-.832 128.759 128.759 0 0 1-6.895-4.9 4.999 4.999 0 0 1-.948-7.007 4.999 4.999 0 0 1 7.007-.948 119.874 119.874 0 0 0 6.358 4.519 5 5 0 0 1-2.766 9.168zM221.139 356.083a129.26 129.26 0 0 1-40.987-6.679l-.14-.046a131.504 131.504 0 0 1-10.894-4.201 5 5 0 0 1 4.012-9.16 121.06 121.06 0 0 0 10.043 3.875l.143.047c42.026 14.033 88.136 3.697 120.339-26.981a5 5 0 0 1 6.898 7.24c-24.59 23.426-56.673 35.905-89.414 35.905zM321.652 304.986a5 5 0 0 1-4.033-7.951 118.794 118.794 0 0 0 7.757-12.09 5 5 0 0 1 8.729 4.879 128.628 128.628 0 0 1-8.411 13.112 4.999 4.999 0 0 1-4.042 2.05z"/><path style="fill:#333" d="M386.637 287.211c-.33 0-.65-.03-.98-.09-.32-.07-.63-.17-.93-.29-.301-.13-.59-.28-.87-.46a5.449 5.449 0 0 1-.76-.62 5.032 5.032 0 0 1-1.46-3.54c0-.32.029-.65.1-.97.06-.32.16-.64.28-.94.13-.3.279-.59.46-.86.18-.28.39-.53.62-.76.239-.23.489-.44.76-.62.28-.19.569-.34.87-.46.3-.13.609-.23.93-.29.65-.13 1.31-.13 1.96 0 .32.06.63.16.93.29.301.12.591.27.87.46.271.18.53.39.76.62.23.23.44.48.62.76.181.27.33.56.46.86.12.3.221.62.28.94.07.32.101.65.101.97 0 1.32-.53 2.61-1.461 3.54a5.075 5.075 0 0 1-3.54 1.46z"/><path style="fill:#fff" d="M386.259 266.62c-.525 0-1.06-.083-1.585-.259l-7.862-2.626a5 5 0 0 1 3.168-9.486l7.862 2.626a5 5 0 0 1-1.583 9.745zM74.223 162.055a4.976 4.976 0 0 1-1.584-.259l-7.862-2.626a5.002 5.002 0 0 1-3.159-6.327 5.004 5.004 0 0 1 6.327-3.159l7.862 2.626a5.002 5.002 0 0 1-1.584 9.745z"/><path style="fill:#333" d="M387.446 382.897c-12.131 0-22-9.869-22-22s9.869-22 22-22 22 9.869 22 22-9.869 22-22 22zm0-34c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12z"/></svg>
				<p className="font-bold">
				Jian Sorge<br />Front-end Web Developer
				</p> 
			</div> 
			<div>
				<div className="grid grid-flow-col gap-4">
				<a href="https://github.com/Jiansorge" target="_blank" rel="noopener"><svg role="img" aria-label="Jian's Github Check out my github projects!" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><title>Jian's Github</title><desc>Check out my github projects!</desc><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a> 

				<a href="https://www.linkedin.com/in/jiansorge/" target="_blank" rel="noopener"><svg role="img" aria-label="Jian's LinkedIn Here is my LinkedIn profile" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><title>Jian's LinkedIn</title><desc>Here is my LinkedIn profile</desc><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>

				<a href="https://twitter.com/code_with_jian" target="_blank" rel="noopener"><svg role="img" aria-label="Jian's Twitter Check out my Twitter account" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><title>Jian's Twitter</title><desc>Check out my Twitter account</desc><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
				</div>
			</div>
		</footer>
	)
};

export default Footer;
