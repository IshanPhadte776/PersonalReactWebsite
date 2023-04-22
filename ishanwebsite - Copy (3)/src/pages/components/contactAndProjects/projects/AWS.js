import React from 'react';
import styles from './projects.module.css';
import { AiOutlineAmazon } from 'react-icons/ai';


const AWS = () => {
  return (
    <div>
      <div class = {styles.row}> 
      <h1 className={styles.title}> AWS Certified Cloud Practioner</h1>
      <AiOutlineAmazon className= {styles.icon} > </AiOutlineAmazon>

      </div>


      <h2 className={styles.subtitle} > I am an AWS Certified Cloud Practioner.  </h2>

      <ul className={styles.list}>
        <li className={styles.text}>I worked on my own, outside of the classroom and studied for the certification. I have experience working with EC2, S3, and AWS Lambda.</li>
        <li className={styles.text}> I am knowledgable about various cloud concepts and infrastructure</li>
      </ul>
    </div>
  );
};

export default AWS;