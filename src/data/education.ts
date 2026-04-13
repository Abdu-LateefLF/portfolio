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
      "Recipient of the Dean's Scholarship ($1,000) for outstanding academic achievement.",
    ],
    coursework: [
      "Operating Systems",
      "Analysis & Design of Algorithms",
      "Software System Development & Integration",
      "Software Design",
      "Data Structures & OOP",
    ],
  },
];

export default education;
