import InfoCard from "./InfoCard";

function Contact() {
  return (
    <div id="Contact" className="section bg-gray-800 h-[500px] text-white">
      <div className="max-w-[900px] h-full mx-auto p-8 flex flex-col justify-center">
        <span className="block text-3xl font-bold mb-5 md:text-center">CONTACT ME</span>
        <p className="font-semibold text-sm md:text-base mb-12 md:text-center">I'm open to new opportunities and collaborations. Let's connect!</p>
        <div className="grid md:grid-cols-2 md:gap-3 pl-3 md:px-3 text-gray-300">
          <div className="block md:inline-block w-full md:max-w-[300px] mx-auto">
            <div className="my-5">
              <InfoCard title="Email" content="tomiwafadeyi@gmail.com" href="mailto:tomiwafadeyi@gmail.com" />
            </div>
            <div className="my-5">
              <InfoCard title="LinkedIn" content="linkedin.com/in/abdu-lateef-lf" href="https://www.linkedin.com/in/abdu-lateef-lf/" />
            </div>
          </div>
          <div className="block md:inline-block w-full md:max-w-[300px] mx-auto">
            <div className="md:my-5">
              <InfoCard title="GitHub" content="github.com/Abdu-LateefLF" href="https://github.com/Abdu-LateefLF" />
            </div>
            <div className="my-5">
              <InfoCard title="Telephone" content="+1 (587) 228-1366" href="tel:5872281366" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
