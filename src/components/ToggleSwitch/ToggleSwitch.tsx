// src/components/ToggleSwitch/ToggleSwitch.tsx
import React from "react";

type ToggleSwitchProps = {
  onChange: (isChecked: boolean) => void; // Fonction pour gérer le changement d'état
  isChecked: boolean; // L'état actuel du switch (activé ou non)
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onChange, isChecked }) => {
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)} // On appelle la fonction onChange quand l'utilisateur change le switch
      />
      <span className="slider"></span> {/* Tu peux ajouter ici un design pour le switch */}
    </label>
  );
};

export default ToggleSwitch;
