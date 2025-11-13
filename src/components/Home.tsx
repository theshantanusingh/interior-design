import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

interface HomeProps {
  setCurrentPage: (page: 'gallery' | 'contact') => void;
}

export function Home({ setCurrentPage }: HomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const projects = [
    {
      url: 'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYzMDMyMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Luxury Living',
      category: 'Residential'
    },
    {
      url: 'https://images.unsplash.com/photo-1704428382583-c9c7c1e55d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwZGVzaWdufGVufDF8fHx8MTc2Mjk0MTc3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Modern Sanctuary',
      category: 'Bedroom'
    },
    {
      url: 'https://images.unsplash.com/photo-1535230387253-9cd5be991a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDF8fHx8MTc2MzAzNDA0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pure Minimalism',
      category: 'Kitchen'
    }
  ];

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black z-10" />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758194090785-8e09b7288199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaG90ZWwlMjBsb2JieXxlbnwxfHx8fDE3NjMwMzQwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Premium interior"
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-12"
          >
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
                className="text-[clamp(3rem,10vw,12rem)] leading-[0.9] tracking-[-0.04em]"
              >
                ELEVATE
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="text-[clamp(3rem,10vw,12rem)] leading-[0.9] tracking-[-0.04em] text-white/30"
              >
                YOUR SPACE
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pt-12"
            >
              <p className="max-w-md text-white/60 text-xl leading-relaxed">
                Where architectural vision meets uncompromising luxury. 
                We transform environments into timeless experiences.
              </p>

              <motion.button
                onClick={() => setCurrentPage('gallery')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-6 bg-white text-black overflow-hidden self-start"
              >
                <motion.div
                  className="absolute inset-0 bg-black"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                />
                <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                  <span className="tracking-wider">EXPLORE</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-40 px-8 lg:px-16 bg-black">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="mb-32"
          >
            <span className="text-white/40 tracking-[0.3em] text-sm mb-6 block">FEATURED WORK</span>
            <h2 className="text-[clamp(2.5rem,6vw,6rem)] leading-[1] tracking-[-0.03em]">
              Selected Projects
            </h2>
          </motion.div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={project.url}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex items-end justify-between mt-8">
                  <div>
                    <h3 className="text-5xl mb-2 group-hover:translate-x-4 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-xl">{project.category}</p>
                  </div>
                  <motion.div
                    className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500"
                  >
                    <ArrowRight className="group-hover:text-black transition-colors duration-500" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="mt-32 text-center"
          >
            <motion.button
              onClick={() => setCurrentPage('gallery')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 border border-white/20 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              />
              <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-300">
                <span className="tracking-wider">VIEW ALL PROJECTS</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-8 lg:px-16 bg-white text-black">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
          >
            <div>
              <span className="text-black/40 tracking-[0.3em] text-sm mb-6 block">OUR PHILOSOPHY</span>
              <h2 className="text-[clamp(2.5rem,6vw,6rem)] leading-[1] tracking-[-0.03em] mb-12">
                Design Beyond Boundaries
              </h2>
              <p className="text-black/60 text-2xl leading-relaxed mb-8">
                We believe in creating spaces that transcend trends, 
                merging functionality with artistic expression to craft 
                environments that inspire and endure.
              </p>
              <motion.button
                onClick={() => setCurrentPage('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-6 bg-black text-white overflow-hidden mt-8"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                />
                <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-300">
                  <span className="tracking-wider">START A PROJECT</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </motion.button>
            </div>
            <div className="relative aspect-square">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="w-full h-full"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjI5NTIyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Design philosophy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
