import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MagicButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const MagicButton = forwardRef<HTMLButtonElement, MagicButtonProps>(
  ({ className, variant = "primary", size = "md", children, onClick, disabled, type = "button" }, ref) => {
    const baseStyles = "relative overflow-hidden font-quicksand font-semibold rounded-full transition-all duration-300 ease-out inline-flex items-center justify-center gap-2";

    const variants = {
      primary: "bg-secondary text-secondary-foreground hover:shadow-[0_0_40px_hsl(40_90%_55%/0.5)] hover:scale-105",
      secondary: "bg-primary/80 text-primary-foreground border border-secondary/30 hover:bg-primary hover:border-secondary/60 hover:shadow-[0_0_30px_hsl(40_90%_55%/0.3)]",
      ghost: "bg-transparent text-foreground border border-foreground/20 hover:bg-foreground/10 hover:border-foreground/40",
      glow: "bg-gradient-to-r from-secondary via-coral to-accent text-secondary-foreground animate-glow-pulse hover:scale-105",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
      </motion.button>
    );
  }
);

MagicButton.displayName = "MagicButton";

export { MagicButton };
