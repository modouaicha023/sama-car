import React, { useEffect, useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import ClientFeedback from "./components/ClientFeedback/ClientFeedback";
import AppStoreSection from "./components/AppStoreSection/AppStoreSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Services />
      <CarList />
      <ClientFeedback />
      <AppStoreSection />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
