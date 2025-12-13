import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import magicalChild from "@/assets/magical-reading-child.png";

const PartnerHeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToIdeas = () => {
    document.querySelector("#ideas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[#EFD3D9]/20 to-[#EFD3D9]/40">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#EFD3D9]/30 to-[#1A3A77]/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#1A3A77]/10 to-[#EFD3D9]/20 blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text Content - Left Side */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#1A3A77]">
                Now Partnering with Nurseries
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-[#1A3A77] leading-tight mb-6"
            >
              Transform Your Nursery Into a{" "}
              <span className="relative">
                <span className="relative z-10">Magical</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-[#EFD3D9] -z-0"
                />
              </span>{" "}
              Experience
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg text-[#1A3A77]/70 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Partner with Storyland to create unforgettable, personalized
              moments that strengthen the bond between your nursery, children,
              and their families.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToContact}
                className="bg-[#1A3A77] text-white px-6 py-3 rounded-full font-medium text-sm flex items-center justify-center gap-1.5 transition-all min-h-[48px]"
              >
                Get in Touch
                <ArrowRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToIdeas}
                className="bg-white/80 text-[#1A3A77] px-6 py-3 rounded-full font-medium text-sm border border-[#1A3A77]/20 hover:bg-white transition-colors min-h-[48px]"
              >
                See Ideas
              </motion.button>
            </motion.div>
          </div>

          {/* Featured Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 relative flex justify-center"
          >
            <motion.img
              src={magicalChild}
              alt="Child enjoying magical stories"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[320px] md:max-w-md lg:max-w-lg rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#1A3A77]/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-[#1A3A77]/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PartnerHeroSection;
