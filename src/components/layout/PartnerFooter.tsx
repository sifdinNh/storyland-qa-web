import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/storyland-star-logo.png";

const PartnerFooter = () => {
  return (
    <footer className="bg-[#0F2547] py-16 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A3A77]/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo & Brand */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Storyland" className="h-12" />
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-white">
                Storyland
              </span>
              <span className="text-[#EFD3D9] text-sm font-medium">Partners Program</span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            <Link
              to="/"
              className="text-white/70 hover:text-white transition-colors font-medium"
            >
              Consumer App
            </Link>
            <Link
              to="/privacy"
              className="text-white/70 hover:text-white transition-colors font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-white/70 hover:text-white transition-colors font-medium"
            >
              Terms
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Instagram, href: "https://www.instagram.com/storylandapp/", label: "Instagram" },
              { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61579653697548", label: "Facebook" },
              { icon: Linkedin, href: "https://www.linkedin.com/company/storylandapp/", label: "LinkedIn" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#EFD3D9] hover:text-[#1A3A77] text-white/70 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/50 text-center">
            © {new Date().getFullYear()} Storyland. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PartnerFooter;
