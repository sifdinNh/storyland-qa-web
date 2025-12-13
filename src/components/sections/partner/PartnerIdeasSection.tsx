import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Megaphone, Users, Tag, Gift, Calendar, TrendingUp } from "lucide-react";

const ideas = [
  {
    title: "Clone Teacher Voices",
    description: "Personalized audio stories using your teachers' voices.",
    bgColor: "#E8F4F2",
    textColor: "#2D5A4E",
  },
  {
    title: "Exclusive Discounts",
    description: "Offer special registration discounts to enrolled families.",
    bgColor: "#FCE4EC",
    textColor: "#8B4A5E",
  },
  {
    title: "Brand Visibility",
    description: "Your nursery logo featured across the app for your families.",
    bgColor: "#FFF8E7",
    textColor: "#7D6B3A",
  },
  {
    title: "Co-Branded Stories",
    description: "Custom stories featuring your nursery name and characters.",
    bgColor: "#F3E8FF",
    textColor: "#5B4178",
  },
  {
    title: "Event Promotions",
    description: "Promote open days, events, and special offers to families.",
    bgColor: "#E3F2FD",
    textColor: "#3A5A7C",
  },
  {
    title: "Referral Programs",
    description: "Incentivize families to refer friends with exclusive perks.",
    bgColor: "#FFECE5",
    textColor: "#8B5A4A",
  },
];

const marketingBenefits = [
  { icon: Users, text: "10,000+ active families" },
  { icon: Megaphone, text: "Direct marketing channel" },
  { icon: Tag, text: "Exclusive discount codes" },
  { icon: Gift, text: "Premium perks for parents" },
  { icon: Calendar, text: "Seasonal campaigns" },
  { icon: TrendingUp, text: "Engagement analytics" },
];

const PartnerIdeasSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ideas" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="inline-block text-sm font-semibold text-[#1A3A77] bg-[#EFD3D9]/50 px-4 py-1.5 rounded-full mb-3">
            What We Can Build Together
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-[#1A3A77] mb-3">
            Ideas That Spark Joy
          </h2>
          <p className="text-sm md:text-base text-[#1A3A77]/60 max-w-xl mx-auto">
            Every nursery is unique. Here are just some of the ways we can create magic together.
          </p>
        </motion.div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto mb-16">
          {ideas.map((idea, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
              className="rounded-2xl md:rounded-3xl p-4 md:p-5 cursor-pointer"
              style={{ backgroundColor: idea.bgColor }}
            >
              <h3 
                className="text-sm md:text-base font-display font-bold mb-1 md:mb-2"
                style={{ color: idea.textColor }}
              >
                {idea.title}
              </h3>
              
              <p 
                className="text-xs md:text-sm leading-relaxed opacity-75"
                style={{ color: idea.textColor }}
              >
                {idea.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Marketing Visibility Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#1A3A77] to-[#2A4A87] rounded-3xl p-6 md:p-10 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
            >
              <Megaphone className="w-4 h-4 text-[#EFD3D9]" />
              <span className="text-white/90 text-sm font-medium">Marketing Opportunity</span>
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
              Reach Thousands of Families
            </h3>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8">
              With 10,000+ active families on Storyland, your nursery gets direct access to engaged parents. 
              Promote your services, offer exclusive discounts, and build your brand within a trusted platform.
            </p>

            {/* Marketing Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {marketingBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2.5 md:py-3 rounded-xl border border-white/10"
                  >
                    <Icon className="w-4 h-4 text-[#EFD3D9] flex-shrink-0" />
                    <span className="text-white text-xs md:text-sm font-medium">{benefit.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-8 text-sm text-[#1A3A77]/50"
        >
          ...and many more possibilities tailored to your nursery's needs
        </motion.p>
      </div>
    </section>
  );
};

export default PartnerIdeasSection;
