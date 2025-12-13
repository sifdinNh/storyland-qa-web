import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [hasShown, setHasShown] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if already shown this session
    const alreadyShown = localStorage.getItem("exitIntentShown");
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem("exitIntentShown", "true");
      }
    };

    // Only add listener after a delay to avoid triggering immediately
    const timeout = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list!",
        description: "We'll keep you updated on Storyland news.",
      });
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                       w-full max-w-md mx-4 bg-card border border-border rounded-2xl
                       p-8 shadow-2xl z-50"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground
                        hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring" }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10
                          flex items-center justify-center"
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                Wait, don't go!
              </h3>
              <p className="text-muted-foreground mb-6">
                Get exclusive updates and early access to new features. Join thousands of families already on our list!
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-center"
                  required
                />
                <Button type="submit" className="w-full h-12">
                  Keep Me Updated
                </Button>
              </form>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm text-muted-foreground hover:text-foreground
                          transition-colors"
              >
                No thanks, I'll explore on my own
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
