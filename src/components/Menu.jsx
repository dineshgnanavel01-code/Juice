import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    name: "Mango Sunshine",
    category: "Fresh Juice",
    price: 49,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Orange Zest",
    category: "Fresh Juice",
    price: 99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Watermelon Chill",
    category: "Fresh Juice",
    price: 59,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Ruby Pomegranate",
    category: "Fresh Juice",
    price: 89,
    rating: 5.0,
    image: "https://tse2.mm.bing.net/th/id/OIP.JYHpCL2I8T69FMe0RAsWRwHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 5,
    name: "Zesty Lemon Mint",
    category: "Fresh Juice",
    price: 109,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Berry Blast",
    category: "Smoothie",
    price: 179,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Avocado Smoothie",
    category: "Smoothie",
    price: 120,
    rating: 4.8,
    image: "https://tse4.mm.bing.net/th/id/OIP.pm4q-2eTRfpDPhDhJhLe7AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 8,
    name: "Strawberry Dream",
    category: "Smoothie",
    price: 150,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Banana Peanut Power",
    category: "Smoothie",
    price: 199,
    rating: 4.9,
    image: "https://tse3.mm.bing.net/th/id/OIP.jcuQIqi-BXf5Bkaq8iOw3QHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 10,
    name: "Green Detox",
    category: "Healthy",
    price: 199,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Ginger Immunity Shot",
    category: "Healthy",
    price: 99,
    rating: 4.9,
    image: "https://tse2.mm.bing.net/th/id/OIP.P4uVsNJGaWfZ9Y2wmR6u2QHaNM?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 12,
    name: "Beetroot Glow",
    category: "Healthy",
    price: 169,
    rating: 4.6,
    image: "https://tse1.mm.bing.net/th/id/OIP.k2rxWoz9NRRA11Vpesd3mQHaNM?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 13,
    name: "Pineapple Punch",
    category: "Special",
    price: 159,
    rating: 4.9,
    image: "https://th.bing.com/th/id/OIP.3B1NWs4TYYwPpDyNXRV7zgHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 14,
    name: "Tropical Passion",
    category: "Special",
    price: 179,
    rating: 4.8,
    image: "https://static.vecteezy.com/system/resources/previews/051/200/437/large_2x/tall-glass-of-exotic-passion-fruit-juice-tropical-glass-of-passion-fruit-juice-bursting-with-flavor-and-served-tall-for-a-refreshing-sip-photo.jpg",
  },
  {
    id: 15,
    name: "Kiwi Sparkle",
    category: "Special",
    price: 169,
    rating: 4.9,
    image: "https://thenatureofhome.com/wp-content/uploads/2025/01/Sparkling-Kiwi-Pineapple-Juice-pin-1-midia-1024x1536.jpg",
  },
];

const categories = ["All", "Fresh Juice", "Smoothie", "Healthy", "Special"];

export default function Menu() {
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState({});
  const [addedItem, setAddedItem] = useState(null);

  const toggleFavorite = (name) => {
    setFavorites((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemIndex = existingCart.findIndex((item) => item.id === product.id);

    if (itemIndex > -1) {
      existingCart[itemIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));
    window.dispatchEvent(new Event("cartUpdated"));

    setAddedItem(product.name);
    setTimeout(() => {
      setAddedItem(null);
    }, 2000);
  };

  const filtered = useMemo(
    () =>
      category === "All"
        ? products
        : products.filter((item) => item.category === category),
    [category]
  );

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-slate-50 px-5 py-24 transition-colors dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:px-8"
    >
      <AnimatePresence>
        {addedItem && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl bg-slate-900 px-5 py-4 text-white shadow-2xl dark:bg-white dark:text-slate-950"
          >
            <span>🛍️</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-orange-400">Added to cart</p>
              <p className="text-sm font-black">{addedItem}</p>
            </div>
            <a
              href="/cart"
              className="ml-3 rounded-xl bg-orange-500 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-orange-600"
            >
              View Cart →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-orange-400/15 blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-green-400/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-orange-600 shadow-sm dark:bg-orange-500/10 dark:text-orange-400"
          >
            🍊 3D Interactive Menu Slider
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-black tracking-tight sm:text-5xl dark:text-white"
          >
            Freshness in Every{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Sip
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400"
          >
            Swipe through our immersive 3D showcase of delicious, freshly prepared juices and smoothies.
          </motion.p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((item) => {
            const isActive = category === item;
            return (
              <motion.button
                key={item}
                onClick={() => setCategory(item)}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full px-6 py-3 text-sm font-bold shadow-md transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-500/30 ring-2 ring-orange-400/50"
                    : "bg-white/80 text-slate-700 hover:bg-orange-50 hover:text-orange-600 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-orange-400"
                }`}
              >
                {item}
              </motion.button>
            );
          })}
        </div>

       
        <div className="py-6">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={1}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper !pb-14"
          >
            {filtered.map((product) => {
              const isLiked = favorites[product.name];
              return (
                <SwiperSlide
                  key={product.name}
                  className="!w-[300px] sm:!w-[340px]"
                >
                  <div className="group relative overflow-hidden rounded-[2.5pax] rounded-[2rem] border border-slate-100 bg-white shadow-2xl shadow-slate-900/10 transition-all dark:border-slate-800 dark:bg-slate-950">
                    
                
                    <div className="relative h-72 overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-115"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />

                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.85 }}
                        onClick={() => toggleFavorite(product.name)}
                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg shadow-lg backdrop-blur-md transition hover:bg-white dark:bg-slate-900/90"
                        aria-label="Wishlist"
                      >
                        {isLiked ? "❤️" : "🤍"}
                      </motion.button>

                      <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/90 px-3.5 py-1 text-xs font-extrabold text-orange-600 shadow-md backdrop-blur-md dark:bg-slate-900/90 dark:text-orange-400">
                        {product.category}
                      </span>
                    </div>

               
                    <div className="p-6">
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white truncate">
                          {product.name}
                        </h3>

                        <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-black text-amber-600 shadow-inner dark:bg-amber-500/10 dark:text-amber-400 shrink-0">
                          <span>⭐</span>
                          <span>{product.rating}</span>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800/80">
                        <div>
                          <span className="text-xs text-slate-400 dark:text-slate-500 block font-medium">Price</span>
                          <span className="text-2xl font-black text-orange-500 tracking-tight">
                            ₹{product.price}
                          </span>
                        </div>

                        <motion.button
                          onClick={() => handleAddToCart(product)}
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.94 }}
                          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all hover:from-green-600 hover:to-emerald-700"
                        >
                          <span>🛍️</span>
                          <span>Add</span>
                        </motion.button>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

      </div>
    </section>
  );
}