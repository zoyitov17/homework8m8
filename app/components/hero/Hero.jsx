"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
 
export default function Hero() {
  return (
    <div className="container mt-20 mx-auto px-12 bg-[rgba(18,18,18,1)] py-4">
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            style={{ opacity: 1, transform: "none" }}
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I'm
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                  "UI/UX designer",
                  1000,
                  "Judy",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              expedita.
            </p>
            <div>
              <a
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-secondary-500 hover:to-primary-500 text-white transition duration-300"
                href="/#contact"
              >
                Hire Me
              </a>
              <a
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-secondary-500 hover:to-primary-500 text-white mt-3 transition duration-300"
                href="/"
              >
                <span className="block bg-[#121212] hover:bg-slate-700 rounded-full px-5 py-2">
                  Download CV
                </span>
              </a>
            </div>
          </div>
          <div
            className="col-span-4 place-self-center mt-4 lg:mt-0"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <img
                alt="hero image"
                loading="lazy"
                width="300"
                height="300"
                decoding="async"
                data-nimg="1"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fimages%2Fhero-image.png&w=384&q=75 1x, /_next/image?url=%2Fimages%2Fhero-image.png&w=640&q=75 2x"
                src="/_next/image?url=%2Fimages%2Fhero-image.png&w=640&q=75"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
