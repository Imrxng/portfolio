import { HashLink } from "react-router-hash-link"; 

const NAV_EN = () => {
    return (
        <nav>
            <HashLink to="/portfolio/#aboutme">About</HashLink>
            <HashLink to="/portfolio/#myservices">My Services</HashLink>
            <HashLink to="/portfolio/#myskills">My Skills</HashLink>
            <HashLink to="/portfolio/#mywork">My Work</HashLink>
            <HashLink to="/portfolio/contact">Contact Me</HashLink>
        </nav>
    );
};

export default NAV_EN;
