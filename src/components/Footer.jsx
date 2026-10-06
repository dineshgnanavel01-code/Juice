import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ArrowRight, Clock3, Mail,MapPin, Phone,} from "lucide-react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [email, setEmail] = useState("");


  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socials = [
    {
      name: "Facebook",
      hover: "hover:bg-blue-600 hover:border-blue-500",
      svg: (
        <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      hover: "hover:bg-pink-600 hover:border-pink-500",
      svg: (
        <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: "Twitter",
      hover: "hover:bg-slate-700 hover:border-slate-500",
      svg: (
        <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: "YouTube",
      hover: "hover:bg-red-600 hover:border-red-500",
      svg: (
        <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ];
  const quickLinks = [
    ["Home", "#home"],
    ["Our Menu", "#menu"],
    ["About Us", "#about"],
    ["Special Offers", "#offers"],
    ["Contact", "#contact"],
  ];

  const usefulLinks = [
    ["Fresh Juices", "#menu"],
    ["Smoothies", "#menu"],
    ["Combo Offers", "#offers"],
    ["Customer Reviews", "#about"],
    ["Contact Us", "#contact"],
  ];

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-orange-500/20
        bg-slate-950
        text-white
      "
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"
        />

        <div className="absolute left-[15%] top-20 text-5xl opacity-5">🍊</div>
        <div className="absolute right-[15%] top-40 text-6xl opacity-5">🍋</div>
        <div className="absolute bottom-20 left-[45%] text-5xl opacity-5">🥝</div>
      </div>

      <div className="relative z-10 mx-auto max-w-full px-5 pb-8 pt-20 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end md:justify-between"
        >
          
          <div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-3"
            >
              <motion.div
                whileHover={{
                  rotate: 12,
                  scale: 1.1,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-400 text-3xl shadow-xl shadow-orange-500/20"
              >
                🥤
              </motion.div>

              <div>
                <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                  Squeez
                  <span className="text-orange-500">Juice</span>
                </h2>

                <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-green-400">
                  Fresh • Natural • Delicious
                </p>
              </div>
            </motion.div>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
              Freshly squeezed juices, delicious smoothies, and healthy drinks made with love. Every glass is packed with natural goodness and refreshing flavor.
            </p>
          </div>

       
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              Follow us
            </p>

            <div className="flex gap-2">
              {socials.map(({ name, svg, hover }) => (
                <motion.a
                  key={name}
                  href="#"
                  aria-label={name}
                  title={name}
                  whileHover={{
                    y: -6,
                    rotate: 4,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:text-white hover:shadow-lg ${hover}`}
                >
                  {svg}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="mb-5 text-sm font-black uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="space-y-3">
              {quickLinks.map(([label, href]) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 7 }}
                  className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-orange-400"
                >
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.1 }}>
            <h3 className="mb-5 text-sm font-black uppercase tracking-wider text-white">
              Explore
            </h3>

            <div className="space-y-3">
              {usefulLinks.map(([label, href]) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 7 }}
                  className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-orange-400"
                >
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="mb-5 text-sm font-black uppercase tracking-wider text-white">
              Opening Hours
            </h3>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-slate-500">Monday - Friday</p>
                    <p className="mt-1 font-bold text-white">9:00 AM - 10:00 PM</p>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div>
                    <p className="text-slate-500">Saturday - Sunday</p>
                    <p className="mt-1 font-bold text-white">10:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="mb-5 text-sm font-black uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">
              <a
                href="tel:+919876543210"
                className="group flex items-start gap-3 text-slate-400 transition hover:text-orange-400"
              >
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                <span>+91 98765 98654</span>
              </a>

              <a
                href="mailto:hello@squeezjuice.com"
                className="group flex items-start gap-3 text-slate-400 transition hover:text-orange-400"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                <span className="break-all">hello@squeezjuice.com</span>
              </a>

              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                <span>Salem,<br />Tamil Nadu, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/15 via-orange-500/5 to-green-500/10 p-6 sm:p-8"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍊</span>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
                  Fresh Deals
                </p>
              </div>

              <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                Get fresh deals
                <span className="text-orange-400"> every week.</span>
              </h3>

              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">
                Subscribe for new flavors, special offers, seasonal drinks, and exclusive discounts.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.trim()) return;
                alert(`Thanks for subscribing, ${email}!`);
                setEmail("");
              }}
              className="flex w-full max-w-xl"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-l-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 rounded-r-2xl bg-orange-500 px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 sm:px-7"
              >
                <span className="hidden sm:block">Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </form>
          </div>
        </motion.div>

      
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© 2026 Squeez Juice. All rights reserved.</p>

          <div className="flex items-center justify-center gap-1">
            <span>Made with</span>
            <span className="animate-pulse text-red-500">❤️️</span>
            <span>and</span>
            <span>🍊</span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a href="#" className="transition hover:text-orange-400">Privacy</a>
            <a href="#" className="transition hover:text-orange-400">Terms</a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 30 }}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            className="fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-xl shadow-orange-500/30 ring-4 ring-orange-500/10 transition-all hover:shadow-orange-500/50 sm:bottom-8 sm:right-8"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}