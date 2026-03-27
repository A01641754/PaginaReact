import React, { useState } from "react";

export const HamburguesaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relativa">
      <img
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {isOpen && (
        <div className="menu">
          <p>Opción 1</p>
          <p>Opción 2</p>
        </div>
      )}
    </div>
  );
};