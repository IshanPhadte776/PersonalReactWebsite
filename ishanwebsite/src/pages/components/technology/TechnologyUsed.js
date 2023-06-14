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
<div className="flex flex-col items-center justify-center">
<div className="mb-4 w-full flex">
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl whitespace-nowrap overflow-hidden">
  {props.language === "English"
    ? "Fais avec React, Next.js, Javascript, HTML5, CSS, TailwindCSS et GithubAPI "
    : "Created using React, Next.js, Javascript, HTML5, CSS, TailwindCSS and GithubAPI"}
</h1>



    <FaReact className="w-auto h-auto text-2xl" />
    <IoLogoJavascript className="w-auto h-auto text-2xl" />
    <AiFillHtml5 className="w-auto h-auto text-2xl" />
    <DiCss3 className="w-auto h-auto text-2xl" />
    <FaGithub className="w-auto h-auto text-2xl" />
</div>


  <div className="grainy-background bg-gray-300 p-2 text-center">
    <h3>
      {props.language === "English"
        ? "© Ishan Phadte All rights reserved."
        : "© Ishan Phadte Tous les droits sont réservés"}
    </h3>
  </div>
</div>


  );
};

export default TechnologyUsed;
