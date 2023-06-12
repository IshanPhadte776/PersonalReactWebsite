import React from "react";
import styles from "./technologyUsed.module.css";

import { IoLogoJavascript } from "react-icons/io5";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

//Fais avec React, Next.js, Javascript, HTML5 , CSS et Github 


const TechnologyUsed = (props) => {
  return (
    <div> 
    <div className={styles.techRow}>

<h1 className={styles.text}>{props.language === "English" ? "Fais avec React, Next.js, Javascript, HTML5, CSS, TailwindCSS et Github " : "Created using React, Next.js, Javascript, HTML5, CSS, TailwindCSS and Github"}</h1>

    
      <FaReact className={styles.icon} />
      <IoLogoJavascript className={styles.icon}/>
      <AiFillHtml5 className={styles.icon}/>
      <DiCss3 className={styles.icon}/>
      <FaGithub className={styles.icon}/> 
    </div>
    <h1 className={styles.text}>{props.language === "English" ? "© Ishan Phadte All rights reserved." : "© Ishan Phadte Tous les droits sont réservés"}</h1>
    </div>
  );
};



export default TechnologyUsed;