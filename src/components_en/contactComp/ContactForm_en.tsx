

const CONTACT_FORM_EN = () => {
  return (
    <div id="contactForm">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" placeholder="Name" />
      <label htmlFor="mail">Mail:</label>
      <input type="text" name="mail" id="mail" placeholder="Mail" />
      <label htmlFor="text">Question:</label>
      <textarea
        name="text"
        id="text"
        cols={30}
        rows={10}
        placeholder="Message"
      ></textarea>
      <br />
      <button className="Button" id="submitButton" type="submit">
        Send <i className="fa-regular fa-paper-plane" id="submitIcon"></i>
      </button>
    </div>
  );
};

export default CONTACT_FORM_EN;
