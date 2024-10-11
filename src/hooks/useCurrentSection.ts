import { useContext } from "react";
import { SectionContext } from "../contexts/SectionProvider";

const useCurrentSection = () => useContext(SectionContext);

export default useCurrentSection;
