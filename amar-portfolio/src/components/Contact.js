import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ContactForm from "./ContactForm";

const Contact = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <section
      className="py-18 section flex justify-center align-center flex-col"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase font-medium mb-2 tracking-wide">
                Contact
              </h4>
              <h2 className="text-[45px] lg:text-[80px] leading-none mb-12">
                To reach me out
              </h2>
            </div>
          </motion.div>
          <ContactForm />
        </div>
      </div>
      <span className="text-sm text-center text-neutral-600 mt-8">
        © {getYear()} - Developed by <a href="#">syed mahedi</a>
      </span>
    </section>
  );
};

export default Contact;
