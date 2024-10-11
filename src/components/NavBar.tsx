import NavButton from "./NavButton";

function NavBar() {
  return (
    <header className="p-8 flex justify-between mb-8 font-semibold text-lg">
      <button className="bg-cyan-300 rounded-md py-2 px-3 drop-shadow-md">Download Resume</button>
      <div className="inline-block">
        {["About", "Education", "Projects", "Experience", "Contact"].map((item, index) => (
          <NavButton key={index} section={item} />
        ))}
      </div>
    </header>
  );
}

export default NavBar;
