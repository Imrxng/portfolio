import { useContext } from "react";
import FORM_AND_MAP from "../components/contactComp/FormAndMap";
import { DataContext } from "../context/DataContext";

const CONTACT = () => {
  const { LANGUAGE } = useContext(DataContext);
  return (
    <>
      <div id="maincontact">
        {
          LANGUAGE === 'nl' 
          ?
          <h1>
            Contacteer <span>Me</span>
          </h1>
          :
          <h1>
            Contact <span>Me</span>
          </h1>
        }
        
        <FORM_AND_MAP/>
      </div>
    </>
  );
};

export default CONTACT;
