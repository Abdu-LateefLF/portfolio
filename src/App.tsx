import SectionProvider from "./contexts/SectionProvider";
import Sidebar from "./components/Sidebar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <SectionProvider>
      <div className="min-h-screen bg-slate-50 font-sans">
        <Sidebar />

        {/* Main scrollable content, offset by sidebar width on large screens */}
        <main className="lg:ml-72 pt-[61px] lg:pt-0">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <Introduction />
            <About />
            <TechStack />
            <Education />
            <Experience />
            <Projects />
          </div>
          <Contact />
        </main>
      </div>
    </SectionProvider>
  );
}

export default App;
