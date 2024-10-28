import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const FOOTER = () => {
    const { LANGUAGE } = useContext(DataContext);

    return (
        <footer>
            <div id="socials">
                <a href="https://github.com/Imrxng?tab=repositories" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/imran-g-b1b778255" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <div>
                {LANGUAGE === 'nl' ?
                    <>
                        <p>&copy; 2024 Alle Rechten Voorbehouden.</p>
                        <p>Door <span>Imran Ghaddoura</span></p>
                    </>
                    :
                    <>
                        <p>&copy; 2024 All Rights Reserved.</p>
                        <p>By <span>Imran Ghaddoura</span></p>
                    </>
                }
            </div>
            <div>
                <a href="#top"><i className="fa-solid fa-angles-up"></i></a>
            </div>
        </footer>
    );
};

export default FOOTER;