import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const pageVariants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const TransitionTemplate = ({ children }) => (
  <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
);

TransitionTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TransitionTemplate;
