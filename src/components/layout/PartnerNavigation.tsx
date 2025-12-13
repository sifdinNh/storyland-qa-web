import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/storyland-star-logo.png";

const navLinks = [
  { label: "Ideas", href: "#ideas" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#value" },
  { label: "Contact", href: "#contact" },
];

const PartnerNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Storyland" className="h-8 md:h-10" />
              <span className="font-display text-xl font-bold text-[#1A3A77]">
                Storyland
              </span>
              <span className="text-xs font-medium text-[#1A3A77]/60 bg-[#EFD3D9] px-2 py-0.5 rounded-full">
                Partners
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-[#1A3A77] hover:text-[#1A3A77]/70 transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("#contact")}
                className="bg-[#1A3A77] text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-[#1A3A77]/90 transition-colors"
              >
                Get in Touch
              </motion.button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#1A3A77]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-[#1A3A77] font-medium py-2"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-[#1A3A77] text-white px-5 py-2.5 rounded-full font-medium text-sm"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default PartnerNavigation;
