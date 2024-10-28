import { useContext } from "react";
import { DataContext } from "../context/DataContext";


const CONTACT_ME = () => {

    const { LANGUAGE } = useContext(DataContext);
    return (
        <div id="contactme">
            {
                LANGUAGE === 'nl' 
                ?
                <h1>Contacteer <span>Mij</span></h1>
                :
                <h1>Contact <span>Me</span></h1>
            }
            <div id="contactInfo">
                <div className="contactInfoElement" ><i className="fa-regular fa-envelope"></i><a href="mailto:imran.ghaddoura@student.ap.be">imran.ghaddoura@student.ap.be</a></div>
                <div className="contactInfoElement" ><i className="fa-solid fa-location-dot"></i><p>{LANGUAGE === 'nl' ? <>België - Antwerpen</> : <>Belgium - Antwerp</>}</p></div>
                <div className="contactInfoElement" ><i className="fa-solid fa-mobile-screen-button"></i><a href="tel:+32485155865">+32485155865</a></div>
            </div>
        </div>
    );
};

export default CONTACT_ME;