

const CONTACT_ME = () => {

    return (
        <div id="contactme">
            <h1>Contact <span>Me</span></h1>
            <div id="contactInfo">
                <div className="contactInfoElement" ><i className="fa-regular fa-envelope"></i><a href="mailto:imran.ghaddoura@student.ap.be">imran.ghaddoura@student.ap.be</a></div>
                <div className="contactInfoElement" ><i className="fa-solid fa-location-dot"></i><p>Belgium - Antwerp</p></div>
                <div className="contactInfoElement" ><i className="fa-solid fa-mobile-screen-button"></i><a href="tel:+32485155865">+32485155865</a></div>
            </div>
        </div>
    );
};

export default CONTACT_ME;