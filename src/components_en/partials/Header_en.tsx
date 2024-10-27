import LANGUAGE_ICON from "../LanguageIcon_en";
import NAV_EN from "./Nav_en";


const HEADER_EN = () => {


    return (
        <header id="#top">
            <p id="bigName">Imran <span>Ghaddoura</span></p>
            <NAV_EN/>
            <section>
                <LANGUAGE_ICON language="nl"/>
                <LANGUAGE_ICON language="en"/>
            </section>
        </header>
    );
};

export default HEADER_EN;