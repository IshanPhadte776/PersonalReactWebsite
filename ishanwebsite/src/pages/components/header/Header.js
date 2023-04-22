import React from "react";
import styles from "./Header.module.css";
import ToggleSlider from "./ToggleSlider";
import jumpingLogo from "./images/ishanLogo.png";
import emailIcon from "./images/email.png";
import canadaFlag from "./images/canadaFlag.jpg";
import Image from "next/image";

const Header = (props) => {
  return (
<div className={styles.NavBar}>
    
    <Image src={jumpingLogo} className={styles.jump} />
    <h1 className={styles.headerText}>Ishan Phadte</h1>
    <Image src={emailIcon} className={styles.emailIcon} />
    <h1 className={styles.headerText}>IshanPhadte@gmail.com</h1>
    <Image src={canadaFlag} className={styles.canadaFlag} />
    <h1 className={styles.headerText}>Ottawa, Ontario</h1>
    <ToggleSlider language={props.language} onLanguageChange={props.onLanguageChange} />
</div>

  );
};

export default Header;
