import React from "react";
import styles from "./ContactInfo.module.css";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

//Visit my Resources

const ContactInfo = (props) => {
  return (
    <div className= {styles.move}>
      <div className={styles.outerBox}>
      <h2 className={styles.text}>{props.language === "English" ? "Visitez mes ressources":"Visit My Resources"}</h2>

        <div className={styles.innerBox}>
          <a href="https://github.com/IshanPhadte776/IshanPhadte776">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/ishan-phadte-7b50b2243/">
            <FaLinkedinIn className={styles.icon} />
          </a>
          <a href="mailto:ishanphadte@gmail.com">
            <AiOutlineMail className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
