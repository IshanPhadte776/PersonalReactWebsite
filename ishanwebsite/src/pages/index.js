import Head from "next/head";
import styles from "@/styles/Home.module.css";

import ImageWithText from "./components/extra/ImageWithText";
import Header from "./components/header/Header";
import TechnologyUsed from "./components/technology/TechnologyUsed";
import ContactInfoAndProjects from "./components/contactAndProjects/ContactInfoAndProjects";

import { useState,useEffect } from "react";



import { FaCaretUp } from "react-icons/fa";
import GithubRepos from "./components/extra/GitHubRepos";




export default function Home() {

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (event) => {
    setLanguage(event);
    console.log(language)

  };





  return (
    <>
      <Head>
        <title>Ishan's React Website </title>
      </Head>

      <main className={styles.main}>
        <Header language={language} onLanguageChange={handleLanguageChange}> </Header>

        <ImageWithText language={language} > </ImageWithText>

        <ContactInfoAndProjects language={language} > </ContactInfoAndProjects>

        <FaCaretUp className={styles.scrollToTopButton} onClick={scrollToTop} />

        <TechnologyUsed language={language} > </TechnologyUsed>
        
        <GithubRepos> </GithubRepos>



      </main>
    </>
  );
}
