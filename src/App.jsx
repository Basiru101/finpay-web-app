import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <GetStarted />
      <Contact />
      <Footer />
    </>
  );
}