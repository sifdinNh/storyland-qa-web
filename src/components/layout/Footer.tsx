import { motion } from "framer-motion";
import { Heart, Instagram, Facebook, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import storylandLogo from "@/assets/storyland-star-logo.png";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Thanks for subscribing!");
    setEmail("");
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/storylandapp/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61579653697548", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/storylandapp/", label: "LinkedIn" },
  ];

  return (
    <footer className="relative py-12 md:py-16 bg-gradient-to-t from-secondary/10 to-transparent border-t border-border/20">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="max-w-xl mx-auto mb-12 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            Stay in the Story
          </h3>
          <p className="text-muted-foreground mb-6 text-sm md:text-base">
            Get magical updates, new features, and storytelling tips delivered to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
              required
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                />
              ) : (
                <>
                  Subscribe
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>
        </div>

        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <img src={storylandLogo} alt="Storyland" className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl shadow-md" />
            <span className="text-lg md:text-xl font-bold text-foreground">Storyland</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2 min-h-[44px] flex items-center">Privacy</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2 min-h-[44px] flex items-center">Terms</Link>
            <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2 min-h-[44px] flex items-center">Support</Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Made with love */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-accent fill-accent" />
            </motion.span>
            for families
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/10 text-center text-xs md:text-sm text-muted-foreground/70">
          © {new Date().getFullYear()} Storyland. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
