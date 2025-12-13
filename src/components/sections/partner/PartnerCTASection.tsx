import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Sparkles, Heart, Star, Users } from "lucide-react";

const PartnerCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-[#1A3A77] via-[#1A3A77] to-[#2A4A87] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      <div className="absolute top-10 right-[10%] w-64 h-64 bg-[#EFD3D9]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-[10%] w-80 h-80 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Decorative Visual - Icons floating */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Central circle */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#EFD3D9]/20 border border-[#EFD3D9]/30 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-[#EFD3D9]" />
                </div>
              </motion.div>
              
              {/* Floating icons */}
              {[
                { Icon: Heart, angle: 0, delay: 0 },
                { Icon: Star, angle: 120, delay: 0.3 },
                { Icon: Users, angle: 240, delay: 0.6 },
              ].map(({ Icon, angle, delay }, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`,
                    top: `${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay }}
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#EFD3D9]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#EFD3D9]" />
              <span className="text-white/80 text-sm font-medium">Partner with us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Ready to Explore Together?
            </h2>
            
            <p className="text-lg text-white/70 mb-8 max-w-md mx-auto lg:mx-0">
              Let's create magical experiences for your nursery. No commitment, just a friendly conversation.
            </p>

            {!submitted ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="max-w-md mx-auto lg:mx-0 mb-6"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your work email"
                    required
                    className="flex-1 px-6 py-4 rounded-2xl border-2 border-white/20 focus:border-white/50 focus:outline-none transition-colors text-white placeholder:text-white/50 bg-white/10 backdrop-blur-sm min-h-[52px]"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-[#EFD3D9] text-[#1A3A77] px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-lg min-h-[52px]"
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-2xl mb-6 inline-flex items-center gap-2 font-medium"
              >
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                Thank you! We'll be in touch soon.
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-white/60"
            >
              or email us at{" "}
              <a 
                href="mailto:hello@storylandapp.ai" 
                className="text-[#EFD3D9] font-medium underline hover:no-underline"
              >
                hello@storylandapp.ai
              </a>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTASection;
