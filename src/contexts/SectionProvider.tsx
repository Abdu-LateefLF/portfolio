import React, { ReactNode, useEffect, useRef, useState } from "react";

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
  const [currentSection, setCurrentSection] = useState("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observe = () => {
      const sections = document.querySelectorAll(".section");
      if (sections.length === 0) return;

      observerRef.current?.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentSection(entry.target.id);
            }
          });
        },
        {
          root: null,
          // A thin band near the top of the viewport, so sections of any height register.
          threshold: 0,
          rootMargin: "-35% 0px -64% 0px",
        }
      );

      sections.forEach((section) => observerRef.current!.observe(section));
    };

    observe();

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export default SectionProvider;
