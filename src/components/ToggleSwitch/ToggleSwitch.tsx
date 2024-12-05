import React, { useState } from 'react';
import './ToggleSwitch.css'; // Assurez-vous de lier le fichier CSS

const ToggleSwitch: React.FC<{ onChange: (checked: boolean) => void }> = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    onChange(isChecked); // Notifie le parent (App) pour gérer l'affichage
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
