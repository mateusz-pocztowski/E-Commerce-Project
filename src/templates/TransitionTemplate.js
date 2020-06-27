import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const TransitionTemplate = ({ children, transition }) => {
  const { pathname } = useLocation();
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: transition }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

TransitionTemplate.propTypes = {
  transition: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

TransitionTemplate.defaultProps = {
  transition: 0,
};

export default TransitionTemplate;
