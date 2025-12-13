import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import familyCouch from "@/assets/family-couch-reading.png";
import childMagical from "@/assets/child-magical-scene.png";

const steps = [
  { number: "1", title: "Pick a Child", description: "Add your child's name and details" },
  { number: "2", title: "Prompt a Story", description: "Choose a theme or write your own" },
  { number: "3", title: "Add Your Voice", description: "Record once, use forever" },
  { number: "4", title: "Create Forever", description: "Unlimited personalized stories" },
];

const benefits = [
  "Your child's name in every story",
  "Mom, dad, or grandma's voice",
  "English, Spanish, French & more",
  "Smart stories that grow with your child",
  "100% safe – no ads, no scary stuff",
  "Each story is one-of-a-kind",
];

export function HowStorylandWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="relative py-14 md:py-20 lg:py-24 overflow-hidden">
      {/* Pastel gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8E7]/70 via-white to-[#F3E8FF]/50" />

      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] hidden md:block"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1A3A77 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Floating soft shapes - hidden on mobile */}
      <div className="absolute top-20 left-[10%] w-64 h-64 bg-[#FCE4EC]/40 rounded-full blur-3xl hidden md:block" />
      <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-[#E3F2FD]/40 rounded-full blur-3xl hidden md:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E8F4F2]/30 rounded-full blur-3xl hidden lg:block" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-3 md:mb-4">
            How Storyland Works
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto">
            Four simple steps to magical stories
          </p>
        </motion.div>

        {/* How It Works: Two-column layout with image */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-5xl mx-auto mb-16 md:mb-20">
          {/* Steps */}
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl bg-background/60 backdrop-blur-sm"
                >
                  {/* Number Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg md:text-2xl font-bold mb-3 md:mb-4 shadow-lg"
                  >
                    {step.number}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-foreground mb-1 md:mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Family Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <motion.img
              src={familyCouch}
              alt="Family reading together on couch"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[280px] md:max-w-xs lg:max-w-sm rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-16 md:w-24 h-1 bg-primary/30 rounded-full mx-auto mb-10 md:mb-16"
        />

        {/* What You Get: Two-column layout with image */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Child Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <motion.img
              src={childMagical}
              alt="Child in magical scene"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-full max-w-[280px] md:max-w-xs lg:max-w-sm rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Benefits */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center lg:text-left mb-6 md:mb-10"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                What You Get
              </h3>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-background/50 backdrop-blur-sm"
                >
                  <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm md:text-base lg:text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
