import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: 'home' | 'gallery' | 'contact';
  setCurrentPage: (page: 'home' | 'gallery' | 'contact') => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as const, label: 'Home', number: '01' },
    { id: 'gallery' as const, label: 'Gallery', number: '02' },
    { id: 'contact' as const, label: 'Contact', number: '03' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm"
    >
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20 md:h-28">
          {/* Logo */}
          <motion.button
            onClick={() => setCurrentPage('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <span className="text-white tracking-[-0.02em]">INTÉRIEUR</span>
            <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-16">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className="relative group flex items-center gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.76, 0, 0.24, 1] }}
              >
                <span className="text-white/40 group-hover:text-white transition-colors duration-300">
                  {item.number}
                </span>
                <span className={`text-white transition-all duration-300 ${
                  currentPage === item.id ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'
                }`}>
                  {item.label}
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-white"
                  initial={false}
                  animate={{
                    scaleX: currentPage === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  style={{ originX: 0 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.span
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 8 : 0,
              }}
              className="w-8 h-[2px] bg-white origin-center"
            />
            <motion.span
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
              }}
              className="w-8 h-[2px] bg-white"
            />
            <motion.span
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -8 : 0,
              }}
              className="w-8 h-[2px] bg-white origin-center"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-8 space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left flex items-center gap-3"
                  >
                    <span className="text-white/40">{item.number}</span>
                    <span className={`text-white transition-colors ${
                      currentPage === item.id ? 'opacity-100' : 'opacity-40'
                    }`}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}