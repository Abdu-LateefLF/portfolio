import { FaExternalLinkAlt } from "react-icons/fa";
import ToolBadge from "./ToolBadge";

function Projects() {
  return (
    <div
      id="Projects"
      className="section px-5 md:px-10 pb-20 mx-auto max-w-[1000px] text-sm"
    >
      <span className="block text-3xl font-bold mb-8 text-center">
        MY PROJECTS
      </span>
      <div className="space-y-16">
        {/* Project 1: Political Figure Classifier */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="flex justify-between text-lg font-semibold mb-4 md:pl-8">
              <span className="inline-block">Political Figure Classifier</span>
              <a href="https://political-figure-classifier-a.vercel.app/">
                <FaExternalLinkAlt className="mt-1 transition-transform hover:text-indigo-500 hover:scale-125" />
              </a>
            </div>
            <p className="text-gray-600">
              A machine learning application that classifies political figures
              in images with high accuracy.
            </p>
            <div className="mt-4">
              <span className="block mb-2 text-sm font-semibold text-gray-700">
                Created Using:
              </span>
              <div className="flex flex-wrap gap-3">
                {[
                  "Python",
                  "TypeScript",
                  "Flask",
                  "Vue.js",
                  "Sci-kit Learn",
                  "TailwindCSS",
                ].map((item, index) => (
                  <ToolBadge key={index}>{item}</ToolBadge>
                ))}
              </div>
            </div>
          </div>
          <div className="object-cover w-full h-[200px] md:h-[250px] rounded-sm overflow-hidden order-1 md:order-2">
            <img
              src="/Politician Classifier.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Project 2: AI Recipe Finder */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="object-cover w-full h-[220px] rounded-sm overflow-hidden">
            <img
              src="/aiRecipeFinder.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex justify-between text-lg font-semibold mb-4 md:pl-8">
              <span className="inline-block">AI Recipe Finder</span>
              <a href="https://airecipefinder.vercel.app">
                <FaExternalLinkAlt className="mt-1 transition-transform hover:text-indigo-500 hover:scale-125" />
              </a>
            </div>
            <p className="text-gray-600">
              A full stack AI recipe recommender that suggests recipes to users
              based on ingredients they have at home utilizing{" "}
              <b className="font-semibold text-indigo-400">OpenAI API</b>.
            </p>
            <div className="mt-4">
              <span className="block mb-2 text-sm font-semibold text-gray-700">
                Created Using:
              </span>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "JavaScript/TypeScript",
                  "Node.js",
                  "Express.js",
                  "TailwindCSS",
                ].map((item, index) => (
                  <ToolBadge key={index}>{item}</ToolBadge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* Project 3: ArtMe - Virtual Art Gallery */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="flex justify-between text-lg font-semibold mb-4 md:pl-8">
              <span className="inline-block">ArtMe - Virtual Art Gallery</span>
              <a href="https://art-gallery-lf.vercel.app">
                <FaExternalLinkAlt className="mt-1 transition-transform hover:text-indigo-500 hover:scale-125" />
              </a>
            </div>
            <p className="text-gray-600">
              A platform that allows people to view historical art from the{" "}
              <b className="font-semibold text-indigo-400">
                Harvard Art Museum
              </b>
              , curate personalized galleries, and share their collections with
              friends.
            </p>
            <div className="mt-4">
              <span className="block mb-2 text-sm font-semibold text-gray-700">
                Created Using:
              </span>
              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JavaScript", "Node.js", "Express.js"].map(
                  (item, index) => (
                    <ToolBadge key={index}>{item}</ToolBadge>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="object-cover w-full h-[200px] md:h-[250px] rounded-sm overflow-hidden order-1 md:order-2">
            <img src="/ArtMe2.png" className="w-full h-full object-cover" />
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* Project 4: Escape The Maze */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="object-cover w-full h-[200px] md:h-[250px] rounded-sm overflow-hidden text-center">
            <img
              src="/escapeTheMaze.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex justify-between text-lg font-semibold mb-4 md:pl-8">
              <span className="inline-block">
                Escape The Maze - Android Mobile Game
              </span>
              <a href="https://play.google.com/store/apps/details?id=com.PurpleSock.EscapeTheMaze&pli=1">
                <FaExternalLinkAlt className="mt-1 transition-transform hover:text-indigo-500 hover:scale-125" />
              </a>
            </div>
            <p className="text-gray-600">
              An Android mobile game featuring a first-person character battling
              an AI-controlled snake, developed in{" "}
              <b className="font-semibold text-indigo-400">Unity</b> and
              deployed to the Google Play Store.
            </p>
            <div className="mt-4">
              <span className="block mb-2 text-sm font-semibold text-gray-700">
                Created Using:
              </span>
              <div className="flex flex-wrap gap-3">
                {["C#", "Unity 3D"].map((item, index) => (
                  <ToolBadge key={index}>{item}</ToolBadge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
