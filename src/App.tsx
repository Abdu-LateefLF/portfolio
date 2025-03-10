import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import SectionProvider from "./contexts/SectionProvider";

function App() {
  return (
    <div className="font-sans bg-gray-900 text-gray-400">
      <SectionProvider>
        <NavBar />
      </SectionProvider>

      <div className="mx-auto max-w-[1400px]">
        <Introduction />
        <About />
        <TechStack />
        <Education />
        <Experience />
        <Projects />
      </div>
      <Contact />
    </div>
  );
}

export default App;
