import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Footer from "@/components/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function App() {
  return (
    <div className="  overflow-hidden">
      <SmoothCursor />
      <Hero />
      <Projects />
      <About />
      <Footer />

    </div>
  );
}
