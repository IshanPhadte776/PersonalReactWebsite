import React from "react";
import styles from "./projects.module.css";
import { DiAndroid } from "react-icons/di";

const FullStackAndroid = () => {
  return (
    <div>
      <div class = {styles.row}> 
      <h1 className={styles.title}>Full Stack Android Mealer Application</h1>
      <DiAndroid className={styles.icon} />

      </div>

      <h2 className={styles.subtitle}>
        Led a team of 6 to build an Android App in-which users can buy and sell
        meals
      </h2>
      <h2 className={styles.subtitle}>
        We used Java, Android Studio, Firebase, Github, JUnit, Espresso and
        CircleCI
      </h2>

      <ul className={styles.list}>
        <li className={styles.text}>
          Developed proficiency in creating a user-friendly UI design for 20
          screens
        </li>
        <li className={styles.text}>
          Managed backend data using a Real Time Database for over 10 users and
          5 tables (Firebase)
        </li>
        <li className={styles.text}>
          Created Triggers, Views and Indexes to improve efficiency and
          effectiveness
        </li>
        <li className={styles.text}>
          Implemented text field authentication to ensure high-quality data
          input for over 45 data entries
        </li>
      </ul>
    </div>
  );
};

export default FullStackAndroid;
