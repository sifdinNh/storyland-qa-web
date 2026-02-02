import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AppleLogo } from "@/components/icons/AppleLogo";
import { Play } from "lucide-react";
import familyReading from "@/assets/family-reading-together.png";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-14 md:py-20 lg:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-primary/80" />

      {/* Subtle pattern overlay - hidden on mobile */}
      <div
        className="absolute inset-0 opacity-10 hidden md:block"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating soft shapes - hidden on mobile */}
      <div className="absolute top-10 left-[5%] w-64 h-64 bg-white/10 rounded-full blur-3xl hidden md:block" />
      <div className="absolute bottom-10 right-[10%] w-80 h-80 bg-white/10 rounded-full blur-3xl hidden md:block" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Family Reading Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative w-full lg:w-1/2 flex justify-center"
          >
            <motion.img
              src={familyReading}
              alt="Family reading stories together"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[280px] md:max-w-md lg:max-w-lg rounded-2xl md:rounded-3xl"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4 md:mb-5">
              Start Their Story Tonight
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10">
              Download Storyland and create your first personalized story in minutes.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
              <motion.a
                href="https://apps.apple.com/lb/app/storyland-family-stories/id6749536560"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 bg-white text-foreground font-bold rounded-xl md:rounded-2xl shadow-2xl hover:shadow-xl transition-all min-h-[52px]"
              >
                <AppleLogo className="w-6 h-6 md:w-7 md:h-7" />
                <div className="text-left">
                  <div className="text-xs opacity-70">Download on the</div>
                  <div className="text-base md:text-lg font-bold -mt-1">App Store</div>
                </div>
              </motion.a>

              <motion.a
                href="https://play.google.com/store/apps/details?id=com.storylandapp.storyland1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 bg-white/15 backdrop-blur-md text-white font-bold rounded-xl md:rounded-2xl border border-white/30 hover:bg-white/25 transition-all min-h-[52px]"
              >
                <Play className="w-6 h-6 md:w-7 md:h-7 fill-white" />
                <div className="text-left">
                  <div className="text-xs opacity-70">Get it on</div>
                  <div className="text-base md:text-lg font-bold -mt-1">Google Play</div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
