// App.jsx
import "./styles/variables.css";
import "./styles/globals.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Benefits } from "./components/Benefits/Benefits";
import { About } from "./components/About/About";
import { Services } from "./components/Services/Services";
import { Plans } from "./components/Plans/Plans";
import { Schedule } from "./components/Schedule/Schedule";
import { Trainers } from "./components/Trainers/Trainers";
import { Gallery } from "./components/Gallery/Gallery";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { FAQ } from "./components/FAQ/FAQ";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Benefits />
        <About />
        <Services />
        <Plans />
        <Schedule />
        <Trainers />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;