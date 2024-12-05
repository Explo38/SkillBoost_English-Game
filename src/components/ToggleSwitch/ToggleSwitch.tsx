import React, { useState } from 'react';
import './ToggleSwitch.css';
import myImage from '../../assets/svg/logoligne.svg'; // Remplace par ton chemin SVG local

const ToggleSwitch: React.FC<{ onChange: (checked: boolean) => void }> = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    onChange(isChecked); // Notifie le parent pour gérer l'affichage
  };

  return (
    <div className="toggle-switch">
      <img src={myImage} alt="Image" style={{ width: '300px', marginBottom: '-70px', marginTop:'-50px' }} />

      <label className="switch">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <div className="slider">
          <div className={`slider-toggle ${checked ? 'right' : 'left'}`}></div>
          <div className={`slider-text left ${!checked ? 'active' : ''}`}>Timer</div>
          <div className={`slider-text right ${checked ? 'active' : ''}`}>Rules</div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
