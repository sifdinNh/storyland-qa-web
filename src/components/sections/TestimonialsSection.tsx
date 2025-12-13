import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import fatherChild from "@/assets/father-child-reading.png";

const testimonials = [
  {
    quote: "My daughter asks for a new story every night. She loves hearing her name in the adventures!",
    author: "Sarah M.",
    role: "Mom of 2",
  },
  {
    quote: "Even when I travel for work, my kids still hear stories in my voice. It keeps us connected.",
    author: "David K.",
    role: "Dad",
  },
  {
    quote: "My son's face lights up every time he hears grandma's voice telling him a story. Priceless!",
    author: "Emma L.",
    role: "Mom",
  },
  {
    quote: "We recorded my father's voice before he passed. Now my kids can hear grandpa's stories forever.",
    author: "Michael R.",
    role: "Dad of 3",
  },
  {
    quote: "The stories in Spanish help my kids stay connected to our culture. So grateful for this app!",
    author: "Maria G.",
    role: "Mom",
  },
  {
    quote: "My twins fight over who gets to pick the next story. Best problem to have!",
    author: "Jennifer T.",
    role: "Mom of twins",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-storyland" ref={ref} className="relative py-14 md:py-18 lg:py-20 overflow-hidden">
      {/* Pastel gradient background - seamless transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FCE4EC]/50 via-background to-[#E3F2FD]/40" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-3 md:mb-4">
            Loved by Families
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
            Join thousands of happy parents
          </p>
        </motion.div>

        {/* Two-column layout: Image + Carousel */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Family Image - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="hidden lg:flex w-full lg:w-2/5 justify-center"
          >
            <motion.img
              src={fatherChild}
              alt="Father reading to child"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-xs md:max-w-sm rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full lg:w-3/5"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-3 md:-ml-4">
                {testimonials.map((item, index) => (
                  <CarouselItem key={index} className="pl-3 md:pl-4 basis-full md:basis-1/2">
                    <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg border border-border/30 h-full">
                      {/* Stars */}
                      <div className="flex gap-1 mb-3 md:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-foreground text-base md:text-lg leading-relaxed mb-4 md:mb-5">
                        "{item.quote}"
                      </p>

                      {/* Author */}
                      <div className="text-sm md:text-base">
                        <span className="font-bold text-foreground">{item.author}</span>
                        <span className="text-muted-foreground"> · {item.role}</span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-4 mt-6">
                <CarouselPrevious className="static translate-y-0 min-h-[44px] min-w-[44px]" />
                <CarouselNext className="static translate-y-0 min-h-[44px] min-w-[44px]" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
