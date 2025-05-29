'use client';
import { motion } from 'framer-motion';

export default function Modal({ children, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl p-0 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative border border-purple-500/30"
      >
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors duration-200 text-2xl z-10 bg-black bg-opacity-50 rounded-full p-1"
        >
          &times;
        </motion.button>
        <div className="relative z-0">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}