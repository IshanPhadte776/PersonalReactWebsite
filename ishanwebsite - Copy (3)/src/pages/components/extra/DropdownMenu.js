import React, { useState, useEffect } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu}>Dropdown Menu</button>
      {isOpen && (
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
