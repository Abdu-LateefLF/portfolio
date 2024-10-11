function Contact() {
  return (
    <div id="Contact" className="section bg-gray-800 text-white">
      <div className="max-w-[900px] mx-auto p-8">
        <span className="block text-3xl font-bold mb-3 text-center">CONTACT ME</span>
        <p className="font-semibold mb-8 text-center">I'm open to new opportunities and collaborations. Let's connect!</p>
        <div className="grid grid-cols-2 px-3 text-gray-300">
          <div className="inline-block mx-auto">
            <div className="my-3">Email: <a href="mailto:tomiwafadeyi@gmail.com">tomiwafadeyi@gmail.com</a></div>
            <div className="my-3">LinkedIn: <a href="https://www.linkedin.com/in/abdu-lateef-lf/">linkedin.com/in/abdu-lateef-lf</a></div>
          </div>
          <div className="inline-block mx-auto">
            <div className="my-3">GitHub: <a href="https://github.com/Abdu-LateefLF">github.com/Abdu-LateefLF</a></div>
            <div className="my-3">Telephone: <a href="tel:5872281366">+1 (587) 228-1366</a></div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Contact;
