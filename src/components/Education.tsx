function Education() {
  return (
    <div id="Education" className="section px-8 mb-32">
      <span className="block text-3xl font-bold mb-8 text-center">EDUCATION</span>
      <div className=" w-[80%] max-w-[1400px] mx-auto">
        <div className="text-center pt-1 pb-3">
          <div className="inline-block object-contain rounded-lg w-40 h-40 overflow-hidden">
            <img src="https://ih1.redbubble.net/image.3102722361.0664/raf,360x360,075,t,fafafa:ca443f4786.jpg" />
          </div>
        </div>
        <div className="ml-2 text-center mb-5">
          <div className="font-semibold text-xl">University of Guelph</div>
          <span>Bachelor of Computing: Major in Software Engineering, Minor in Business</span>
        </div>
        <p className="px-8 pb-4 text-center">Sep 2023 - May 2028</p>
        <p className="px-8 pb-1 text-center">Currently maintaining a 97% average.</p>
        <p className="px-8 pb-3 text-center">Relevant Cousework: Data Structures, Software Design, Object-Oriented Programming.</p>

      </div>
    </div >
  );
}

export default Education;
