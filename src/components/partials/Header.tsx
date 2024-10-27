import LANGUAGE_ICON from "../LanguageIcon";
import NAV from "./Nav";


const HEADER = () => {


    return (
        <header id="#top">
            <p id="bigName">Imran <span>Ghaddoura</span></p>
            <NAV/>
            <section>
                <LANGUAGE_ICON language="nl"/>
                <LANGUAGE_ICON language="en"/>
            </section>
        </header>
    );
};

export default HEADER;