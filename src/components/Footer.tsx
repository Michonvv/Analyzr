import { Link } from 'react-router-dom';

const Footer = () => {
    const appName = "Analyzr"; // Set your app name directly here
    const appDescription = "Get instant feedback on your code quality."; // Set your app description directly here

    return (
        <footer className="bg-base-200 border-t border-base-content/10">
            <div className="max-w-7xl mx-auto px-8 py-24">
                <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    {/* Branding Section Moved Here */}
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mb-10">
                        <Link
                            to="/"
                            aria-current="page"
                            className="flex gap-2 justify-center md:justify-start items-center"
                        >
                            <img
                                src="../logo.svg"
                                alt={`${appName} logo`}
                                className="w-6 h-6"
                                loading="lazy"
                            />
                            <strong className="font-extrabold tracking-tight text-base md:text-lg">
                                {appName}
                            </strong>
                        </Link>

                        <p className="mt-3 text-sm text-base-content/80">
                            {appDescription}
                        </p>
                        <p className="mt-3 text-sm text-base-content/60">
                            Copyright © {new Date().getFullYear()} - All rights reserved
                        </p>
                    </div>

                    <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
                            <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                                LINKS
                            </div>

                            <div className="flex flex-col justify-center items-center md:items-start gap-2 text-sm">
                                <a
                                    href="https://github.com/Michonvv/Analyzr"
                                    className="link link-hover"
                                    aria-label="Contact Support"
                                    target='_blank'
                                >
                                    Support
                                </a>
                                <Link to="/analyzer" className="link link-hover">
                                    analyzer
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
                            <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                                LEGAL
                            </div>

                            <div className="flex flex-col justify-center items-center md:items-start gap-2 text-sm">
                                <Link to="/tos" className="link link-hover">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>

                        {/* New Section for Other Websites */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
                            <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                                Websites from Michon ❤️
                            </div>

                            <div className="flex flex-col justify-center items-center md:items-start gap-2 text-sm">
                                <a href="https://chefsbook.framer.ai/" target="_blank" rel="noopener noreferrer" className="link link-hover">
                                    Chefsbook
                                </a>
                                <a href="https://compacto.netlify.app/" target="_blank" rel="noopener noreferrer" className="link link-hover">
                                    Compacto
                                </a>
                                <a href="https://github.com/Michonvv/Replyly" target="_blank" rel="noopener noreferrer" className="link link-hover">
                                    Replyly
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
