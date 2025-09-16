import "./App.css";
import HeroSection from "./components/HeroSection";
import Associations from "./components/associations";
import VideoCarosolSection from "./components/videoCarosolSection";
import ServicesComponent from "./components/ourService";
import AboutUsSection from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <Associations />
      <VideoCarosolSection />
      <ServicesComponent />
      <AboutUsSection />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
