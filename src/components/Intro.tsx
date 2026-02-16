import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";


const INTRO = () => {

    const { LANGUAGE } = useContext(DataContext);
    return (
        <div id="intro">
            <div>
                {
                    LANGUAGE === 'nl' 
                    ?
                    <>
                        <p id="intoTekst1">Hallo, mijn naam is</p>
                        <p className="infoTekst2">Imran <span>Ghaddoura</span>,</p>
                        <p className="infoTekst2">Ik ben een Full Stack Developer</p>
                    </>
                    :
                    <>
                        <p id="intoTekst1">Hi, my name is</p>
                        <p className="infoTekst2">Imran <span>Ghaddoura</span>,</p>
                        <p className="infoTekst2">I'm a Full Stack Developer</p>
                    </>
                }
                
                <div id="Cv_Message">
                    <a href={`/download/CV_Imran_Ghaddoura.pdf?v=${Date.now()}`}  className="Button" download="CV_Imran_Ghaddoura.pdf">CV <i className="fa-solid fa-download"></i></a>
                    <Link to={"/portfolio/contact"} id="talkButton">{LANGUAGE === 'nl' ? <>Stuur een bericht</> : <>Let's talk</>} <i className="fa-regular fa-paper-plane"></i></Link>
                </div>
            </div>
            <div id="mezelf">
                <img src="./assets/images/duim.webp" alt="imran"/>
            </div>
        </div>
    );
};

export default INTRO;