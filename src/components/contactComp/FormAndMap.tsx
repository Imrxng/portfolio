import CONTACT_FORM from "./ContactForm";
import CONTACT_INFO from "./ContactInfo";
import MAP from "./Map";

const FORM_AND_MAP = () => {
  return (
    <>
      <div id="formAndMap">
        <CONTACT_FORM/>
        <MAP />
      </div>
      <CONTACT_INFO/>
    </>
  );
};

export default FORM_AND_MAP;
