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
            Ready to take <span className="text-pink-500">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discoss how I can help you
            achieve your goal
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
          <p className="md:text-base text-sm md:font-normal font-light">Copyright &copy; 2024 Conner</p>
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) =>(
              <div key={profile.id} className="">
                <img src={profile.img} alt={profile.img} width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
