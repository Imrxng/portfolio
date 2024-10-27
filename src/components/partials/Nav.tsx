import { HashLink } from "react-router-hash-link"; 

const NAV = () => {
    return (
        <nav>
            <HashLink to="/portfolio/#aboutme">Over</HashLink>
            <HashLink to="/portfolio/#myservices">Diensten</HashLink>
            <HashLink to="/portfolio/#myskills">Skills</HashLink>
            <HashLink to="/portfolio/#mywork">Projecten</HashLink>
            <HashLink to="/portfolio/contact">Contact</HashLink>
        </nav>
    );
};

export default NAV;
