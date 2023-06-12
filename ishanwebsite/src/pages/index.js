import Head from "next/head";
import { useState } from "react";
import { FaCaretUp } from "react-icons/fa";
import GithubRepos from "./components/extra/GitHubRepos";
import GithubStats from "./components/extra/GithubStats";
import TechnologyUsed from "./components/technology/TechnologyUsed";
import VerticalComponent from "./components/sideBar/VerticalComponent";

import Hero from "./components/hero/Hero";

export default function Home() {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (event) => {
    setLanguage(event);
    console.log(language);
  };

  const handleClick = (event) => {
    console.log(event.currentTarget.className);
  };

  return (
    <>
      <Head>
        <title>Ishan's React Website</title>
      </Head>

      <div className="min-h-screen grid grid-cols-4">
        <div className="col-span-1">
          <VerticalComponent
            language={language}
            onLanguageChange={handleLanguageChange}
          />
        </div>

        <div className="col-span-3 h-full">
          {/* <Header
            language={language}
            onLanguageChange={handleLanguageChange}
          ></Header> */}

          {/* <ImageWithText language={language}></ImageWithText> */}

          {/* <ContactInfoAndProjects language={language}></ContactInfoAndProjects> */}

          <Hero> </Hero>
          <FaCaretUp
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 z-50 p-2 bg-gray-800 rounded-full text-white text-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
          />

          <GithubRepos></GithubRepos>

          <TechnologyUsed language={language}></TechnologyUsed>
        </div>
      </div>
    </>
  );
}
