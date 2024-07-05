"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* repositioned in header */}
      <BackgroundBeams className="z-0 w-screen h-[40rem]" />
      <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Looking to boost <span className="text-pink-500">your</span> online impact?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Let&apos;s connect and discuss how I can assist in reaching your goals.
          </p>
          <a href="mailto:elsconner@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light mr-5">Copyright &copy; 2024 Conner</p>
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) =>(
              <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <a href={profile.link} target="_blank">
                  <img src={profile.img} alt={profile.img} width={20} height={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
