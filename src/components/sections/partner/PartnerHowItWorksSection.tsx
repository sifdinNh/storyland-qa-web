import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "1",
    title: "Discovery",
    description: "We learn about your nursery",
    bgColor: "#E8F4F2",
    textColor: "#2D5A4E",
  },
  {
    number: "2",
    title: "Ideas",
    description: "Brainstorm solutions together",
    bgColor: "#FCE4EC",
    textColor: "#8B4A5E",
  },
  {
    number: "3",
    title: "Build",
    description: "We craft your experience",
    bgColor: "#FFF8E7",
    textColor: "#7D6B3A",
  },
  {
    number: "4",
    title: "Launch",
    description: "Go live with support",
    bgColor: "#F3E8FF",
    textColor: "#5B4178",
  },
];

const PartnerHowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-sm font-semibold text-[#1A3A77] bg-[#EFD3D9]/50 px-4 py-1.5 rounded-full mb-3">
            Simple Process
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-[#1A3A77]">
            How It Works
          </h2>
        </motion.div>

        {/* Horizontal Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative rounded-3xl p-5 text-center"
                style={{ backgroundColor: step.bgColor }}
              >
                {/* Number badge */}
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg"
                  style={{ backgroundColor: step.textColor }}
                >
                  {step.number}
                </div>

                <h3 
                  className="text-base md:text-lg font-display font-bold mb-1"
                  style={{ color: step.textColor }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-xs md:text-sm opacity-80"
                  style={{ color: step.textColor }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerHowItWorksSection;
