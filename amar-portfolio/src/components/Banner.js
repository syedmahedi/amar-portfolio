import React from "react";
import config from "../api/index.json";
import { FaGithub, FaYoutube, FaLinkedin, FaPhone } from "react-icons/fa";
import Img from "../assets/avater.png";
import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const downloadCV = () => {
  const fileUrl = process.env.PUBLIC_URL + "mahedi-cv.pdf";
  const link = document.createElement("a");
  link.href = fileUrl;
  link.setAttribute("download", "mahedi-cv.pdf");
  link.click();
};

const Banner = () => {
  const emailAddress = "syedmahedihasen207@gmail.com";
  const phoneNumber = "01751110659";

  const handleContactClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section
      className="min-h-[65vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.9] lg:text-[100px]"
            >
              SYED <span>MAHEDI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold leading-[1]"
            >
              <span className="mr-2">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Problem Solver",
                  2000,
                  "YouTuber",
                  2000,
                ]}
                speed={50}
                wrapper="span"
                className="text-accent"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx=0"
            >
              {config.hero.subtitle}
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-8 items-center mb-8 mx-auto lg:mx-0"
            >
              <a href={`mailto:${emailAddress}`}>
                <button className="btn btn-sm" onClick={handleContactClick}>
                  Contact me
                </button>
              </a>
              <button className="btn btn-sm" onClick={downloadCV}>
                Download CV
              </button>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[25px] gap-x-6 max-w-max mx-auto lg:mx-0 "
            >
              <a href="https://github.com/syedmahedi">
                <FaGithub className="hover:scale-125 transition-all duration-500" />
              </a>
              <a href="https://www.linkedin.com/in/syed-mahedi-hasen-aa07201b7/">
                <FaLinkedin className="hover:scale-125 transition-all duration-500" />
              </a>
              <a href="https://www.youtube.com/channel/UC280xF_9_fVhv7IaoaJV17Q">
                <FaYoutube className="hover:scale-125 transition-all duration-500" />
              </a>
              <a>
                <button
                  className="hover:scale-125 transition-all duration-500"
                  onClick={handlePhoneClick}
                >
                  <FaPhone />
                </button>
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:flex flex-1 max-w-[420px]"
          >
            <img src={Img} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
