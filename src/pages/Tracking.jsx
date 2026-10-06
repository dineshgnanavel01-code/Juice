import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "../pages/ThemeToggle";
const steps = [
  {
    title: "Order Confirmed",
    description: "Your order has been received.",
    icon: "✅",
  },
  {
    title: "Preparing Juice",
    description: "Our team is freshly preparing your drinks.",
    icon: "👨‍🍳",
  },
  {
    title: "Packed",
    description: "Your juices are packed and ready.",
    icon: "📦",
  },
  {
    title: "Out for Delivery",
    description: "Your order is on the way.",
    icon: "🚚",
  },
  {
    title: "Delivered",
    description: "Enjoy your fresh juice!",
    icon: "📍",
  },
];

export default function Tracking() {
  const [currentStep, setCurrentStep] = useState(1); // Starts at step 1 ("Preparing Juice")
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes countdown in seconds

  useEffect(() => {
    localStorage.removeItem("cartItems");
    window.dispatchEvent(new Event("cartUpdated"));

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 25000);

    return () => {
      clearInterval(timer);
      clearInterval(stepInterval);
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="min-h-screen bg-orange-50 px-5 py-28 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl">

        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl shadow-md">
            🥤
          </div>

          <h1 className="mt-5 text-4xl font-black dark:text-white">
            Track Your Order
          </h1>

          <p className="mt-2 text-slate-500 font-medium">
            Order #SJ10245 • Estimated delivery in <span className="text-orange-500 font-bold">{formatTime(timeLeft)}</span>
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-white p-6 shadow-xl dark:bg-slate-900">
          {steps.map((step, index) => {
            const completed = index <= currentStep;
            const isCurrent = index === currentStep;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-5 pb-10 last:pb-0"
              >
                {index !== steps.length - 1 && (
                  <div
                    className={`absolute left-6 top-12 h-full w-0.5 transition-colors duration-500 ${
                      index < currentStep
                        ? "bg-green-500"
                        : "bg-slate-200 dark:bg-slate-700"
                    }`}
                  />
                )}

                <div
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg transition-all duration-300 ${
                    completed
                      ? "bg-green-500 text-white shadow-md shadow-green-500/20"
                      : "bg-slate-100 text-slate-400 dark:bg-slate-800"
                  } ${isCurrent ? "ring-4 ring-green-500/30 scale-110" : ""}`}
                >
                  {step.icon}
                </div>

                <div>
                  <h3 className={`font-black ${completed ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-slate-500"}`}>
                    {step.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 rounded-3xl bg-gradient-to-r from-orange-500 to-yellow-500 p-6 text-white shadow-xl">
          <p className="text-sm font-semibold opacity-90 uppercase tracking-wider">
            Current Status
          </p>

          <h2 className="mt-1 text-2xl font-black">
            {steps[currentStep].icon} {steps[currentStep].title}
          </h2>

          <p className="mt-2 text-sm opacity-90">
            {steps[currentStep].description}
          </p>
        </div>

        <div className="mt-8 text-center">
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-slate-800 shadow-lg transition hover:bg-orange-50 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            ← Back to Menu / Order More
          </motion.a>
        </div>

      </div>
    </div>
  );
}