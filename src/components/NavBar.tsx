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
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  return (
    <header className="sticky top-0 left-0 bg-gray-900 z-10 p-6 md:p-8 flex justify-between items-center mb-8 font-semibold text-lg">
      <a
        className="bg-sky-600 text-sm text-white rounded-sm py-2 px-3 drop-shadow-md hover:bg-sky-700 transition-colors"
        href="/Abdu-Lateef Lekan-Fadeyi's Resume.pdf"
        download
      >
        Download My Resume
      </a>
      <div className="hidden md:flex space-x-6">
        {["About", "Education", "Experience", "Projects", "Contact"].map(
          (section, index) => (
            <NavButton key={index} section={section} />
          )
        )}
      </div>

      <div className="block md:hidden">
        <div onClick={() => setShowMenu(!showMenu)}>
          {!showMenu ? (
            <CiMenuFries size={30} className="pt-1 text-white" />
          ) : (
            <MdOutlineClose size={30} className="pt-1 text-white" />
          )}
        </div>

        <div
          className={`fixed top-0 left-0 mt-24 w-full px-4 bg-gray-800 drop-shadow-xl rounded-md transition-all duration-200 ease-in-out ${
            showMenu
              ? "opacity-100 visible scale-100 z-20"
              : "opacity-0 scale-90 invisible -z-50"
          }`}
          ref={menuRef}
        >
          <div className="p-5 space-y-4">
            {["About", "Education", "Experience", "Projects", "Contact"].map(
              (section, index) => (
                <MenuButton key={index} section={section} />
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
