import React, { useEffect, useState } from 'react';
import './anim.css';
import logoSvg from '../../assets/svg/navette.svg';  // Chemin relatif vers ton SVG
import secondImageSvg from '../../assets/svg/titre.svg';
import thirdImageSvg from '../../assets/svg/accroche.svg';

const Anim: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000); // La durée des animations pour qu'elles se terminent avant de passer au reste du site

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`animation-wrapper ${!showAnimation ? 'fade-out' : ''}`}>
      <img src={logoSvg} alt="Logo" className="logo" />
      <img src={secondImageSvg} alt="Second Image" className="second-image" />
      <img src={thirdImageSvg} alt="Third Image" className="third-image" />
    </div>
  );
};

export default Anim;
