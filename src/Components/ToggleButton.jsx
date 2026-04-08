import React, { useState } from "react";

const ToggleButton = ({ data, setExtensions, extensions }) => {
  const active = data.isActive;
  const [isOn, setIsOn] = useState(active);
  const handleToggle = () => {
    const nextStatus = !isOn;
    setIsOn(nextStatus);
    const updatedData = {
      ...data,
      isActive: nextStatus,
    };

    setExtensions((extensions) =>
      extensions.map((item) => (item.id === data.id ? updatedData : item)),
    );
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out ${
        isOn ? "bg-green-500" : "bg-slate-700"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default ToggleButton;
