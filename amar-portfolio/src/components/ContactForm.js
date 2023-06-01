import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import config from "../api/index.json";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const ContactForm = () => {
  const contact = config.contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [state, handleSubmit] = useForm("xgebdqgd");
  if (state.succeeded) {
      return <p>Thank you! I will respond to your message as soon as possible.</p>;
  }

  return (
    
      <motion.form 
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1 flex flex-col border rounded-2xl gap-y-6 pb-24 p-6 items-start"
        onSubmit={handleSubmit} 
        action={"https://formspree.io/f/xgebdqgd"}
        method="post" 
        
      >
       
          <input
           className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        
        
          <input
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
       
          <textarea
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            id="message"
            name="message"
            placeholder="Enter your message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        
        
          <button 
            type="submit"
            disabled={state.submitting}
            className="btn btn-sm"
          >
            <div>
              send message
          </div>
        </button>
        
      </motion.form>

  );
}

export default ContactForm;
