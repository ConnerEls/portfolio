"use client";

import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { WavyBackground } from "./ui/wavy-background";
import { TypewriterEffect, TypewriterEffectSmooth } from "./ui/typewriter-effect";

const words = [
	{
		text: "from",
	},
	{
		text: "Concept",
		className: "text-pink-500 dark:text-pink-500 font-bold",
	},
	{
		text: "",
	},
	{
		text: "to",
	},
	{
		text: "Reality!",
		className: "text-pink-500 dark:text-pink-500 font-bold",
	},
];

const Hero = () => {
	return (
		<WavyBackground className="max-w-4xl mx-auto pb-40">
			<div className="flex justify-center relative my-20 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<h2 className="mt-5 uppercase tracking-widest text-xs text-center md:text-xs lg:text-1xl text-blue-100 max-w-80">
						Dynamic Web Magic with Next.js
					</h2>

					{/* Big Text 
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiences"
          />
          */}

					<div className="p-2 text-center text-[30px] md:text-3xl lg:text-5xl mx-auto font-normal text-white dark:text-white">
						Designing Web Experiences <TypewriterEffect words={words} />
					</div>

					<p className="text-center md:tracking-wider mb-3 text-sm md:text-sm lg:text-lg mt-3">
						Hi, I&apos;m Conner. A Unity XR Developer and a UI/UX Developer.
					</p>

					<a href="#about">
						<MagicButton
							title="Show my work"
							icon={<FaLocationArrow />}
							position="right"
						/>
					</a>
				</div>
			</div>
		</WavyBackground>
	);
};

export default Hero;
