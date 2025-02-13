import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import ucf from '../assets/ucfImage.jpg';
import kits from '../assets/kitsw.jpg';
import { bach_level, bach_location, bach_name, edu_level, edu_location, edu_name, key_courses_bachelors, key_courses_masters } from '../constants';

const About = () => {
  const cardVariantLeft = {
    hidden: { opacity: 0, x: -100 }, // Off-screen to the left
    visible: { opacity: 1, x: 0 },  // On-screen and visible
  };

  const cardVariantRight = {
    hidden: { opacity: 0, x: 100 }, // Off-screen to the right
    visible: { opacity: 1, x: 0 },  // On-screen and visible
  };

  return (
    <div className="border-b border-neutral-900 pb-8">
      <h1 className="my-20 text-center text-4xl font-bold">Education</h1>
      <div className="flex flex-row justify-around items-start gap-8">
        {/* First Card - Scroll Animation from Left */}
        <motion.div
          className="w-1/2 p-4 rounded-lg shadow-md flex flex-col items-center"
          variants={cardVariantLeft}
          initial="hidden"
          whileInView="visible" // Triggers the animation while scrolling
          viewport={{ once: false, amount: 0.3 }} // Keeps animating as you scroll through
          transition={{ type: 'tween', duration: 0.6 }}
        >
          <img
            className="rounded-2xl"
            src={ucf}
            alt="UCF"
            width={200}
            height={250}
          />
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold">{edu_name}</h2>
            <h3 className="text-lg text-600">{edu_location}</h3>
            <p className="text-md text-700 mt-2">{edu_level}</p>
            <p className="text-md text-700 mt-2">{key_courses_masters}</p>
          </div>
        </motion.div>

        {/* Second Card - Scroll Animation from Right */}
        <motion.div
          className="w-1/2 p-4 rounded-lg shadow-md flex flex-col items-center"
          variants={cardVariantRight}
          initial="hidden"
          whileInView="visible" // Triggers the animation while scrolling
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: 'tween', duration: 0.6 }}
        >
          <img
            className="rounded-2xl"
            src={kits}
            alt="KITSW College"
            width={200}
            height={250}
          />
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold">{bach_name}</h2>
            <h3 className="text-lg text-600">{bach_location}</h3>
            <p className="text-md text-700 mt-2">{bach_level}</p>
            <p className="text-md text-700 mt-2">{key_courses_bachelors}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
