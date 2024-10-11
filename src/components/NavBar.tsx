import { useState } from "react";
import NavButton from "./NavButton";
import Resume from "./Resume";

function NavBar() {
  const [showResume, setShowResume] = useState(false);

  return (
    <header className="sticky top-0 left-0 bg-white z-10 p-8 flex justify-between mb-8 font-semibold text-lg">
      <button className="bg-cyan-300 rounded-md py-2 px-3 drop-shadow-md" onClick={() => setShowResume(true)}>View My Resume</button>
      <div className="inline-block">
        {["About", "Education", "Projects", "Experience", "Contact"].map((section, index) => (
          <NavButton key={index} section={section} />
        ))}
      </div>

      <Resume showResume={showResume} close={() => setShowResume(false)} />
    </header>
  );
}

export default NavBar;
