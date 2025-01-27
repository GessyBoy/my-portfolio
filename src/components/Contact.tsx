import { useState } from 'react';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="contact-container" id="contact-container">
      <h2>Contactez-moi</h2>
      <p>
        Vous avez un projet à réaliser, des questions à poser ou souhaitez discuter d'une collaboration, n'hésitez pas à me contacter. Je serai ravi de vous accompagner dans vos besoins et de vous répondre rapidement. À très bientôt !
      </p>

      <button className="cta-btn" onClick={openModal}>
        Envoyez un message
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h3>Choisissez une option</h3>
            <div className="modal-buttons">
              <a
                href="mailto:contact@toupa.fr?subject=Demande%20d'informations&body=Bonjour,%20je%20souhaiterais%20avoir%20plus%20d'informations%20sur%20vos%20prestations."
                className="cta-btn"
              >
                Envoyer un email
              </a>
              <a
                href="https://www.toupa.fr/#form"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                Formulaire de contact
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
