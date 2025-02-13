import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { FaJava, FaPython, FaHtml5, FaJs, FaPhp, FaNodeJs, FaGithub, FaDocker, FaLinux } from "react-icons/fa";
import { DiMongodb, DiMysql, DiPostgresql } from "react-icons/di";
import { SiSpringboot, SiKubernetes, SiJenkins, SiElasticsearch, SiGrafana, SiJira, SiPostman, SiAngular, SiBootstrap } from "react-icons/si";
import { motion } from 'framer-motion';
const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",

    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
       className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p>React JS</p>
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        
        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaJava className="text-7xl text-yellow-500" />
          <p>Java</p>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaPython className="text-7xl text-blue-500" />
          <p>Python</p>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaHtml5 className="text-7xl text-orange-500" />
          <p>HTML5</p>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaJs className="text-7xl text-yellow-400" />
          <p>JavaScript</p>
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaPhp className="text-7xl text-blue-700" />
          <p>PHP</p>
        </motion.div>
        {/* <motion.div 
        variants={iconVariants(2.4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaNodeJs className="text-7xl text-green-500" />
          <p>Node JS</p>
        </motion.div> */}
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <DiMongodb className="text-7xl text-green-600" />
          <p>MongoDB</p>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <DiMysql className="text-7xl text-blue-700" />
          <p>MySQL</p>
        </motion.div>
        {/* <motion.div 
        variants={iconVariants(3.7)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <DiPostgresql className="text-7xl text-blue-900" />
          <p>PostgreSQL</p>
        </motion.div> */}
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <SiSpringboot className="text-7xl text-orange-600" />
          <p>Spring Boot</p>
        </motion.div>
        <motion.div 
        variants={iconVariants(6.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <SiKubernetes className="text-7xl text-blue-400" />
          <p>Kubernetes</p>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <SiPostman className="text-7xl text-orange-400" />
          <p>Postman</p>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaDocker className="text-7xl text-blue-600" />
          <p>Docker</p>
        </motion.div>
        <motion.div 
        variants={iconVariants(4.4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <SiAngular className="text-7xl text-red-600" />
          <p>Angular</p>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <SiBootstrap className="text-7xl text-purple-600" />
          <p>Bootstrap</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
