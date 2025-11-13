import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const projectTypes = ['Residential', 'Commercial', 'Hospitality', 'Office', 'Retail'];
  const budgets = ['$50k - $100k', '$100k - $250k', '$250k - $500k', '$500k+'];

  return (
    <div className="pt-40 pb-32 min-h-screen">
      {/* Header */}
      <div className="px-8 lg:px-16 mb-32">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="text-white/40 tracking-[0.3em] text-sm mb-6 block">GET IN TOUCH</span>
            <h1 className="text-[clamp(2.5rem,8vw,10rem)] leading-[0.9] tracking-[-0.04em] mb-8">
              LET'S CREATE
              <br />
              <span className="text-white/30">TOGETHER</span>
            </h1>
            <p className="text-white/60 text-2xl max-w-3xl leading-relaxed">
              Ready to transform your vision into reality? Share your project details 
              and let's begin crafting something extraordinary.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form Section */}
      <div className="px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
              className="lg:col-span-4 space-y-16"
            >
              <div>
                <h3 className="text-white/40 tracking-[0.3em] text-sm mb-6">EMAIL</h3>
                <a href="mailto:hello@interieur.design" className="text-2xl hover:text-white/60 transition-colors">
                  hello@interieur.design
                </a>
              </div>
              <div>
                <h3 className="text-white/40 tracking-[0.3em] text-sm mb-6">PHONE</h3>
                <a href="tel:+15551234567" className="text-2xl hover:text-white/60 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div>
                <h3 className="text-white/40 tracking-[0.3em] text-sm mb-6">LOCATION</h3>
                <p className="text-2xl">
                  Ansal Plaza, G. Noida
                  <br />
                  U.P.
                </p>
              </div>
              <div>
                <h3 className="text-white/40 tracking-[0.3em] text-sm mb-6">SOCIAL</h3>
                <div className="space-y-4">
                  {['Instagram', 'Behance', 'LinkedIn'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="block text-xl hover:text-white/60 transition-colors hover:translate-x-2 duration-300"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="lg:col-span-8"
            >
              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b border-white/20 pb-4 text-2xl placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                      required
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === 'name' ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                      style={{ originX: 0 }}
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b border-white/20 pb-4 text-2xl placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                      required
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === 'email' ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                      style={{ originX: 0 }}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-2xl placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === 'phone' ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    style={{ originX: 0 }}
                  />
                </div>

                {/* Project Type */}
                <div>
                  <h3 className="text-white/40 tracking-[0.3em] text-sm mb-6">PROJECT TYPE</h3>
                  <div className="flex flex-wrap gap-4">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-8 py-4 border transition-all duration-300 ${
                          formData.projectType === type
                            ? 'bg-white text-black border-white'
                            : 'border-white/20 hover:border-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <h3 className="text-white/40 tracking-[0.3em] text-sm mb-6">BUDGET RANGE</h3>
                  <div className="flex flex-wrap gap-4">
                    {budgets.map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget })}
                        className={`px-8 py-4 border transition-all duration-300 ${
                          formData.budget === budget
                            ? 'bg-white text-black border-white'
                            : 'border-white/20 hover:border-white'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-2xl placeholder:text-white/20 focus:outline-none focus:border-white transition-colors resize-none"
                    required
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === 'message' ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    style={{ originX: 0 }}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full md:w-auto px-16 py-8 bg-white text-black overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-black"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-4 group-hover:text-white transition-colors duration-300 tracking-wider text-xl">
                    SEND MESSAGE
                    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={24} />
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
