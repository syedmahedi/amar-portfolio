import React from 'react';
import config from "../api/index.json";
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import {FaCode, FaJava, FaPhp, FaReact, FaBrain, FaLaptopCode, FaPython,FaNodeJs,FaDatabase,FaServer} from "react-icons/fa";
import { AiOutlineAntDesign } from 'react-icons/ai';
import {DiJavascript1} from 'react-icons/di'

const About = () => {

  const [ref,inView]=useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false , amount: 0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[560px] mix-blend-lighten bg-top'>
          </motion.div>
          <motion.div 
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false , amount: 0.3}}
          className='flex-1'>
          <h2 className='h2'>{config.about.title}</h2>
          <h3 className='mb-4'>
          <p>{config.about.primary}</p>
          <p>{config.about.secondary}</p>
          </h3>  

          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[30px] font-tertiary text-gradient mb-2 mt-4'>
                {
                  inView ? <CountUp start={0} end={2} duration={5}></CountUp>:
                  null
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br/>
                Experience
              </div>
            </div>
            <div>
              <div className='text-[30px] font-tertiary text-gradient mb-2 mt-4'>
                {
                  inView ? <CountUp start={0} end={10} duration={3}></CountUp>:
                  null    
                }+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br/>
                Completed
              </div>
            </div>
          </div>
          <div className=''>
            <motion.h1
            variants={fadeIn('right',0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false , amount: 0.3}} 
            className="mt-2 mb-6 text-[36px] lg:text-[60px font-secondary leading-[1]">
            </motion.h1>
            <motion.div
            variants={fadeIn('left',0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false , amount: 0.3}} 
            className="flex flex-wrap justify-center text-2xl items-center gap-x-2 gap-y-18 max-w-max mx-auto lg:mx-0 gap-y-4 lg:gap-y-6">
              <FaCode /> <span className="font-bold mr-6">C++</span>              
              <FaReact /> <span className="font-bold mr-6">React</span>
              <FaLaptopCode /> <span className="font-bold mr-6">CP</span>
              <FaBrain /> <span className="font-bold mr-6">ML</span>
              <FaPython /> <span className="font-bold mr-6">Python</span>
              <FaNodeJs /> <span className="font-bold mr-6">Node.js</span>
              <DiJavascript1 /> <span className="font-bold mr-6">JavaScript</span>
              <FaJava /> <span className="font-bold mr-6">Java</span>
              <FaDatabase /> <span className="font-bold mr-6">MySQL</span>
              <FaDatabase /> <span className="font-bold mr-6">MongoDB</span>
              <FaServer/><span className="font-bold mr-6">Express</span>
              <AiOutlineAntDesign /> <span className="font-bold mr-6">UI/UX</span>
            </motion.div>
          </div>

          </motion.div> 
          
        


        </div>
        



      </div>
    </section>
  );
};

export default About;
