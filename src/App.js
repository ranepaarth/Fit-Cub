import "./App.css";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Reasons from "./Components/Reasons/Reasons";
import PlanCards from "./Components/PlanCards/PlanCards";
import Testimonials from "./Components/Testimonials/Testimonials";
import Join from "./Components/Join/Join";
import Footer from "./Components/Footer/Footer";
import {motion, useScroll} from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="App">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Hero/>
      <Programs />
      <Reasons />
      <PlanCards />
      <Testimonials />
      <Join />
      <Footer/>
    </div>
  );
}

export default App;
