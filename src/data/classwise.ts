export interface Stat {
  value: string;
  label: string;
}

export interface Recognition {
  title: string;
  org: string;
  period?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  url?: string;
}

export interface FeaturedProject {
  title: string;
  role: string;
  tagline: string;
  intro: string[];
  image: string;
  imageAlt: string;
  stats: Stat[];
  highlights: string[];
  tags: string[];
  links: { label: string; url: string }[];
  recognition: Recognition[];
}

const classwise: FeaturedProject = {
  title: "Classwise AI",
  role: "Co-Founder & Chief AI Officer · May 2025 – Present",
  tagline: "AI assessment that grades handwritten work the way the teacher would, in minutes.",
  intro: [
    "Teachers lose nights and weekends to grading, and students wait days for feedback that would have helped on the next assignment. Classwise lets teachers grade with their own rubrics and answer keys, keeps students working on pen and paper, and returns rubric-aligned feedback while the lesson is still fresh.",
    "As co-founder and CAIO, I own the AI and most of the platform behind it: the grading agent, the evaluation system that tells us whether it's actually right, the worker pipeline that processes every submission, and the LMS integrations that let schools adopt it without changing how they teach. The teacher always has the final say. AI suggests, they decide.",
  ],
  image: "/classwise/grading-hero.jpg",
  imageAlt: "Classwise grading dashboard showing student work, rubric feedback, and teacher review",
  stats: [
    { value: "14,000+", label: "assignments graded" },
    { value: "1,800+", label: "teacher hours saved" },
    { value: "$55K", label: "revenue" },
    { value: "$47K", label: "in competition prizes" },
  ],
  highlights: [
    "Architected the LangGraph grading agent that reads handwritten work and grounds every score and comment in the teacher's rubric and course materials.",
    "Built an evaluation system with curated datasets that tracks grading accuracy, failure modes, latency, and cost, catching regressions before release and cutting incidents by 82%.",
    "Designed distributed PDF/image processing and grading workers on a job queue with retries, ownership, and concurrency control, so large batches finish reliably.",
    "Built a pluggable LMS integration layer (Google Pub/Sub, Cloud Functions) for Google Classroom, Canvas, and Moodle, cutting manual setup by 90%.",
    "Built the full-stack teacher app (Node.js, Next.js, PostgreSQL) for managing courses, rosters, and assignments, and for reviewing and publishing student feedback.",
  ],
  tags: ["TypeScript", "LangGraph", "Node.js", "Next.js", "PostgreSQL", "GCP", "Pub/Sub", "Jest"],
  links: [
    { label: "Visit Classwise", url: "https://www.classwise.ai" },
    { label: "How it works", url: "https://www.classwise.ai/how-it-works" },
    { label: "Teacher testimonials", url: "https://www.classwise.ai/testimonials" },
  ],
  recognition: [
    {
      title: "1st Place, Siakam EdTech Engine Demo Day",
      org: "DMZ × PS43 Foundation",
      period: "Aug 2026",
      description:
        "Won the $30,000 first-place grant, out of 7 startups, in the K-12 accelerator from Pascal Siakam's PS43 Foundation and DMZ, the #1 university incubator globally.",
      image: "/classwise/siakam-edtech-engine-win.jpg",
      imageAlt: "Classwise with the Siakam EdTech Engine grant recipients and organizers at Demo Day",
      url: "https://www.classwise.ai/blog-guides/classwise-wins-siakam-edtech-engine-2026",
    },
    {
      title: "2nd Place, McGill Dobson Cup",
      org: "McGill Dobson Centre for Entrepreneurship",
      period: "May 2026",
      description:
        "Placed second in the Technology-Driven Enterprise Track of McGill's flagship startup competition, taking home $12,000 after weeks of bootcamp and mentor-led pitch rounds.",
      image: "/classwise/dobson-cup-win.jpg",
      imageAlt: "The Classwise team at the 2026 McGill Dobson Cup",
      url: "https://www.classwise.ai/blog-guides/classwise-wins-second-place-mcgill-dobson-cup-2026",
    },
    {
      title: "1EdTech Certified",
      org: "LTI Advantage",
      description:
        "Passed 1EdTech conformance testing for LTI Advantage, so schools can connect Classwise to the LMS they already trust.",
      image: "/classwise/1edtech-certified.svg",
      imageAlt: "1EdTech TrustEd Apps certified logo",
      url: "https://www.classwise.ai/blog-guides/classwise-ai-is-now-1edtech-certified",
    },
    {
      title: "NEXT AI 2026 Cohort",
      org: "NEXT Canada",
      period: "Mar – Aug 2026",
      description:
        "Accepted into one of Canada's most competitive AI accelerators, with business and technical mentorship from experienced founders and operators.",
    },
    {
      title: "1st Place, BFN × Black Career Conference Pitch",
      org: "Black Founders Network · University of Toronto",
      period: "Jan 2026",
      description: "Placed first out of 100+ founders from across Canada and won a $5,000 grant.",
    },
  ],
};

export default classwise;
