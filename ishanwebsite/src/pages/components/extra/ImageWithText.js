import React from 'react';
import heroImage from "./heroImage.jpg";
import Image from "next/image";
import styles from './ImageWithText.module.css';


function ImageWithText(props) {


  return (
    <div className={styles.imageContainer}>

      <Image src={heroImage} alt="My Image" width={1000} height={500} />
      <h1 className={styles.name}>Ishan Phadte</h1>
      <h1 className={styles.slogan}>{props.language === "English" ? "Faire confiance au processus" : "Trust The Process"}</h1>

    </div>
  );
}

export default ImageWithText;
