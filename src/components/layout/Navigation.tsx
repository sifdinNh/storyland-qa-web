import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { MagicButton } from "../ui/MagicButton";
import storylandLogo from "@/assets/storyland-star-logo.png";

const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Why Storyland", href: "/#why-storyland" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Partner", href: "/partner", isRoute: true },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.filter(link => !link.isRoute).map(link => {
        const href = link.href;
        return href.includes('#') ? href.split('#')[1] : href.substring(1);
      });
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Progress bar */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"
        style={{ width: progressWidth }}
      />

      <div className="mx-2 md:mx-4 mt-2 md:mt-4">
        <motion.div
          className={`backdrop-blur-lg border rounded-xl md:rounded-2xl shadow-sm px-4 md:px-6 py-3 md:py-4 flex items-center justify-between max-w-7xl mx-auto transition-all duration-300 ${
            scrolled
              ? "bg-card/98 border-border shadow-lg"
              : "bg-card/80 border-border/50"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <motion.img
              src={storylandLogo}
              alt="Storyland"
              whileHover={{ rotate: 10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="text-lg md:text-xl font-bold text-primary">Storyland</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.includes('#') ? link.href.split('#')[1] : '';
              const isActive = !link.isRoute && activeSection === sectionId;
              return link.isRoute ? (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="relative font-medium text-muted-foreground hover:text-foreground transition-colors bg-accent/50 px-3 py-1 rounded-full text-sm"
                >
                  {link.label}
                </motion.a>
              ) : (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className={`relative font-medium transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <MagicButton
              variant="primary"
              size="sm"
              onClick={() => window.location.href = '/#pricing'}
            >
              Join Storyland
            </MagicButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu Backdrop */}
      <motion.div
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
        style={{ top: "80px" }}
      />

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -10
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="md:hidden overflow-hidden relative z-50"
      >
        <div className="mx-2 mt-2">
          <div className="bg-background dark:bg-card border border-border rounded-xl shadow-xl p-4 flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={false}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20
                }}
                transition={{
                  duration: 0.2,
                  delay: isOpen ? index * 0.05 : 0
                }}
                className={`text-foreground hover:text-primary transition-colors font-medium py-3 px-3 min-h-[48px] flex items-center rounded-lg hover:bg-accent/30 ${
                  link.isRoute ? "text-primary font-semibold" : ""
                }`}
              >
                {link.label}
                {link.isRoute && <span className="ml-2 text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">B2B</span>}
              </motion.a>
            ))}
            <motion.div
              initial={false}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 10
              }}
              transition={{ duration: 0.2, delay: isOpen ? 0.25 : 0 }}
            >
              <MagicButton
                variant="primary"
                size="md"
                className="w-full mt-3 min-h-[48px]"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = '/#pricing';
                }}
              >
                Join Storyland
              </MagicButton>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
