import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Priya dharshini",
    role: "Regular Customer",
    rating: 5,
    review: "The mango juice is absolutely amazing. Super fresh and naturally sweet! Feels like drinking straight from an orchard in Ratnagiri.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    bgGradient: "from-orange-500 to-amber-500",
  },
  {
    id: 2,
    name: "Rahul John",
    role: "Food Lover",
    rating: 5,
    review: "Great variety, beautiful presentation, and quick service. Love SqueezJuice! The glass bottles and packaging are completely eco-friendly too.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    bgGradient: "from-amber-500 to-yellow-500",
  },
  {
    id: 3,
    name: "Ananya Sri",
    role: "IT Professional",
    rating: 5,
    review: "Their smoothies are a lifesaver during long WFH afternoons. The Berry Blast is my ultimate favorite energy booster for busy work days.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    bgGradient: "from-rose-500 to-orange-500",
  },
  {
    id: 4,
    name: "Vikram",
    role: "Fitness Enthusiast",
    rating: 5,
    review: "The Green Detox and Ginger Immunity shots are a total game-changer for my morning runs and post-workout recovery. Truly top tier quality!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    bgGradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    name: "Sneha",
    role: "Yoga Instructor",
    rating: 5,
    review: "You can actually taste the purity! No added sugars or preservatives, just pure raw fruit goodness. My students at the studio love ordering after class.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    bgGradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 6,
    name: "Arjun Varma",
    role: "Cafe Hopper",
    rating: 5,
    review: "Ordered the Citrus Cooler during a scorching Delhi afternoon and it was instantly refreshing. Super prompt delivery and chilled packaging!",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
    bgGradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 7,
    name: "Divya RS",
    role: "Nutritionist",
    rating: 5,
    review: "As a dietitian, I'm very picky about cold-pressed juices. SqueezJuice nails the nutrient balance without any sneaky artificial ingredients. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    bgGradient: "from-pink-500 to-rose-500",
  },
  {
    id: 8,
    name: "Karan Kumar",
    role: "Startup Founder",
    rating: 5,
    review: "We regularly stock our office fridge with their mixed fruit coolers. The team looks forward to our Friday healthy juice breaks every single week.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    bgGradient: "from-violet-500 to-purple-500",
  },
  {
    id: 9,
    name: "Meera ",
    role: "Home Baker",
    rating: 5,
    review: "The Watermelon Mint cooler is heavenly! Perfect companion to beat the humid Mumbai weather. Clean, hygienic, and consistently delicious.",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80",
    bgGradient: "from-teal-500 to-emerald-500",
  },
  {
    id: 10,
    name: "Aditya Raj",
    role: "College Student",
    rating: 5,
    review: "Pocket-friendly combos and insane taste. The Pineapple Coconut slushie is my go-to cheat treat after long college lectures.",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80",
    bgGradient: "from-amber-600 to-orange-600",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const current = reviews[currentIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/50 via-orange-50 to-orange-100/40 px-4 py-24 sm:px-6 lg:px-8 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[28rem] sm:h-[35rem] sm:w-[35rem] rounded-full bg-orange-400/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-full relative z-10">
        
        <div className="mb-12 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-extrabold uppercase tracking-[0.25em] text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-500/10 px-4 py-1.5 rounded-full text-xs"
          >
            💬 Customer Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-slate-900 dark:text-white"
          >
            Loved By Juice Lovers Across India
          </motion.h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            Discover why our community keeps coming back for their daily dose of freshness.
          </p>
        </div>

        <div className="relative rounded-[2.5rem] bg-white p-6 sm:p-12 shadow-2xl border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
          
          <div className="absolute top-8 right-8 sm:top-10 sm:right-12 text-6xl sm:text-8xl font-serif text-orange-100 dark:text-slate-800/50 pointer-events-none select-none">
            “
          </div>

          <div className="min-h-[220px] sm:min-h-[180px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <div className="flex gap-1 text-yellow-500 text-lg mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-base sm:text-xl font-medium leading-relaxed text-slate-700 dark:text-slate-200">
                  "{current.review}"
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              
              <div className="flex items-center gap-4">
                <div className={`h-14 w-14 rounded-2xl p-0.5 bg-gradient-to-tr ${current.bgGradient} shadow-md`}>
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="h-full w-full object-cover rounded-[14px]"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                    {current.name}
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-orange-600 dark:text-orange-400">
                    {current.role}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-end gap-4">
                <div className="flex items-center gap-1.5 overflow-x-auto max-w-[200px] py-1">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentIndex === idx
                          ? "w-6 bg-orange-500"
                          : "w-2 bg-slate-200 dark:bg-slate-700 hover:bg-orange-300"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevReview}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-orange-500 hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-orange-500 transition-colors"
                    aria-label="Previous review"
                  >
                    ←
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextReview}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-orange-500 hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-orange-500 transition-colors"
                    aria-label="Next review"
                  >
                    →
                  </motion.button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}