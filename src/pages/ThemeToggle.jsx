import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const themeChannel = typeof window !== "undefined" ? new BroadcastChannel("theme_sync_channel") : null;

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme === "dark" || (!savedTheme && systemDark);

    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (themeChannel) {
      themeChannel.onmessage = (event) => {
        const newDark = event.data.isDark;
        setDarkMode(newDark);
        if (newDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      };
    }
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    if (themeChannel) {
      themeChannel.postMessage({ isDark: nextDark });
    }
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <motion.button
      type="button"
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-orange-600 transition-all hover:border-orange-400 hover:bg-orange-100 dark:border-slate-700 dark:bg-slate-800 dark:text-yellow-300 dark:hover:bg-slate-700 sm:h-11 sm:w-auto sm:px-3.5"
      aria-label="Toggle dark mode"
    >
      <AnimatePresence mode="wait">
        {darkMode ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          >
            <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
          >
            <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.span>
        )}
      </AnimatePresence>
      <span className="ml-2 hidden text-xs font-black md:block">
        {darkMode ? "Dark" : "Light"}
      </span>
    </motion.button>
  );
}