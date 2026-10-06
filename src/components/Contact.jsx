import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 h-[26rem] w-[26rem] rounded-full bg-orange-400/10 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-full relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block font-extrabold uppercase tracking-[0.25em] text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-500/10 px-4 py-1.5 rounded-full text-xs"
            >
              Get In Touch
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-slate-900 dark:text-white"
            >
              Let's Talk Freshness. 🍊
            </motion.h2>

            <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400 max-w-md">
              Have a question, feedback, or want to place a bulk or custom order for a special event? Send us a message and our team will respond shortly.
            </p>

            <div className="mt-8 space-y-5">
              <motion.a 
                whileHover={{ x: 4 }}
                href="tel:+919876543210" 
                className="flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all dark:bg-orange-500/10 dark:group-hover:bg-orange-500 dark:group-hover:text-white">
                  📞
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Us</p>
                  <p className="text-base font-extrabold text-slate-800 dark:text-slate-200">+91 98765 98654</p>
                </div>
              </motion.a>

              <motion.a 
                whileHover={{ x: 4 }}
                href="mailto:hello@squeezjuice.com" 
                className="flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all dark:bg-orange-500/10 dark:group-hover:bg-orange-500 dark:group-hover:text-white">
                  ✉️
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</p>
                  <p className="text-base font-extrabold text-slate-800 dark:text-slate-200">hello@squeezjuice.com</p>
                </div>
              </motion.a>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 shadow-sm dark:bg-orange-500/10">
                  📍
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Visit Us</p>
                  <p className="text-base font-extrabold text-slate-800 dark:text-slate-200">Salem, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="relative rounded-[2.5rem] bg-white p-6 sm:p-10 shadow-2xl border border-slate-100 dark:bg-slate-900 dark:border-slate-800"
          >
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-[2.5rem] bg-white/95 p-6 text-center backdrop-blur-md dark:bg-slate-900/95"
                >
                  <span className="text-5xl">🎉</span>
                  <h3 className="mt-4 text-2xl font-black text-slate-900 dark:text-white">Message Sent!</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-xs">
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">Send a Message</h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-orange-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:focus:bg-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-orange-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:focus:bg-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Bulk Order / Inquiry"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-orange-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:focus:bg-slate-900 dark:text-white"
              />
            </div>

            <div className="mt-4">
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Your Message</label>
              <textarea
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Type your message here..."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-orange-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:focus:bg-slate-900 dark:text-white"
              />
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 font-extrabold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600"
            >
              Send Message
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}