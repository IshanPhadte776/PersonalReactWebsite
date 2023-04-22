import React, { useState } from "react";
import styles from './popup.module.css';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className={styles.popup}>
          <div className="popup-content">
            <span className="popup-message"> View the Source Code Here</span>
            <button className= {styles.closeBtn} onClick={handleClosePopup}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};




export default Popup;