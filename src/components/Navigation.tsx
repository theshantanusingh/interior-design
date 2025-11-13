import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface NavigationProps {
  currentPage: 'home' | 'gallery' | 'contact';
  setCurrentPage: (page: 'home' | 'gallery' | 'contact') => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: 'home' as const, label: 'Home', number: '01' },
    { id: 'gallery' as const, label: 'Gallery', number: '02' },
    { id: 'contact' as const, label: 'Contact', number: '03' },
  ];

  const handleNavClick = (page: 'home' | 'gallery' | 'contact') => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm"
      >
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-20 md:h-28">
            {/* Logo */}
            <motion.button
              onClick={() => handleNavClick('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <span className="text-white tracking-[-0.02em] font-semibold text-lg">INTÉRIEUR</span>
              <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-16">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative group flex items-center gap-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + index * 0.1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <span className="text-white/40 group-hover:text-white transition-colors duration-300 text-sm">
                    {item.number}
                  </span>
                  <span
                    className={`text-white transition-all duration-300 ${
                      currentPage === item.id
                        ? 'opacity-100'
                        : 'opacity-40 group-hover:opacity-100'
                    }`}
                  >
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
              aria-label="Toggle mobile menu"
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

          {/* Mobile Menu - FIXED */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 mt-4 rounded-lg"
              >
                <div className="px-6 py-6 space-y-4">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      whileHover={{ x: 8 }}
                      className="block w-full text-left flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <span className="text-white/50 text-sm font-medium">{item.number}</span>
                      <span
                        className={`text-white transition-all duration-300 ${
                          currentPage === item.id ? 'opacity-100 font-medium' : 'opacity-60'
                        }`}
                      >
                        {item.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
