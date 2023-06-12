import React from "react";

import Image from "next/image";
import profilePic from "./pfpPicture.jpeg";

function Hero() {
  return (
    <div className="relative">
      <img
        src="https://media.giphy.com/media/BA8S1tDfyHOkU/giphy.gif"
        alt="GIF"
        className="w-full h-auto aspect-w-1 aspect-h-1 filter brightness-50"
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white p-4">
        <Image
          src={profilePic}
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 3xl:w-18 3xl:h-18 4xl:w-20 4xl:h-20"
          alt="pfpPic"
        />
        <h1 className="text-4xl font-bold text-center">Ishan Phadte</h1>
        <div className="text-lg text-justify">
          <div className="flex justify-start mb-4">
            <p className="mr-4">
              Hello, My name is Ishan Phadte. I'm a 3rd year Computer Science
              student at the University of Ottawa. I am a great software
              engineer because I possess exceptional problem-solving skills,
              enabling me to find efficient and innovative solutions to complex
              technical challenges. I pay meticulous attention to detail and
              ensure that my code is robust, reliable, and of high quality.
            </p>
          </div>
          <div className="flex justify-end mb-4">
            <p>
              I am specialized in Full-Stack Development and Cloud Computing. I
              have created various full stack projects such as this React
              Website, a Website for a small business, and a Whiteboard
              Application. I am also an AWS Certified Cloud Practitioner and
              have developed a Chatbot using various cloud services.
              Additionally, I have done freelancing work for a small business
              where I developed a website to display content and send email
              notifications.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-transparent border border-white rounded-full py-2 px-4 text-white hover:bg-white hover:text-gray-800 transition-colors duration-300 mx-auto"
              onClick={() => window.open("https://github.com/IshanPhadte776/IshanPhadte776/blob/main/IshanPhadteResume.pdf", "_blank")}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
