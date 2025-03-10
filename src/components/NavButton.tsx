import useCurrentSection from "../hooks/useCurrentSection";

interface Props {
  section: string;
}

function NavButton({ section }: Props) {
  const { currentSection } = useCurrentSection();

  // Function to handle smooth scrolling to the section
  const handleScroll = () => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // smooth scrolling
        block: "start", // scroll to the top of the element
        inline: "nearest", // scroll horizontally (if needed)
      });
    }
  };

  return (
    <div
      className="relative inline-block mx-3 cursor-pointer"
      onClick={handleScroll}
    >
      <span
        className={`text-sm text-white pb-1 px-2 transition-all hover:text-cyan-400 ${
          currentSection === section ? "font-bold" : ""
        }`}
      >
        {section}
      </span>
      {currentSection === section && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500 rounded-full"></div>
      )}
    </div>
  );
}

export default NavButton;
