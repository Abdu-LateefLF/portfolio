import React, { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

export interface SectionContextType {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export const SectionContext = React.createContext<SectionContextType>(
  {} as SectionContextType
);

function SectionProvider({ children }: Props) {
  const [currentSection, setCurrentSection] = useState("Introduction");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.2,
        rootMargin: "0px 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export default SectionProvider;
