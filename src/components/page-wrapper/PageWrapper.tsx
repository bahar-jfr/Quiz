import { IntroSection } from "../intro-section/IntroSection";
import { MdOutlineBrightnessMedium } from "react-icons/md";

export function PageWrapper() {
  return (
    <div className="flex flex-col items-center gap-12 h-screen bg-slate-50">
      <div className="text-left py-4 px-8 w-full"><MdOutlineBrightnessMedium  /></div>
      <IntroSection />
    </div>
  );
}
