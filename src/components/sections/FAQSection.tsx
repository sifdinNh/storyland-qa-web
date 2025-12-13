import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Storyland?",
    answer: "An app that creates personalized stories for your child using your real voice or the voices of your family.",
  },
  {
    question: "How does voice cloning work?",
    answer: "Record a quick 30-second script. The app clones your voice in minutes and uses it to tell unlimited personalized stories.",
  },
  {
    question: "Is it safe and private?",
    answer: "Yes. All voices stay encrypted, private, and only usable inside your account. Your data is never shared.",
  },
  {
    question: "Is it for the whole family?",
    answer: "One account works for multiple kids and voice profiles. Family members can even record from abroad.",
  },
  {
    question: "How do stories work?",
    answer: "Choose a theme or type a short idea—Storyland generates the full story with images. Stories adapt to your child's preferences, culture, and can be saved for offline play.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. No long-term commitments. Cancel whenever you want.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section ref={ref} className="relative py-14 md:py-18 lg:py-20 overflow-hidden">
      {/* Pastel gradient background - seamless transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E3F2FD]/30 via-background to-[#F3E8FF]/40" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-3 md:mb-4">
            Questions & Answers
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
            Quick answers to common questions
          </p>
        </motion.div>

        {/* FAQ Grid - 1 column on mobile, 2 columns on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-x-6 gap-y-2 md:gap-y-3">
            <AnimatePresence>
              {visibleFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-b border-border/40 pb-1"
                  >
                    <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:no-underline py-4 min-h-[52px] [&[data-state=open]>svg]:rotate-180">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm md:text-base pb-4 pt-0">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </Accordion>

          {/* Show More Button */}
          {!showAll && faqs.length > 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-center mt-6"
            >
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 text-sm md:text-base text-primary font-semibold hover:underline transition-colors min-h-[44px] px-4"
              >
                View all questions
                <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-center mt-8 md:mt-10"
        >
          <p className="text-sm md:text-base text-muted-foreground">
            Still curious?{" "}
            <a href="mailto:hello@storylandapp.ai" className="text-primary font-semibold hover:underline">
              Ask us anything
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
