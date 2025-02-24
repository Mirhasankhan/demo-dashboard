"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

const AdminPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [moveRight, setMoveRight] = useState(false);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0, x: moveRight ? 50 : 0 }} 
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-6"
      >
        Framer Motion in Next.js
      </motion.h1>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md mb-4"
        onClick={() => setMoveRight(!moveRight)}
      >
        Move H1 Right
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md"
        onClick={() => setIsVisible(!isVisible)}
      >
        Toggle Box
      </motion.button>
      
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mt-6 w-40 h-40 bg-blue-400 rounded-lg shadow-lg"
        />
      )}
    </div>
    );
};

export default AdminPage;