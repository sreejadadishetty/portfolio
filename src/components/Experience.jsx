import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>
        Experience
      </motion.h1>
      
      <div className='flex flex-col md:flex-row'>
        {/* Left side - Experience Cards */}
        <div className="w-full md:w-2/5 flex flex-col gap-4 p-6">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              className="w-full p-4 rounded-lg bg-neutral-800 shadow-lg cursor-pointer border-2 border-transparent"
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: '#a855f7', rotate: [0, -2, 2, -2, 2, 0] }}
              onClick={() => setSelectedExperience(experience)}
            >
              <p className='text-xl font-semibold text-center'>{experience.role}</p>
              <p className='text-sm text-purple-100 text-center'>{experience.company}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Right side - Detailed Experience View */}
        <div className="w-full md:w-3/5 p-8 flex justify-center items-center">
          {selectedExperience ? (
            <div className="bg-neutral-900 p-8 rounded-lg w-full max-w-lg">
              <p className='text-sm text-neutral-400'>{selectedExperience.year}</p>
              <h6 className='mt-2 mb-2 font-semibold text-white'>
                {selectedExperience.role} - <span className='text-sm text-purple-100'>{selectedExperience.company}</span>
              </h6>
              <p className='mb-4 text-neutral-400'>{selectedExperience.description}</p>
              <div className='flex flex-wrap gap-2'>
                {selectedExperience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='mr-2 rounded bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-300'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-white text-center animate-bounce">
              <p className="text-lg">👈 Click here to know more about my experience!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
