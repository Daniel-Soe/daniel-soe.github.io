import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";
import { links } from "@/lib/data";

export function useSectionInView(sectionName: SectionName, threshold=0.75) {
     const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
      
      const sectionHash = links.filter(link => (link.name === sectionName))[0].hash;
      window.history['replaceState'](undefined, "", sectionHash);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return ( { ref });
}