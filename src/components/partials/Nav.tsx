import { useContext } from "react";
import { HashLink } from "react-router-hash-link"; 
import { DataContext } from "../../context/DataContext";

const NAV = () => {
    const { LANGUAGE } = useContext(DataContext);

    if (LANGUAGE === 'nl') {
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

export default NAV;
