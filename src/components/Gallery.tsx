import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYzMDMyMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Luxury Living Room',
    category: 'Living Spaces',
    year: '2024'
  },
  {
    url: 'https://images.unsplash.com/photo-1704428382583-c9c7c1e55d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwZGVzaWdufGVufDF8fHx8MTc2Mjk0MTc3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Modern Bedroom',
    category: 'Bedrooms',
    year: '2024'
  },
  {
    url: 'https://images.unsplash.com/photo-1535230387253-9cd5be991a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDF8fHx8MTc2MzAzNDA0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Minimalist Kitchen',
    category: 'Kitchens',
    year: '2024'
  },
  {
    url: 'https://images.unsplash.com/photo-1758194090785-8e09b7288199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaG90ZWwlMjBsb2JieXxlbnwxfHx8fDE3NjMwMzQwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Premium Hotel Lobby',
    category: 'Commercial',
    year: '2023'
  },
  {
    url: 'https://images.unsplash.com/photo-1758548157466-7c454382035a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmF0aHJvb20lMjBkZXNpZ258ZW58MXx8fHwxNzYzMDAzMjc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Elegant Bathroom',
    category: 'Bathrooms',
    year: '2024'
  },
  {
    url: 'https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBvZmZpY2UlMjBzcGFjZXxlbnwxfHx8fDE3NjMwMDAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Contemporary Office',
    category: 'Office Spaces',
    year: '2023'
  },
  {
    url: 'https://images.unsplash.com/photo-1613545325268-314979eeef03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc2Mjk0NzIxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Luxury Dining Room',
    category: 'Dining Spaces',
    year: '2024'
  },
  {
    url: 'https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjI5NTIyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Modern Architecture',
    category: 'Architecture',
    year: '2023'
  },
  {
    url: 'https://images.unsplash.com/photo-1759038086646-caeed927e000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwbG91bmdlJTIwYXJlYXxlbnwxfHx8fDE3NjMwMzQwNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Stylish Lounge',
    category: 'Lounge Areas',
    year: '2024'
  },
  {
    url: 'https://images.unsplash.com/photo-1707376519357-b53e370384fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwZGVjb3J8ZW58MXx8fHwxNzYyOTUyNDI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Luxury Home Decor',
    category: 'Decor',
    year: '2023'
  },
  {
    url: 'https://images.unsplash.com/photo-1760716478152-f70694d134e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZnVybml0dXJlJTIwZGVzaWdufGVufDF8fHx8MTc2MzAzNDA0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Elegant Furniture',
    category: 'Furniture',
    year: '2024'
  },
  {
    url: 'https://images.unsplash.com/photo-1642976975710-1d8890dbf5ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwZW50aG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMwMzQwNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Modern Penthouse',
    category: 'Penthouses',
    year: '2024'
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="pt-40 pb-32 px-8 lg:px-16 min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="mb-32"
        >
          <span className="text-white/40 tracking-[0.3em] text-sm mb-6 block">PORTFOLIO</span>
          <h1 className="text-[clamp(2.5rem,8vw,10rem)] leading-[0.9] tracking-[-0.04em] mb-8">
            OUR WORK
          </h1>
          <p className="text-white/60 text-2xl max-w-3xl leading-relaxed">
            A curated collection of our most exceptional interior design projects, 
            each one a testament to our commitment to excellence and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease: [0.76, 0, 0.24, 1] }}
              onClick={() => setSelectedImage(index)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-white tracking-[0.3em] text-sm">VIEW PROJECT</span>
                </motion.div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl mb-2 group-hover:translate-x-2 transition-transform duration-500">
                    {image.title}
                  </h3>
                  <p className="text-white/40">{image.category}</p>
                </div>
                <span className="text-white/40">{image.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 w-16 h-16 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-all duration-300 z-10"
            >
              <X size={24} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-8 w-16 h-16 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-all duration-300 z-10"
            >
              <ArrowLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-8 w-16 h-16 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-all duration-300 z-10"
            >
              <ArrowRight size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="max-w-6xl w-full px-8"
            >
              <div className="relative aspect-[16/10] mb-8">
                <ImageWithFallback
                  src={galleryImages[selectedImage].url}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-5xl mb-3">{galleryImages[selectedImage].title}</h2>
                  <p className="text-white/40 text-xl">{galleryImages[selectedImage].category}</p>
                </div>
                <span className="text-white/40 text-xl">{galleryImages[selectedImage].year}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
