import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const methods = [
  {
    id: "upi",
    name: "UPI",
    icon: "📱",
    description: "Google Pay, PhonePe, Paytm",
  },
  {
    id: "card",
    name: "Credit / Debit Card",
    icon: "💳",
    description: "Visa, Mastercard, RuPay",
  },
  {
    id: "cash",
    name: "Cash on Delivery",
    icon: "💵",
    description: "Pay when your juice arrives",
  },
];

export default function Payment() {
  const [method, setMethod] = useState("upi");
  const [cartItems, setCartItems] = useState([]);
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = subtotal === 0 ? 0 : subtotal >= 500 ? 0 : 40;
  const gst = Math.round(subtotal * 0.05 * 100) / 100; 
  const total = subtotal + delivery + gst;

  const handleDownloadBill = () => {
    const selectedMethodObj = methods.find((m) => m.id === method);
    const billContent = `
=== FRESH JUICE BAR - TAX INVOICE ===
Date: ${new Date().toLocaleDateString()}
Payment Method: ${selectedMethodObj ? selectedMethodObj.name : method.toUpperCase()}
-----------------------------------
ITEMS:
${cartItems.map((item) => `- ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`).join("\n")}
-----------------------------------
Subtotal: ₹${subtotal}
GST (5%): ₹${gst}
Delivery: ${delivery === 0 ? "FREE" : `₹${delivery}`}
-----------------------------------
TOTAL PAID: ₹${total}
===================================
Thank you for ordering with us!
    `.trim();

    const blob = new Blob([billContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Invoice-${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-orange-50 px-5 py-28 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl">
        
        <div className="mb-6">
          <motion.a
            href="/cart"
            whileHover={{ x: -3 }}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-orange-500 dark:text-slate-400 dark:hover:text-orange-400"
          >
            <span>←</span> Back to Cart
          </motion.a>
        </div>

        <h1 className="text-4xl font-black text-slate-900 dark:text-white">
          Payment & Checkout 💳
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Choose your preferred payment method and review your tax invoice.
        </p>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-xl border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
          <h2 className="text-xl font-black text-slate-900 dark:text-white mb-4">Price Breakdown</h2>
          
          <div className="space-y-2 text-slate-600 dark:text-slate-400">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">₹{subtotal}</span>
            </div>
            
            <div className="flex justify-between">
              <span>GST (5%)</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">₹{gst}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {delivery === 0 ? "FREE" : `₹${delivery}`}
              </span>
            </div>
            
            <div className="border-t border-slate-100 dark:border-slate-800 pt-3 mt-3 flex justify-between text-lg font-black text-slate-900 dark:text-white">
              <span>Final Total</span>
              <span className="text-orange-500">₹{total}</span>
            </div>
          </div>

          <button
            onClick={handleDownloadBill}
            className="mt-5 w-full rounded-xl border border-orange-500 py-2.5 text-sm font-bold text-orange-500 transition hover:bg-orange-50 dark:hover:bg-orange-500/10"
          >
            📥 Download Bill / Invoice
          </button>
        </div>

        <div className="mt-8 space-y-4">
          {methods.map((item) => {
            const selected = method === item.id;

            return (
              <motion.button
                key={item.id}
                type="button"
                whileHover={{ scale: 1.01 }}
                onClick={() => setMethod(item.id)}
                className={`flex w-full items-center gap-4 rounded-3xl border-2 p-5 text-left transition ${
                  selected
                    ? "border-orange-500 bg-orange-50 dark:bg-orange-500/10 dark:border-orange-500"
                    : "border-transparent bg-white shadow-sm dark:bg-slate-900 dark:border-slate-800"
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-2xl dark:bg-orange-500/20">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <p className="font-black text-slate-900 dark:text-white">
                    {item.name}
                  </p>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>

                <div
                  className={`h-5 w-5 rounded-full border-2 transition-colors ${
                    selected
                      ? "border-orange-500 bg-orange-500"
                      : "border-slate-300 dark:border-slate-600"
                  }`}
                />
              </motion.button>
            );
          })}
        </div>

        <div className="mt-6 rounded-3xl bg-white p-6 shadow-xl border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
          
          {method === "upi" && (
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-900 dark:text-white">Enter UPI ID or Scan QR</h3>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-full flex-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Virtual Payment Address (VPA)
                  </label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="e.g. username@oksbi / username@paytm"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-900"
                  />
                </div>

                <div className="flex flex-col items-center justify-center p-3 bg-orange-50 dark:bg-orange-500/10 rounded-2xl border border-orange-200 dark:border-orange-500/20 shrink-0">
                  <div className="h-24 w-24 bg-white dark:bg-slate-900 p-2 rounded-xl flex items-center justify-center shadow-inner border border-orange-100 dark:border-slate-800">
                    <span className="text-3xl">📷</span>
                  </div>
                  <span className="mt-2 text-[10px] font-black uppercase tracking-wider text-orange-600 dark:text-orange-400">Scan & Pay</span>
                </div>
              </div>
            </div>
          )}

          {method === "card" && (
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-900 dark:text-white">Enter Card Details</h3>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  maxLength="19"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="4321 0987 6543 2109"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    maxLength="5"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    placeholder="MM/YY"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    CVV
                  </label>
                  <input
                    type="password"
                    maxLength="4"
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value)}
                    placeholder="123"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-900"
                  />
                </div>
              </div>
            </div>
          )}

          {method === "cash" && (
            <div className="py-2 text-center sm:text-left">
              <h3 className="text-lg font-black text-slate-900 dark:text-white">Cash on Delivery</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                You can pay cash or scan the delivery executive's QR code when your fresh juices arrive at your doorstep. Please keep exact change handy if possible!
              </p>
            </div>
          )}

        </div>

        <motion.a
          href="/tracking"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 font-bold text-white shadow-xl shadow-orange-500/20 group w-full"
        >
          Pay ₹{total}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </motion.a>
      </div>
    </div>
  );
}