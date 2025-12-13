import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Heart, Clock, TrendingUp, Shield, Users, Star } from "lucide-react";
import bedroomScene from "@/assets/bedroom-scene.jpg";

const stats = [
  { value: 95, suffix: "%", label: "Parent Satisfaction", icon: Heart },
  { value: 3, suffix: "x", label: "Engagement Boost", icon: TrendingUp },
  { value: 5, suffix: "+", label: "Hours Saved Weekly", icon: Clock },
];

const benefits = [
  { icon: Star, label: "Stand out from competitors" },
  { icon: Users, label: "Strengthen parent relationships" },
  { icon: Shield, label: "Safe & secure platform" },
];

const AnimatedCounter = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const PartnerValueSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="value" className="py-20 md:py-28 lg:py-32 bg-[#1A3A77] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-[#EFD3D9]"
        />
        <motion.div
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.1, 0.05, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-white"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#1A3A77] bg-[#EFD3D9] px-4 py-1.5 rounded-full mb-4">
            The Storyland Effect
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Why Nurseries Love Us
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            Join nurseries that are transforming how they connect with families
          </p>
        </motion.div>

        {/* Two column: Stats + Image */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-5xl mx-auto mb-12 md:mb-16">
          {/* Stats */}
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-5 md:p-6 text-center border border-white/10 hover:bg-white/15 transition-colors">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                        className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#EFD3D9] mb-3"
                      >
                        <Icon className="text-[#1A3A77]" size={22} />
                      </motion.div>
                      <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-1">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                      </div>
                      <div className="text-white/60 font-medium text-sm md:text-base">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <motion.img
              src={bedroomScene}
              alt="Child's bedroom with magical atmosphere"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[240px] md:max-w-xs rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>

        {/* Benefits as floating tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 md:px-5 py-2.5 md:py-3 rounded-full border border-white/20"
              >
                <Icon className="text-[#EFD3D9]" size={16} />
                <span className="text-white font-medium text-sm md:text-base">{benefit.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-3xl mx-auto mt-12 md:mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-white/10">
            <div className="text-3xl md:text-4xl mb-4">💬</div>
            <blockquote className="text-lg md:text-xl lg:text-2xl text-white/90 font-display italic leading-relaxed mb-6">
              "Storyland transformed how we connect with our families. Parents love receiving personalized stories featuring their children."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#EFD3D9] flex items-center justify-center text-[#1A3A77] font-bold">
                N
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm md:text-base">Nursery Partner</div>
                <div className="text-white/50 text-xs md:text-sm">Early Adopter</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerValueSection;
