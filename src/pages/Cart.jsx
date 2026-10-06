import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../pages/ThemeToggle";
export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  const updateCartStorage = (newItems) => {
    setCartItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQuantity = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartStorage(updated);
  };

  const decreaseQuantity = (id) => {
    const updated = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    updateCartStorage(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    updateCartStorage(updated);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = subtotal === 0 ? 0 : subtotal >= 500 ? 0 : 40;
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen bg-orange-50/50 px-4 py-24 sm:px-6 sm:py-28 lg:px-8 dark:bg-slate-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-6">
          <motion.a
            href="/#menu"
            whileHover={{ x: -3 }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 transition hover:text-orange-500 dark:text-slate-400 dark:hover:text-orange-400"
          >
            <span>←</span> Back to Menu
          </motion.a>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Your Cart 🛒
        </h1>

        <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400">
          Review your fresh picks before checking out.
        </p>

        <div className="mt-8 lg:mt-12 grid gap-8 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] items-start">
          
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <div className="rounded-3xl bg-white p-8 sm:p-12 text-center shadow-xl border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
                <p className="text-5xl sm:text-6xl">🥤</p>
                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                  Your cart is empty!
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Looks like you haven't added any fresh juices or smoothies yet.
                </p>
                <a
                  href="/#menu"
                  className="mt-6 inline-block rounded-2xl bg-orange-500 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600"
                >
                  Explore Menu
                </a>
              </div>
            ) : (
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: -50 }}
                    whileHover={{ y: -2 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl bg-white p-4 sm:p-5 shadow-lg border border-slate-100 dark:bg-slate-900 dark:border-slate-800 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-2xl bg-orange-100 dark:bg-orange-500/20 shadow-sm">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="inline-block text-[10px] font-black uppercase tracking-wider text-orange-500">
                          {item.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white truncate">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm sm:text-base font-extrabold text-orange-600 dark:text-orange-400">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 border-t border-slate-100 pt-3 sm:border-t-0 sm:pt-0">
                      <div className="flex items-center gap-2 rounded-full bg-slate-100 p-1 dark:bg-slate-800">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="flex h-8 w-8 items-center justify-center rounded-full font-bold text-slate-700 hover:bg-white dark:text-slate-200 dark:hover:bg-slate-700 transition"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>

                        <span className="w-6 text-center text-sm font-black text-slate-800 dark:text-white">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="flex h-8 w-8 items-center justify-center rounded-full font-bold text-slate-700 hover:bg-white dark:text-slate-200 dark:hover:bg-slate-700 transition"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="rounded-2xl p-2.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition"
                        aria-label="Remove item"
                      >
                        🗑️
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>

          
          <div className="sticky top-28 rounded-3xl bg-white p-6 sm:p-8 shadow-xl border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
            <h2 className="text-xl font-black text-slate-900 dark:text-white">Order Summary</h2>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-sm sm:text-base text-slate-500 dark:text-slate-400">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">₹{subtotal}</span>
              </div>

              <div className="flex justify-between text-sm sm:text-base text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span>Delivery</span>
                  {subtotal > 0 && subtotal < 500 && (
                    <span className="text-[10px] bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400 px-2 py-0.5 rounded-full font-bold">
                      Free above ₹500
                    </span>
                  )}
                </div>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {subtotal === 0 ? "₹0" : delivery === 0 ? "FREE" : `₹${delivery}`}
                </span>
              </div>

              <div className="border-t border-slate-100 pt-4 dark:border-slate-800">
                <div className="flex justify-between text-xl font-black text-slate-900 dark:text-white">
                  <span>Total</span>
                  <span className="text-orange-500">₹{total}</span>
                </div>
              </div>
            </div>

            {cartItems.length > 0 && (
              <motion.a
                href="/payment"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition group w-full"
              >
                Proceed to Payment
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}