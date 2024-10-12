import { useEffect, useRef, useState } from "react";
import NavButton from "./NavButton";
import { CiMenuFries } from "react-icons/ci";
import MenuButton from "./MenuButton";
import { MdOutlineClose } from "react-icons/md";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when user clicks off
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    if (showMenu) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  return (
    <header className="sticky top-0 left-0 bg-gray-900 z-10 p-6 md:p-8 flex justify-between mb-8 font-semibold text-lg">
      <a className="bg-sky-600 text-white rounded-md py-2 px-3 drop-shadow-md" href="/Abdu-Lateef Lekan-Fadeyi's Resume.pdf" download>Download My Resume</a>
      <div className="hidden md:inline-block">
        {["About", "Education", "Experience", "Projects", "Contact"].map((section, index) => (
          <NavButton key={index} section={section} />
        ))}
      </div>

      <div className="block md:hidden">
        <div onClick={() => setShowMenu(!showMenu)}>
          {!showMenu ? <CiMenuFries size={30} className="pt-1" /> : <MdOutlineClose size={30} className="pt-1" />}
        </div>
        <div
          className={`fixed top-0 left-0 mt-24 w-full px-4 transition-all duration-150 ease-in-out ${showMenu ? "opacity-100 visible" : "opacity-0 scale-90 invisible -z-50"}`}
          ref={menuRef}
        >
          <div className="bg-gray-800 drop-shadow-xl rounded-md">
            <div className="p-5">
              {["About", "Education", "Experience", "Projects", "Contact"].map((section, index) => (
                <MenuButton key={index} section={section} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header >
  );
}

export default NavBar;
