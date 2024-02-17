import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20, // initial position
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // animation speed
        delay: 0.4, // latency to make sure images are loaded before animation
      },
    },
    exit: {
      opacity: 0,
      y: -20, // exit position
      transition: {
        duration: 0.6, // animation speed
      },
    },
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="home"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Home />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/products"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="products"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Products />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/about"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="about"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <About />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/contact"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="contact"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Contact />
                </motion.div>
              </AnimatePresence>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
