import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Offers from "./components/Offers";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Tracking from "./pages/Tracking";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import ProfileSettings from "./pages/ProfileSettings";

function Home({ darkMode, setDarkMode }) {
  return (
    <div className="min-h-screen bg-orange-50 text-slate-800 transition-colors duration-500 dark:bg-slate-950 dark:text-white">

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Hero />
        <Menu />
        <Offers />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div className={darkMode ? "dark" : ""}>

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          {/* CART */}
          <Route
            path="/cart"
            element={<Cart />}
          />

          {/* PAYMENT */}
          <Route
            path="/payment"
            element={<Payment />}
          />

          {/* TRACKING */}
          <Route
            path="/tracking"
            element={<Tracking />}
          />

          {/* AUTH */}
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

          {/* PROFILE */}
          <Route
            path="/profile"
            element={<Profile />}
          />

          {/* PROFILE SETTINGS */}
          <Route
            path="/profile/settings"
            element={<ProfileSettings />}
          />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;