import React from "react";
import styles from "./projects.module.css";

import { CgWebsite } from "react-icons/cg";

const FullStackWebDev = () => {
  return (
    <div>
      <div class = {styles.row}> 
        <h1 className={styles.title}> Full Stack Web Dev Hotel Application</h1>
        <CgWebsite className={styles.icon}> </CgWebsite>
      </div>

      <h2 className={styles.subtitle}>
        {" "}
        Myself and 2 others developed a full stack web application built using
        React, Next.js, HTML5, CSS, Javascript, SQL, PlanetScale and Vercel{" "}
      </h2>
      <ul>
        <li className={styles.text}>
          Allows users to make and edit booking for hotel stays
        </li>
        <li className={styles.text}>Developed appealing user-interface</li>
        <li className={styles.text}>
          Designed Database Schema and managed 700 SQL Data Entries
        </li>
        <li className={styles.text}>
          Created Triggers, Views and Indexes to improve efficiency and
          effectiveness
        </li>
        <li className={styles.text}>
          Managed Insertion, Modification and Deletion of Queries
        </li>
      </ul>
    </div>
  );
};

export default FullStackWebDev;
