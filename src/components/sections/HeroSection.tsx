import { motion } from "framer-motion";
import { Play, Star, ArrowDown } from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";
import storylandLogo from "@/assets/storyland-star-logo.png";
import { MagicParticles } from "@/components/effects/MagicParticles";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { useConfetti } from "@/hooks/useConfetti";
import { AppleLogo } from "@/components/icons/AppleLogo";

export function HeroSection() {
  const { triggerConfetti } = useConfetti();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Cursor Glow Effect */}
      <CursorGlow />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroFamily}
          alt="Family reading story together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-primary/30" />
      </div>

      {/* Magic Particles - reduced on mobile */}
      <MagicParticles count={35} />

      {/* Floating elements - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] text-4xl md:text-6xl"
        >
          ✨
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] right-[25%] text-3xl md:text-5xl"
        >
          📖
        </motion.div>
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[30%] right-[10%] text-2xl md:text-4xl"
        >
          🌟
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Badge with Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <span className="inline-flex items-center gap-2 md:gap-2.5 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-semibold">
              <img src={storylandLogo} alt="" className="w-5 h-5 md:w-6 md:h-6 rounded-md" />
              Stories that come alive
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-4 md:mb-6 text-white"
          >
            Be part of
            <br />
            <span className="text-secondary">their story</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-3 md:mb-4 font-bold"
          >
            Create. Spark. Connect.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-white/80 mb-8 md:mb-10 max-w-xl leading-relaxed"
          >
            Bring families closer together through storytelling
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4"
          >
            <motion.a
              href="https://apps.apple.com/lb/app/storyland-family-stories/id6749536560"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={triggerConfetti}
              className="group flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 bg-white text-primary font-bold rounded-2xl shadow-2xl shadow-black/20 min-h-[52px]"
            >
              <AppleLogo className="w-7 h-7 md:w-8 md:h-8" />
              <div className="text-left">
                <div className="text-xs opacity-70">Get it on</div>
                <div className="text-sm md:text-base">App Store</div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 bg-white/15 backdrop-blur-md text-white font-bold rounded-2xl border border-white/30 min-h-[52px]"
            >
              <Play className="w-7 h-7 md:w-8 md:h-8 fill-white" />
              <div className="text-left">
                <div className="text-xs opacity-70">Coming soon on</div>
                <div className="text-sm md:text-base">Google Play</div>
              </div>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 md:mt-12 flex flex-wrap items-center gap-4 md:gap-6 text-white/80"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 font-semibold text-sm md:text-base">4.9</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full" />
            <span className="font-semibold text-sm md:text-base">10K+ Happy Families</span>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-6 md:mt-8 flex flex-wrap items-center gap-3 md:gap-4"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs md:text-sm font-medium text-white/90">100% Safe for Kids</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs md:text-sm font-medium text-white/90">Privacy First</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs md:text-sm font-medium text-white/90">No Ads Ever</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-sm font-medium">Scroll down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
