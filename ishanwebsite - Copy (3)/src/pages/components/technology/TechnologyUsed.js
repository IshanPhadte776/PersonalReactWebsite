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
    <div className={styles.techRow}>

<h1 className={styles.text}>{props.language === "English" ? "Fais avec React, Next.js, Javascript, HTML5, CSS et Github " : "Created using React, Next.js, Javascript, HTML5, CSS and Github"}</h1>

      

      <FaReact className={styles.icon} />
      <IoLogoJavascript className={styles.icon}/>
      <AiFillHtml5 className={styles.icon}/>
      <DiCss3 className={styles.icon}/>
      <FaGithub className={styles.icon}/> 
    </div>
  );
};



export default TechnologyUsed;