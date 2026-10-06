import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const offers = [
  {
    id: 1,
    title: "Fresh Family Combo",
    text: "4 refreshing juices for your whole family. Hand-picked fruits squeezed to perfection.",
    price: "₹499",
    old: "₹650",
    badge: "SAVE 23%",
    code: "FAMILY23",
    icon: "🎁",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    shadow: "shadow-orange-500/25",
  },
  {
    id: 2,
    title: "Smoothie Special",
    text: "Buy 2 delicious smoothies and get 1 completely free! Mix & match your favorite berries.",
    price: "BUY 2 GET 1",
    old: "",
    badge: "MOST POPULAR",
    code: "SMOOTHIEFREE",
    icon: "🏷️️",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    gradient: "from-emerald-500 via-teal-500 to-green-400",
    shadow: "shadow-emerald-500/25",
  },
];

export default function Offers() {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 19 });
  const [copiedCode, setCopiedCode] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 6, minutes: 0, seconds: 0 }; // Reset loop
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  return (
    <section id="offers" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      
      <AnimatePresence>
        {copiedCode && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl bg-slate-900 px-5 py-3.5 text-white shadow-2xl dark:bg-white dark:text-slate-950"
          >
            <span>📋</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-green-400">Coupon Copied!</p>
              <p className="text-sm font-black">{copiedCode}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-orange-400/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-full relative z-10">
        
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 font-extrabold uppercase tracking-[0.2em] text-green-600 dark:text-green-400 bg-green-100/80 dark:bg-green-500/10 px-4 py-1.5 rounded-full text-xs"
            >
              ⚡ Live Limited Deals
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-slate-900 dark:text-white"
            >
              Good Mood. Great Deals.
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 rounded-2xl bg-white/80 p-3 sm:px-5 sm:py-3.5 shadow-lg border border-slate-100 backdrop-blur-xl dark:bg-slate-900/80 dark:border-slate-800"
          >
            <span className="text-xl animate-pulse">⏰</span>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Offer Ends In</p>
              <div className="flex items-center gap-1 font-black text-slate-800 dark:text-white text-sm sm:text-base">
                <span className="rounded bg-orange-100 dark:bg-orange-500/20 px-1.5 py-0.5 text-orange-600 dark:text-orange-400">
                  {String(timeLeft.hours).padStart(2, "0")}h
                </span>
                <span>:</span>
                <span className="rounded bg-orange-100 dark:bg-orange-500/20 px-1.5 py-0.5 text-orange-600 dark:text-orange-400">
                  {String(timeLeft.minutes).padStart(2, "0")}m
                </span>
                <span>:</span>
                <span className="rounded bg-orange-100 dark:bg-orange-500/20 px-1.5 py-0.5 text-orange-600 dark:text-orange-400">
                  {String(timeLeft.seconds).padStart(2, "0")}s
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${offer.gradient} p-6 sm:p-10 text-white shadow-2xl ${offer.shadow}`}
            >
              <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-white/10 blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                <div className="flex-1">
                  <div className="flex items-center justify-between sm:justify-start gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-inner text-2xl">
                      {offer.icon}
                    </div>
                    <span className="rounded-full bg-white/25 px-4 py-1.5 text-xs font-black tracking-wider uppercase backdrop-blur-md shadow-sm">
                      {offer.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 sm:mt-8 text-2xl sm:text-3xl font-black tracking-tight">
                    {offer.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed">
                    {offer.text}
                  </p>
                </div>

                <motion.div 
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-full sm:w-36 h-36 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border-2 border-white/30 backdrop-blur-md"
                >
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/20 relative z-10">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-4xl font-black tracking-tight">
                    {offer.price}
                  </span>

                  {offer.old && (
                    <span className="text-base sm:text-lg font-semibold text-white/60 line-through">
                      {offer.old}
                    </span>
                  )}
                </div>

                <motion.button 
                  onClick={() => handleCopyCode(offer.code)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm sm:text-base font-extrabold text-slate-900 shadow-xl transition-all hover:bg-slate-50"
                >
                  <span>{copiedCode === offer.code ? "✓ Copied!" : `Code: ${offer.code}`}</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}