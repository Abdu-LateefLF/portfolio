export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  highlights: string[];
  coursework: string[];
}

const education: EducationItem[] = [
  {
    institution: "University of Guelph",
    degree: "BComp Honours, Software Engineering (Co-op), Business Minor",
    period: "Sep 2023 – May 2028",
    gpa: "4.0 / 4.0 (95% average)",
    highlights: [
      "Maintaining top marks in Data Structures, Object-Oriented Programming, and Operating Systems.",
    ],
    coursework: [
      "Software System Development & Integration",
      "Analysis & Design of Algorithms",
      "Parallel Programming",
    ],
  },
];

export default education;
