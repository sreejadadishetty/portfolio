import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { style } from 'framer-motion/client';

const Projects = () => {
  return (
    <div className='border-b border-neutral-500 pb-4'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>
        Projects
      </motion.h1>
      <div className='flex flex-wrap justify-center'>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className='mb-8 p-6 shadow-lg rounded-lg bg-neutral-800 text-white mx-4 w-full lg:w-1/3'>
            
            <img 
              src={project.image} 
              alt={project.name} 
              style={{ width: '120', height: '120', alignItems:'center' }} 
              className='object-contain rounded mx-auto'
            /><br></br>
            <h6 className='mb-2 font-semibold text-center text-lg'>{project.title}</h6>
            <p className='mb-4 text-neutral-400'>{project.description}</p>
            <div>
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className='mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 inline-block'>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
