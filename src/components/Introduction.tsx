import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Introduction() {
  return (
    <div className="mx-auto max-w-[1400px] grid md:grid-cols-[60%_40%] py-12 px-5">
      <section className="flex flex-col align-middle justify-center text-center py-5">
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold pb-4">Abdu-Lateef Lekan-Fadeyi</span>
        <span className="font-semibold text-xl md:text-2xl mb-5 text-indigo-500">Software Engineering Student | Web & App Developer</span>
        <div className="mb-5">
          <a href="https://www.linkedin.com/in/abdu-lateef-lf/">
            <FaLinkedin size={30} className="inline-block mx-2 mt-1 transition-transform hover:text-gray-700 hover:scale-150" />
          </a>
          <a href="https://github.com/Abdu-LateefLF">
            <FaSquareGithub size={30} className="inline-block mx-2 mt-1 transition-transform hover:text-gray-700 hover:scale-150" />
          </a>
          <a href="mailto:tomiwafadeyi@gmail.com">
            <SiGmail size={30} className="inline-block mx-2 mt-1 transition-transform hover:text-gray-700 hover:scale-150" />
          </a>
        </div>
        <p>Motivated by opportunites to learn and develop.</p>
      </section>
      <div className="w-[320px] h-[320px] rounded-full object-fill overflow-hidden mx-auto mt-8">
        <img src="/profile14.jpg" />
      </div>
    </div>
  );
}

export default Introduction;
