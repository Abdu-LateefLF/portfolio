import About from "./components/About";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="font-sans text-gray-700">
      <NavBar />
      <div className="mx-auto max-w-[1400px]">
        <Introduction />
        <About />
        <TechStack />
        <Education />
        <Projects />
        <Experience />
      </div>
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
