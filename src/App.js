import "./App.css";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import About from "./components/About";
import Services from "./components/Services";
import MyProjects from "./components/MyProjects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Info />
      <About />
      <Services />
      <MyProjects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
