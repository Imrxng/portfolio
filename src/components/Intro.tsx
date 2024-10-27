

const INTRO = () => {


    return (
        <div id="intro">
            <div>
                <p id="intoTekst1">Hallo, mijn naam is</p>
                <p className="infoTekst2">Imran <span>Ghaddoura</span>,</p>
                <p className="infoTekst2">Ik ben een Full Stack Developer</p>
                <div id="Cv_Message">
                    <a href="./download/CV_Imran_Ghaddoura.pdf" className="Button" download="CV_Imran_Ghaddoura.pdf">CV <i className="fa-solid fa-download"></i></a>
                    <a href="" id="talkButton">Stuur een bericht <i className="fa-regular fa-paper-plane"></i></a>
                </div>
            </div>
            <div id="mezelf">
                <img src="./assets/images/duim.webp" alt="imran"/>
            </div>
        </div>
    );
};

export default INTRO;