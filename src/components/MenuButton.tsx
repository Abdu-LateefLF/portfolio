import useCurrentSection from "../hooks/useCurrentSection";

interface Props {
  section: string;
}

function MenuButton({ section }: Props) {
  const { currentSection } = useCurrentSection();

  return (
    <div className="block w-full relative mt-3 mb-1"
      onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}>
      <div className="cursor-pointer pb-2 px-2">{section}</div>
      {
        currentSection === section && (
          <div className="relative">
            <div className="absolute bottom-full left-0 w-full h-10 bg-gradient-to-t from-cyan-300/5 to-transparent"></div>
            <div className="h-1 w-full rounded-lg bg-cyan-500"></div>
          </div>
        )
      }
    </div >
  )
}

export default MenuButton
