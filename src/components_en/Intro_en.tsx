import { Link } from "react-router-dom";


const INTRO_EN = () => {


    return (
        <div id="intro">
            <div>
            <p id="intoTekst1">Hi, my name is</p>
      <p className="infoTekst2">Imran <span>Ghaddoura</span>,</p>
      <p className="infoTekst2">I'm a Full Stack Developer</p>
                <div id="Cv_Message">
                    <a href="./download/CV_Imran_Ghaddoura.pdf" className="Button" download="CV_Imran_Ghaddoura.pdf">CV <i className="fa-solid fa-download"></i></a>
                    <Link to={"/contact"} id="talkButton">Let's talk  <i className="fa-regular fa-paper-plane"></i></Link>
                </div>
            </div>
            <div id="mezelf">
                <img src="./assets/images/duim.webp" alt="imran"/>
            </div>
        </div>
    );
};

export default INTRO_EN;