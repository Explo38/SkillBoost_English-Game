import React, { useState } from 'react';

const ToggleSwitch: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        Toggle Switch
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default ToggleSwitch;
