import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-green-950 px-5 py-24 text-white lg:px-8"
    >
      <div className="mx-auto grid max-w-full items-center gap-14 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-bold uppercase tracking-[0.2em] text-orange-400">
            About Squeez Juice
          </span>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            From Fresh Fruits
            <span className="block text-orange-400">
              To Happy Moments.
            </span>
          </h2>

          <p className="mt-6 leading-8 text-green-100/75">
            We believe great juice starts with great ingredients.
            Every drink at Squeez Juice is prepared fresh using carefully
            selected fruits and natural ingredients.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Fresh fruits sourced daily",
              "No artificial preservatives",
              "Made fresh when you order",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-orange-400 font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-5"
        >
          {[
            ["50+", "Juice Varieties", "🍃"],
            ["10K+", "Happy Customers", "❤️"],
            ["15+", "Years Experience", "🍃"],
            ["100%", "Fresh Ingredients", "❤️"],
          ].map(([number, label, emoji]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <span className="text-2xl">{emoji}</span>
              <p className="mt-6 text-3xl font-black">{number}</p>
              <p className="mt-1 text-sm text-green-100/60">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}