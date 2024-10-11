import Language from "./Language";
import icons from "../data/icons";

function TechStack() {
  return (
    <div className="h-[150px] px-8 mb-32">
      <div className="mb-8 text-3xl font-bold text-center">TECH STACK</div>
      <div className="flex w-full overflow-hidden mask-fade">
        <div className="flex animate-marquee">
          {[...icons, ...icons].map((src, index) => (
            <Language key={index} src={src} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
