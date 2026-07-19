import './NavBar.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import GoogleScholarIcon from './GoogleScholarIcon';

const Bottom = () => {
    return (
        <div className="bottom">
            <div className="icons">
                <a className="LinkedIn" href="https://www.linkedin.com/in/qidi-wang/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={24} />
                </a>
                <a className="GitHub" href="https://github.com/AlphauroraE" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub size={24} />
                </a>
                <a className="GoogleScholar" href="https://scholar.google.com/citations?user=U7eWwDMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
                    <GoogleScholarIcon size={24} />
                </a>
                <a className="Email" href="mailto:joanne@placeholder.edu" aria-label="Email">
                    <FaEnvelope size={24} />
                </a>
            </div>
            {/* <div>Copyright © Joanne Wang. All rights reserved.</div> */}
            {/* <div className="made-with-love">Made with love ❤️</div> */}
        </div>
    );
};

export default Bottom;
