import About from "@/components/about";
import Conferences from "@/components/conferences";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Vita from "@/components/vita";


export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Vita />
        <Conferences />
      </main>
    </div>
  );
}
