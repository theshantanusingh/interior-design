import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { motion, AnimatePresence } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'gallery' | 'contact'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.div
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <Home setCurrentPage={setCurrentPage} />
          </motion.div>
        )}
        
        {currentPage === 'gallery' && (
          <motion.div
            key="gallery"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <Gallery />
          </motion.div>
        )}
        
        {currentPage === 'contact' && (
          <motion.div
            key="contact"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
