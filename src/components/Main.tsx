import Avatar from "@/components/Avatar";
import Info from "@/components/Info";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import { motion } from "motion/react";

export default function Main() {
  return (
    <div className="w-full max-w-xl px-4">
      <div className="relative z-10 mt-10 flex flex-col items-center space-y-1">
        <Avatar />
        <h1 className="mt-1 bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-2xl font-bold text-transparent">
          Ronit Ghosh
        </h1>
        <Socials />
        <Info />
        <Skills />
      </div>
      <Projects />
    </div>
  );
}

// div {
//   background-color: hsl(0, 0%, 0%);
//   background-image: ;;
// }
