function Experience() {
  return (
    <div id="Experience" className="section px-8 mb-44">
      <span className="block text-3xl font-bold pt-32 mb-8 text-center">
        WORK EXPERIENCE
      </span>
      <div className="md:w-[80%] max-w-[1400px] mx-auto space-y-12">
        {/* Magnet Forensics Experience */}
        <div>
          <div className="text-center pt-8 pb-3">
            <div className="inline-block object-contain rounded-lg w-20 h-20 overflow-hidden mb-4">
              <img src="MagnetForensics-logo.png" />
            </div>
            <div className="font-semibold text-lg">Magnet Forensics</div>
            <span>Software Developer Intern | Sep 2025 – Present</span>
          </div>
          <p className="px-2 md:px-8 pb-8 text-center">
            Building modular and testable .NET helper libraries using Dependency
            Injection, Builder, and Factory patterns. Implementing unit and mock
            testing (xUnit, Moq) with regression tests and CI/CD pipelines to
            ensure reliable artifact ingestion. Working with SQLite databases
            through LINQ and EF Core, parsing JSON and PList files, and
            processing data used across six products. Applying reverse
            engineering and Linux shell tools to trace undocumented file paths
            and recover unsupported artifacts.
          </p>
        </div>

        {/* D2AI Experience */}
        <div>
          <div className="text-center pt-8 pb-3">
            <div className="inline-block object-contain rounded-lg w-20 h-20 overflow-hidden mb-4">
              <img src="D2AI-logo.jpg" />
            </div>
            <div className="font-semibold text-lg">D2AI.ca</div>
            <span>ML/AI Software Engineer Intern | May 2025 - Aug 2025</span>
          </div>
          <p className="px-2 md:px-8 pb-8 text-center">
            Designed and deployed a cron service to automate club fee charges
            and payment reminders, improving operational efficiency by 35%.
            Developed secure user authentication and profile management with
            FastAPI, Next.js, and AWS S3 for file storage. Built a Super Admin
            dashboard using FastAPI and Next.js to streamline club creation,
            cutting manual effort by 20%. Created a CNN pipeline with PyTorch,
            MediaPipe, and OpenCV to analyze basketball shots and deliver
            real-time performance feedback.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
