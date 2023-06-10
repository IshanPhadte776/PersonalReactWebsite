import React from "react";

import ContactInfo from "./contact/ContactInfo";

import styles from "./ContactInfoAndProject.module.css";

import AWS from "./projects/AWS";
import FullStackAndroid from "./projects/FullStackAndroid";
import FullStackWebDev from "./projects/FullStackWebDev";



const ContactInfoAndProjects = (props) => {
  const [activeComponent, setActiveComponent] = React.useState(null);

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  let componentToRender;
  switch (activeComponent) {
    case "AWSCertifiedCloudPractioner":
      componentToRender = <AWS />;
      break;
    case "FullStackWebDevelopHotelApplication":
      componentToRender = <FullStackWebDev />;
      break;
    case "FullStackAndroidMealerApplication":
      componentToRender = <FullStackAndroid />;
      break;
    default:
      componentToRender = null;
      break;
  }

  return (
    <div>
      <div className= {styles.row}>
        <ContactInfo language = {props.language}> </ContactInfo>

        <div >
          <h2 className={styles.title}>{props.language === "English" ? "Voici mes meilleurs projets" : "Here are Some of my Side Projects"}</h2>

          <div class={styles.subContainer}>
            <button
              className={styles.button}
              onClick={() => handleClick("AWSCertifiedCloudPractioner")}
            >
              AWS Certified Cloud Practioner
            </button>
            <button
              className={styles.button}
              onClick={() => handleClick("FullStackWebDevelopHotelApplication")}
            >
              Full Stack Web Dev Application
            </button>
            <button
              className={styles.button}
              onClick={() => handleClick("FullStackAndroidMealerApplication")}
            >
              Full Stack Android Mealer Application
            </button>
          </div>
        </div>

        
      </div>

      {componentToRender}
    </div>
  );
};

export default ContactInfoAndProjects;
