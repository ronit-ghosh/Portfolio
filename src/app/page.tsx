import Avatar from "@/components/Avatar";
import Info from "@/components/Info";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="h-[100dvh] bg-background max-w-xl mx-auto flex flex-col items-center">
      <div className="w-full px-4">
        <div className="relative z-10 flex flex-col items-center space-y-1 mt-10">
          <div className="fixed top-0 -z-50 w-xl">
            <div className="w-64 h-64 absolute -top-36 -left-10 -z-50 bg-purple-700/50 blur-3xl animate-pulse duration-4000" />
            <div className="w-64 h-64 absolute -top-36 left-30 -z-50 bg-purple-700/50 blur-3xl animate-pulse duration-4000" />
            <div className="w-64 h-64 absolute -top-36 -right-10 -z-50 bg-purple-700/50 blur-3xl animate-pulse duration-4000" />
          </div>
          <Avatar />
          <h1 className="text-2xl font-bold mt-1 bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-transparent">Ronit Ghosh</h1>
          <Socials />
          <Info />
          <Skills />
        </div>
        <Projects />
      </div>
    </div>
  );
}
