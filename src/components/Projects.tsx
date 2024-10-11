import { FaExternalLinkAlt } from "react-icons/fa";
import ToolBadge from "./ToolBadge";

function Projects() {
  return (
    <div id="Projects" className="section px-8 mx-auto max-w-[1000px]">
      <span className="block text-3xl font-bold mb-8 text-center">MY PROJECTS</span>
      <div className="mb-16">
        <div className="grid grid-cols-2 my-5">
          <div className="object-contain w-full h-[220px] rounded-lg overflow-hidden">
            <img src="/aiRecipeFinder.png" />
          </div>
          <div className="pl-8 pr-3">
            <div className="flex justify-between text-lg font-semibold mb-5">
              <div className="inline-block">AI Recipe Finder</div>
              <a href="https://airecipefinder.vercel.app">
                <FaExternalLinkAlt className="mt-1 transition-transform hover:text-blue-800 hover:scale-150" />
              </a>
            </div>

            <div>
              A full stack AI recipe recommender that suggests recipes to users
              based on ingredients they have at home utilizing <b className="font-semibold text-gray-700">OpenAI API</b>.
            </div>
            <div>
              <span className="block my-3 pl-3">Created Using:</span>
              {["React", "JavaScript/TypeScript", "Node.js", "Express.js", "TailwindCSS"].map((item, index) => (
                <ToolBadge key={index}>
                  {item}
                </ToolBadge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="my-16">
        <div className="grid grid-cols-2 my-5">
          <div className="pr-8 pl-3">
            <div className="flex justify-between text-lg font-semibold mb-5">
              <div className="inline-block">ArtMe - Virtual Art Gallery</div>
              <a href="https://art-gallery-lf.vercel.app">
                <FaExternalLinkAlt className="mt-1 transition-transform hover:text-blue-800 hover:scale-150" />
              </a>
            </div>

            <div>
              A platform that allows people to view historical art from the <b className="font-semibold text-gray-700">
                Harvard Art Museam</b>, curate personalized galleries,
              and share their collections with friends.
            </div>
            <div>
              <span className="block my-3 pl-3">Created Using:</span>
              {["HTML", "CSS", "JavaScript", "Node.js", "Express.js"].map((item, index) => (
                < ToolBadge key={index} >
                  {item}
                </ToolBadge>
              ))}
            </div>
          </div>
          <div className="object-contain w-full h-[200px] rounded-lg overflow-hidden">
            <img src="/ArtMe2.png" />
          </div>
        </div>
      </div>

      <hr />

      <div className="my-16">
        <div className="grid grid-cols-2 my-5">
          <div className="object-contain w-full h-[190px] rounded-lg overflow-hidden text-center">
            <img src="/escapeTheMaze.png" />
          </div>
          <div className="pl-8 pr-3">
            <div className="flex justify-between text-lg font-semibold mb-5">
              <div className="inline-block">Escape The Maze - Android Mobile Game</div>
              <a href="https://play.google.com/store/apps/details?id=com.PurpleSock.EscapeTheMaze&pli=1">
                <FaExternalLinkAlt className="mt-1 transition-transform hover:text-blue-800 hover:scale-150" />
              </a>
            </div>

            <div>
              An Android mobile game featuring a first-person character battling
              an AI-controlled snake, developed in <b className="font-semibold text-gray-700">Unity</b> and deployed to the
              Google Play Store.
            </div>
            <div>
              <span className="block my-3 pl-3">Created Using:</span>
              {["C#", ".NET Framework"].map((item, index) => (
                < ToolBadge key={index} >
                  {item}
                </ToolBadge>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div >
  );
}

export default Projects;
