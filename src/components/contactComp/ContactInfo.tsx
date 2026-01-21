import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const CONTACT_INFO = () => {
  const { LANGUAGE } = useContext(DataContext);
  return (
    <div id="contactmeContactPage">
      <div className="contactemoj">
        <i className="fa-regular fa-envelope"></i>
        <a href="mailto:imgha@hotmail.com">
          imgha@hotmail.com
        </a>
      </div>
      <div className="contactemoj">
        <i className="fa-solid fa-location-dot"></i>
        {LANGUAGE === 'nl' ?
          <p>België - Antwerpen</p> :
          <p>Belgium - Antwerp</p> 
        }
      </div>
      <div className="contactemoj">
        <i className="fa-solid fa-mobile-screen-button"></i>
        <a href="tel:+32485155865">+32485155865</a>
      </div>
    </div>
  );
}

export default CONTACT_INFO;
