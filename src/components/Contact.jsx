import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Centered container for content */}
      <div className="w-full max-w-7xl px-6">
        {/* Section Title */}
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl font-semibold text-white"
        >
          Get in Touch
        </motion.h1>

        {/* Flexbox Container for Contact Details */}
        <div className="flex justify-center items-center text-center lg:text-left mt-6">
          {/* Contact Information Section */}
          <div className="flex flex-col justify-center items-center lg:items-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="my-4 text-neutral-300"
            >
              {CONTACT.address}
            </motion.p>

            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="my-4 text-neutral-300"
            >
              {CONTACT.phoneNo}
            </motion.p>

            <motion.a
              href={`mailto:${CONTACT.email}`}
              whileHover={{ scale: 1.1, color: '#8b5cf6' }}
              transition={{ duration: 0.3 }}
              className="text-neutral-300 border-b-2 border-neutral-500 hover:border-purple-500 transition-all"
            >
              {CONTACT.email}
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
