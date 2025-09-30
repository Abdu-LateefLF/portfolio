function Experience() {
  return (
    <div id="Experience" className="section px-8 mb-44">
      <span className="block text-3xl font-bold pt-32 mb-8 text-center">
        WORK EXPERIENCE
      </span>
      <div className="md:w-[80%] max-w-[1400px] mx-auto">
        <div className="text-center pt-8 pb-3">
          <div className="inline-block object-contain rounded-lg w-20 h-20 overflow-hidden">
            <img src="D2AI-logo.jpg" />
          </div>
        </div>
        <div className="ml-2 text-center mb-5">
          <div className="font-semibold text-lg">D2AI.ca</div>
          <span>ML/AI Software Engineer Intern | May 2025 - Present</span>
        </div>
        <p className="px-2 md:px-8 pb-8 text-center">
          Designed a cron service to automate club fee charges and payment
          reminders, boosting operational efficiency by 35%. Created user
          authentication and profile management flows with FastAPI and Next.js,
          and AWS S3 for file storage. Built a Super Admin dashboard with
          FastAPI and Next.js, streamlining club creation, reducing manual
          effort by 20%. Developed a CNN pipeline with PyTorch, Mediapipe, and
          OpenCV to analyze basketball shots and provide feedback.
        </p>
      </div>
      <div className="md:w-[80%] max-w-[1400px] mx-auto">
        <div className="text-center pt-8 pb-3">
          <div className="inline-block object-contain rounded-lg w-20 h-20 overflow-hidden">
            <img src="https://media.glassdoor.com/sqll/2858115/outlier-ai-squareLogo-1715217719094.png" />
          </div>
        </div>
        <div className="ml-2 text-center mb-5">
          <div className="font-semibold text-lg">Outlier AI</div>
          <span>AI Writing Evaluator | July 2024 - Present</span>
        </div>
        <p className="px-2 md:px-8 pb-8 text-center">
          Employing prompt engineering to design creative and comprehensive
          scenarios for evaluating client AI models. Analyzing extensive
          AI-generated text to assess adherence to quality standards and
          reporting performance issues.
        </p>
      </div>
    </div>
  );
}

export default Experience;
