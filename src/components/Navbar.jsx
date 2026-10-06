import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun,Moon,ShoppingCart,Menu,X,User, Settings, LogIn,UserPlus,ChevronDown, LogOut,} from "lucide-react";

const links = [
  ["Home", "/#home"],
  ["Menu", "/#menu"],
  ["Offers", "/#offers"],
  ["About", "/#about"],
  ["Contact", "/#contact"],
];

const themeChannel =
  typeof window !== "undefined"
    ? new BroadcastChannel("theme_sync_channel")
    : null;

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const isDark =
      savedTheme === "dark" || (!savedTheme && systemDark);

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

    const handleStorageChange = (e) => {
      if (e.key === "theme") {
        const newDark = e.newValue === "dark";

        setDarkMode(newDark);

        if (newDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      );

      if (themeChannel) {
        themeChannel.close();
      }
    };
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
      themeChannel.postMessage({
        isDark: nextDark,
      });
    }

    window.dispatchEvent(new Event("storage"));
  };
  const updateCartCount = () => {
    try {
      const savedCart =
        JSON.parse(localStorage.getItem("cartItems")) || [];

      if (!Array.isArray(savedCart)) {
        setCartCount(0);
        return;
      }

      const totalCount = savedCart.reduce(
        (sum, item) => sum + Number(item.quantity || 0),
        0
      );

      setCartCount(totalCount);
    } catch {
      setCartCount(0);
    }
  };

  useEffect(() => {
    updateCartCount();

    window.addEventListener(
      "cartUpdated",
      updateCartCount
    );

    window.addEventListener(
      "storage",
      updateCartCount
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        updateCartCount
      );

      window.removeEventListener(
        "storage",
        updateCartCount
      );
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  const handleNavClick = () => {
    setOpen(false);
    setProfileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-6"
      >
        <div className="mx-auto max-w-full">
          <div className="flex min-h-[64px] items-center justify-between gap-2 rounded-2xl border border-slate-200/85 bg-white/90 px-4 py-2 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 dark:border-slate-700/85 dark:bg-slate-950/90 dark:shadow-black/20 sm:min-h-[68px] sm:px-5 lg:min-h-[72px] lg:px-6">
            <motion.a
              href="/#home"
              onClick={handleNavClick}
              whileHover={{ scale: 1.02 }}
              className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
            >
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                whileTap={{ scale: 0.9 }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-lg shadow-lg shadow-orange-500/25 sm:h-11 sm:w-11 sm:text-xl"
              >
                🥤
              </motion.div>

              <div className="min-w-0">
                <h1 className="truncate text-base font-black tracking-tight text-slate-900 dark:text-white sm:text-lg">
                  Squeez
                  <span className="text-orange-500">
                    Juice
                  </span>
                </h1>

                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-green-600">
                  Fresh & Natural
                </p>
              </div>
            </motion.a>
            <nav className="hidden items-center justify-center gap-1 md:flex lg:gap-1.5">
              {links.map(([label, href]) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={handleNavClick}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative rounded-xl px-2.5 py-2 text-xs font-bold text-slate-600 transition-all duration-300 hover:bg-orange-500 hover:text-white dark:text-slate-300 dark:hover:bg-orange-500 dark:hover:text-white md:px-3 md:text-xs lg:px-4 lg:py-2.5 lg:text-sm"
                >
                  {label}
                </motion.a>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2">

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
                      initial={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.5,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.5,
                      }}
                    >
                      <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="sun"
                      initial={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.5,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.5,
                      }}
                    >
                      <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.span>
                  )}
                </AnimatePresence>

                <span className="ml-2 hidden text-xs font-black md:block">
                  {darkMode ? "Dark" : "Light"}
                </span>
              </motion.button>

              <motion.a
                href="/cart"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.92 }}
                className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20 sm:h-11 sm:w-auto sm:px-3.5 lg:px-4"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />

                <span className="ml-2 hidden text-sm font-bold sm:block">
                  Cart
                </span>

                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-500 px-1 text-[10px] font-black text-white ring-2 ring-white dark:ring-slate-950"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.a>
              <div className="relative hidden md:block">

                <motion.button
                  type="button"
                  onClick={() =>
                    setProfileOpen(!profileOpen)
                  }
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-1.5 shadow-sm transition-all hover:border-orange-300 hover:bg-orange-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
                >


                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-xs font-black text-white shadow-md">
                    GD
                  </div>

                  <div className="hidden text-left lg:block">
                    <p className="text-xs font-black text-slate-900 dark:text-white">
                      Dinesh
                    </p>

                    <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                      My Account
                    </p>
                  </div>

                  <ChevronDown
                    className={`hidden h-4 w-4 text-slate-500 transition-transform lg:block ${
                      profileOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </motion.button>


                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -10,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        scale: 0.95,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-950"
                    >

                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-white">

                        <div className="flex items-center gap-3">

                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-sm font-black ring-2 ring-white/30">
                            GD
                          </div>

                          <div>
                            <p className="font-black">
                              Dinesh G
                            </p>

                            <p className="text-xs text-white/80">
                              Welcome back!
                            </p>
                          </div>

                        </div>

                      </div>

                      <div className="p-2">

                        <motion.a
                          href="/profile"
                          onClick={handleNavClick}
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600 dark:text-slate-200 dark:hover:bg-slate-800"
                        >
                          <User className="h-5 w-5" />
                          My Profile
                        </motion.a>

                        <motion.a
                          href="/profile/settings"
                          onClick={handleNavClick}
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600 dark:text-slate-200 dark:hover:bg-slate-800"
                        >
                          <Settings className="h-5 w-5" />
                           Settings
                        </motion.a>

                        <motion.a
                          href="/login"
                          onClick={handleNavClick}
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600 dark:text-slate-200 dark:hover:bg-slate-800"
                        >
                          <LogIn className="h-5 w-5" />
                          Login
                        </motion.a>

                        <motion.a
                          href="/signup"
                          onClick={handleNavClick}
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600 dark:text-slate-200 dark:hover:bg-slate-800"
                        >
                          <UserPlus className="h-5 w-5" />
                          Sign Up
                        </motion.a>

                        <div className="my-2 border-t border-slate-200 dark:border-slate-800" />

                        <motion.button
                          type="button"
                          whileHover={{ x: 4 }}
                          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                        >
                          <LogOut className="h-5 w-5" />
                          Logout
                        </motion.button>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <motion.button
                type="button"
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(!open)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-orange-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 md:hidden sm:h-11 sm:w-11"
                aria-label="Toggle mobile menu"
                aria-expanded={open}
              >
                <AnimatePresence mode="wait">
                  {open ? (
                    <motion.div
                      key="close"
                      initial={{
                        opacity: 0,
                        rotate: -90,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 90,
                      }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{
                        opacity: 0,
                        rotate: 90,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -90,
                      }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 md:hidden"
              >
                <div className="p-3 sm:p-4">

                 

                  <div className="mb-3 flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-white">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-sm font-black ring-2 ring-white/30">
                      GD
                    </div>

                    <div>
                      <p className="font-black">
                        Dinesh G
                      </p>

                      <p className="text-xs text-white/80">
                        My Account
                      </p>
                    </div>

                  </div>

               

                  {links.map(([label, href], index) => (
                    <motion.a
                      key={label}
                      href={href}
                      onClick={handleNavClick}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      whileHover={{ x: 5 }}
                      className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition-all hover:bg-orange-500 hover:text-white dark:text-slate-200 dark:hover:bg-orange-500 sm:py-3.5 sm:text-base"
                    >
                      {label}
                    </motion.a>
                  ))}

                

                  <div className="my-3 border-t border-slate-200 dark:border-slate-800" />

                  <a
                    href="/profile"
                    onClick={handleNavClick}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <User className="h-5 w-5" />
                    My Profile
                  </a>

                  <a
                    href="/profile/settings"
                    onClick={handleNavClick}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <Settings className="h-5 w-5" />
                    Profile Settings
                  </a>

                  <a
                    href="/login"
                    onClick={handleNavClick}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <LogIn className="h-5 w-5" />
                    Login
                  </a>

                  <a
                    href="/signup"
                    onClick={handleNavClick}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <UserPlus className="h-5 w-5" />
                    Sign Up
                  </a>

                  {/* CART */}

                  <motion.a
                    href="/cart"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setOpen(false)}
                    className="mt-3 flex items-center justify-between rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3.5 font-bold text-white shadow-lg"
                  >
                    <span className="flex items-center gap-2.5">
                      <ShoppingCart className="h-5 w-5" />
                      View Cart
                    </span>

                    {cartCount > 0 && (
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-black">
                        {cartCount} Items
                      </span>
                    )}
                  </motion.a>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.header>

      <div className="h-[80px] sm:h-[88px]" />
    </>
  );
}