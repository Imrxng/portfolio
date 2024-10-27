import CONTACT_FORM_EN from "./ContactForm_en";
import CONTACT_INFO_EN from "./ContactInfo_en";
import MAP from "./Map_en";

const FORM_AND_MAP_EN = () => {
  return (
    <>
      <div id="formAndMap">
        <CONTACT_FORM_EN/>
        <MAP />
      </div>
      <CONTACT_INFO_EN/>
    </>
  );
};

export default FORM_AND_MAP_EN;
