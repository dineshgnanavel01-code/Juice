import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const primaryImage = "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=1200&q=80"; // Mango Sunshine
  const hoverImage = "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1200&q=80"; // Berry Blast

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50 pt-28 pb-16 transition-colors dark:from-slate-950 dark:via-slate-900 dark:to-green-950 lg:pt-36 lg:pb-24"
    >
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-orange-300/30 blur-3xl dark:bg-orange-600/10 pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-20 h-[30rem] w-[30rem] rounded-full bg-green-300/30 blur-3xl dark:bg-green-600/10 pointer-events-none"
      />

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-[6%] top-[25%] hidden text-4xl lg:block select-none pointer-events-none"
      >
        🍊
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-[6%] top-[30%] hidden text-4xl lg:block select-none pointer-events-none"
      >
        🍃
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-5 py-2.5 text-sm font-bold text-orange-700 shadow-lg shadow-orange-200/30 backdrop-blur-md transition dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-400"
            >
              <span className="animate-pulse">✨</span>
              Fresh • Natural • Delicious
            </motion.div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl xl:text-7xl dark:text-white">
              Sip the
              <span className="relative block mt-1">
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  Freshness.
                </span>

                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "55%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-[-8px] left-0 h-2.5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400"
                />
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
              Freshly squeezed juices, creamy smoothies and delicious fruit
              blends made from nature's finest ingredients. Delivered right to your doorstep.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#menu"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 20px 40px rgba(249,115,22,0.30)",
                }}
                whileTap={{ scale: 0.96 }}
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 font-bold text-white shadow-xl shadow-orange-500/25 text-base"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">Explore Menu</span>

                <span className="relative transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.a>

              <motion.a
                href="#offers"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-2 rounded-full border-2 border-green-500 bg-white/70 px-8 py-4 font-bold text-green-700 shadow-lg backdrop-blur-sm transition-all hover:bg-green-500 hover:text-white dark:bg-slate-900/40 dark:text-green-400 text-base"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 transition group-hover:bg-white/20 dark:bg-green-500/20">
                  ▶
                </span>

                Today's Offers
              </motion.a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
              {[
                ["50+", "Juice Flavors"],
                ["10K+", "Happy Customers"],
                ["100%", "Fresh Fruits"],
              ].map(([value, label], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.15 }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="group cursor-pointer rounded-2xl border border-white/80 bg-white/70 p-4 sm:p-5 shadow-lg backdrop-blur-md transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <p className="text-2xl sm:text-3xl font-black text-orange-500 transition-transform group-hover:scale-110">
                    {value}
                  </p>

                  <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 80,
            }}
            className="relative mx-auto w-full max-w-lg lg:col-span-5 lg:max-w-none"
          >
            <div className="absolute -inset-6 rounded-[4rem] bg-gradient-to-r from-orange-400/30 to-yellow-400/30 blur-3xl" />

            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{
                scale: 1.02,
                rotateY: 4,
                rotateX: -4,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative aspect-square overflow-hidden rounded-[3rem] bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-400 p-3.5 shadow-2xl shadow-orange-500/25"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-inner">
                <motion.img
                  key={isHovered ? "hover" : "primary"}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={isHovered ? hoverImage : primaryImage}
                  alt="Fresh Juice"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
              </div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-8 top-8 z-20 rounded-full border border-white/20 bg-white/20 p-4 text-3xl shadow-lg backdrop-blur-md select-none"
              >
                🍃
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                className="absolute bottom-8 left-8 z-30 rounded-2xl border border-white/30 bg-white/95 px-5 py-4 shadow-2xl backdrop-blur-xl transition dark:bg-slate-900/95"
              >
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  ⭐ {isHovered ? "Berry Favorite" : "Today's Favorite"}
                </p>

                <p className="mt-1 font-black text-slate-900 dark:text-white text-base">
                  {isHovered ? "Berry Blast 🫐" : "Mango Sunshine 🥭"}
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <span className="font-extrabold text-orange-500 text-sm">
                    {isHovered ? "₹179" : "₹149"}
                  </span>

                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-600 dark:bg-green-500/20 dark:text-green-400">
                    Fresh
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute right-8 bottom-8 z-30 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md dark:bg-slate-900/95 border border-white/30"
              >
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Customer Rating</p>
                <p className="font-black text-orange-500 mt-0.5">⭐ 4.9 / 5</p>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}