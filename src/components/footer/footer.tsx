import React, { useState } from 'react';
import './footer.css'; // Assurez-vous d'avoir lié le CSS correctement

// Importation de l'image
import image from '../../assets/Annecy.jpg'; // Remplace ce chemin par celui de ton image

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour ouvrir/fermer la pop-up
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <footer className="footer">
      <span className="footer-text" onClick={toggleModal}>Team Rocket©️</span>

      {/* Pop-up */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={toggleModal}>✖</button>
            <div className="modal-content">
              <img src={image} alt="Description" className="modal-image" />
              <p className="modal-text">English Game 2024 MDS</p>
              <p> #bestcrazyteam🤙
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
