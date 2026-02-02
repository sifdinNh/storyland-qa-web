import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star } from "lucide-react";

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [billingPeriod, setBillingPeriod] = useState<"yearly" | "monthly">("yearly");
  const [email, setEmail] = useState("");

  const plan = {
    yearly: {
      name: "Storyland Plus",
      price: "$89.99",
      period: "/year",
      monthlyEquivalent: "$7.50/month",
      description: "Unlock unlimited stories for your family",
      features: [
        "Unlimited personalized stories",
        "Unlimited voice clones",
        "Audio stories & songs",
        "One family account",
        "5% supports Children Cancer Center of Lebanon",
      ],
    },
    monthly: {
      name: "Storyland Plus",
      price: "$9.99",
      period: "/month",
      monthlyEquivalent: null,
      description: "Unlock unlimited stories for your family",
      features: [
        "60 monthly stars",
        "1 star = 1 minute of storytelling",
        "Stars never expire",
        "2 voice clones included",
        "5% supports Children Cancer Center of Lebanon",
      ],
    },
  };

  const currentPlan = plan[billingPeriod];

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleGetStarted = () => {
    if (!isValidEmail(email)) return;
    const encodedEmail = encodeURIComponent(email);
    const packageId = billingPeriod === "yearly" ? "plus_yearly" : "plus_monthly";
    const paymentUrl = `https://pay.rev.cat/sandbox/lelnbclqddvxkzvh/${encodedEmail}/checkout?package_id=${packageId}`;
    window.open(paymentUrl, "_self");
  };

  const emailIsValid = isValidEmail(email);

  return (
    <section id="pricing" ref={ref} className="relative py-14 md:py-18 lg:py-20 overflow-hidden">
      {/* Pastel gradient background - seamless from HowStorylandWorks */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8E7]/50 via-background to-[#FCE4EC]/40" />

      {/* Subtle grid pattern - hidden on mobile */}
      <div
        className="absolute inset-0 opacity-[0.06] hidden md:block"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Floating soft shapes - hidden on mobile */}
      <div className="absolute top-32 left-[8%] w-56 h-56 bg-primary/10 rounded-full blur-3xl hidden md:block" />
      <div className="absolute bottom-24 right-[12%] w-72 h-72 bg-secondary/40 rounded-full blur-3xl hidden md:block" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-3 md:mb-4">
            Choose Your Plan
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto px-4">
            Create personalized stories using your own voice or the voices of your loved ones.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-6 md:mb-8"
        >
          <div className="inline-flex items-center bg-muted rounded-full p-1">
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`relative px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold transition-all text-sm md:text-base min-h-[44px] ${billingPeriod === "yearly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Yearly
              {billingPeriod === "yearly" && (
                <span className="ml-1 md:ml-2 px-1.5 md:px-2 py-0.5 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
                  17% off
                </span>
              )}
            </button>
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold transition-all text-sm md:text-base min-h-[44px] ${billingPeriod === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Monthly
            </button>
          </div>
        </motion.div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-xl mx-auto mb-8 md:mb-10"
        >
          <div className="bg-amber-50 border border-amber-200 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 flex items-start md:items-center gap-3">
            <span className="text-xl md:text-2xl">💡</span>
            <p className="text-foreground text-sm md:text-base">
              <strong>Pay on this page</strong> and <strong>get instant access.</strong> Just sign in after payment to start using the app.
            </p>
          </div>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="max-w-md mx-auto"
        >
          <div className="h-full rounded-2xl md:rounded-3xl p-5 md:p-8 bg-card border-2 border-primary shadow-xl">
            {/* Plan name */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
              {currentPlan.name}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg mb-4 md:mb-6">
              {currentPlan.description}
            </p>

            {/* Price */}
            <div className="mb-4 md:mb-6">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                {currentPlan.price}
              </span>
              <span className="text-base md:text-lg text-muted-foreground">{currentPlan.period}</span>
              {currentPlan.monthlyEquivalent && (
                <span className="ml-2 text-sm text-muted-foreground">
                  ({currentPlan.monthlyEquivalent})
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-border mb-4 md:mb-6" />

            {/* Features */}
            <ul className="space-y-3 md:space-y-4">
              {currentPlan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 md:gap-3">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-amber-500 fill-amber-500 flex-shrink-0" />
                  <span className="text-foreground text-sm md:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Email signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-md mx-auto mt-10 md:mt-12 px-4 md:px-0"
        >
          <div className="space-y-3 md:space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 md:px-6 py-3.5 md:py-4 rounded-xl md:rounded-2xl bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground text-base min-h-[48px]"
            />
            <motion.button
              onClick={handleGetStarted}
              disabled={!emailIsValid}
              whileHover={emailIsValid ? { scale: 1.02 } : {}}
              whileTap={emailIsValid ? { scale: 0.98 } : {}}
              className={`w-full py-3.5 md:py-4 font-bold rounded-xl md:rounded-2xl shadow-lg transition-colors text-base min-h-[48px] ${emailIsValid
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
            >
              Get started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
