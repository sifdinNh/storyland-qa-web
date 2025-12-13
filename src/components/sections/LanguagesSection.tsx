import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const languages = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    greeting: "Once upon a time...",
    flag: "🇬🇧",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    greeting: "Il était une fois...",
    flag: "🇫🇷",
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    greeting: "كان يا ما كان...",
    flag: "🇸🇦",
    rtl: true,
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    greeting: "Érase una vez...",
    flag: "🇪🇸",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export function LanguagesSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 via-secondary/10 to-[#FFF8E7]/70 relative overflow-hidden">
      {/* Animated floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 8, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[8%] text-4xl md:text-5xl opacity-60"
        >
          📚
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[12%] text-3xl md:text-4xl opacity-50"
        >
          🌍
        </motion.div>
        <motion.div
          animate={{ y: [0, -18, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[25%] right-[8%] text-3xl md:text-4xl opacity-50"
        >
          ✨
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[30%] left-[15%] text-2xl md:text-3xl opacity-40"
        >
          💫
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 text-primary mb-5"
          >
            <Globe className="w-7 h-7 md:w-8 md:h-8" />
          </motion.div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Stories in Every Language
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Connect with your children in your native language. Storyland speaks the language of your heart.
          </p>
        </motion.div>

        {/* Language Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-4xl mx-auto"
        >
          {languages.map((lang, index) => (
            <motion.div
              key={lang.code}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)"
              }}
              className="group relative perspective-1000"
            >
              <div className="bg-card border border-border/40 rounded-2xl p-5 md:p-6 text-center hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Flag with bounce animation */}
                <motion.span
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  className="text-4xl md:text-5xl block mb-4 relative z-10"
                >
                  {lang.flag}
                </motion.span>

                {/* Language Name */}
                <h3 className="font-bold text-foreground text-lg md:text-xl mb-1 relative z-10">
                  {lang.nativeName}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 relative z-10">
                  {lang.name}
                </p>

                {/* Greeting with typewriter-like effect */}
                <motion.div
                  className={`text-sm md:text-base text-primary/80 italic font-medium relative z-10 ${lang.rtl ? 'font-arabic' : ''}`}
                  dir={lang.rtl ? 'rtl' : 'ltr'}
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                >
                  "{lang.greeting}"
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 md:mt-10 text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-border/30 text-sm font-medium shadow-sm">
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-500"
            />
            More languages coming soon
          </span>
        </motion.p>
      </div>
    </section>
  );
}
