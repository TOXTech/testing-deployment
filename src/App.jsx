import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Registration from "./components/Registration";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Registration />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
