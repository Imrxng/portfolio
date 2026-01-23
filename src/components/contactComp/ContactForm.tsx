import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { useForm } from '@formspree/react';

interface ContactFormInputs {
  name: string;
  mail: string;
  text: string;
}

const CONTACT_FORM = () => {
  const [state, handleSubmit] = useForm("xeoopeel");
  const { LANGUAGE } = useContext(DataContext);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const validateInput = (inputs: ContactFormInputs): string | null => {
    if (!inputs.name.trim()) return 'Naam mag niet leeg zijn';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.mail)) return 'Voer een geldig e-mailadres in';
    if (!inputs.text.trim()) return 'Bericht mag niet leeg zijn';
    return null;
  };

const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const inputs = {
    name: formData.get("name") as string,
    mail: formData.get("email") as string,
    text: formData.get("message") as string,
  };

  const validationError = validateInput(inputs);
  if (validationError) {
    setError(validationError);
    setSuccess(null);
    return;
  }

  setError(null);
  await handleSubmit(event); // ⬅️ laat Formspree zijn ding doen

  if (state.succeeded) {
    setSuccess("Formulier succesvol verzonden!");
    form.reset();
  }
};


  if (LANGUAGE === 'nl') {
    return (
      <form id="contactForm" onSubmit={handleFormSubmit}>
          <label htmlFor="name">Naam:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Naam"
          />
          <label htmlFor="mail">Mail:</label>
          <input
            type="text"
            name="email"
            id="mail"
            placeholder="Mail"
          />
          <label htmlFor="text">Vraag:</label>
          <textarea
            name="message"
            id="text"
            cols={30}
            rows={10}
            placeholder="Bericht"
          ></textarea>
          <br />
          <button disabled={state.submitting} className="Button" id="submitButton" type="submit">
            Verzenden <i className="fa-regular fa-paper-plane" id="submitIcon"></i>
          </button>
          {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
          {success && <div style={{ color: 'green', marginTop: '10px' }}>{success}</div>}
      </form>
    );
  };

  return (
    <form id="contactForm" onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />
      <label htmlFor="mail">Mail:</label>
      <input
        type="text"
        name="mail"
        id="mail"
        placeholder="Mail"
      />
      <label htmlFor="text">Question:</label>
      <textarea
        name="text"
        id="text"
        cols={30}
        rows={10}
        placeholder="Message"
      ></textarea>
      <br />
      <button disabled={state.submitting} className="Button" id="submitButton" type="submit">
        Send <i className="fa-regular fa-paper-plane" id="submitIcon"></i>
      </button>
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      {state.succeeded && <div style={{ color: 'lightgreen', marginTop: '10px' }}>Bericht succesvol verstuurd</div>}
    </form>
  );
};

export default CONTACT_FORM;