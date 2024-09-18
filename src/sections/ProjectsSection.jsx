import ProjectCard from "../components/ProjectCard"
import mewsixImg from "../assets/images/mewsix.png"
import quipImg from "../assets/images/quip.png"
import paymentsappImg from "../assets/images/paymentsapp.png"
import dailymuseImg from "../assets/images/dailymuse.png"

const ProjectsSection = () => {
  const dailymuse = [
    "Fetch all blogs with pagination, fetch specific user's blogs",
    "Recoil AtomFamily, SelectorFamily for async data fetching and caching",
    "Sign-in, sign-up, Create, update, delete blogs",
    "Zod validation, password hashing",
    "Used Zod type inference for consistent type safety across backend and frontend",
    "Custom hooks for cleaner code base"
  ];
  const paymetnsapp = [
    "secure routes for sign-in, sign-up, dashboard, and transactions with Zod and JWT",
    "password hashing, salting, and concurrent request handling",
    "responsive frontend with a dashboard and transaction page",
    "Used Recoil for State Management in React",
    "Daisy UI for Premade UI components"
  ];
  const quip = [
    " real-time messaging.",
    "user authentication.",
    "responsive design.",
    "Demo ID: demo@gmail.com",
    "Password: demo123"
  ];
  const mewsix = [
    "Play, pause, and stop functionality.",
    "Progress bar to visualize the current playing position.",
    "Volume control.",
    "Playlist functionality to queue up multiple tracks.",
    "Responsive design for seamless experience across devices"
  ];

  return (
    <>
      <div className="bg-background text-subtext">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-heading capitalize">Here are few of my Projects</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base capitalize">From designing engaging interfaces to developing interactive web experiences, I specialize in creating visually captivating and highly functional projects. Always excited to explore new technologies and push the boundaries of web development.</p>
        </div>

        <ProjectCard
          title="Daily Muse"
          description="a blog app named Daily Muse using TypeScript, Hono, React, and Prisma"
          githubLink="https://github.com/ronit-ghosh/Daily-Muse"
          livePreviewLink="https://daily--muse.vercel.app/"
          features={dailymuse}
          image={dailymuseImg}
          isLeft
        />
        <ProjectCard
          title="Payments App"
          description="a real-time Payments App using the MERN stack"
          githubLink="https://github.com/ronit-ghosh/Payments-App"
          livePreviewLink="https://payments-app-rg.vercel.app/"
          features={paymetnsapp}
          image={paymentsappImg}
          isLeft={false}
        />
        <ProjectCard
          title="Quip"
          description="a real-time chat application using React, Tailwind CSS, and Firebase"
          githubLink="https://github.com/ronit-ghosh/Quip"
          livePreviewLink="https://quiip.vercel.app/"
          features={quip}
          image={quipImg}
          isLeft
        />
        <ProjectCard
          title="Mewsix"
          description="a Music Player, allows users to play their favorite music tracks directly in their web browser without any external dependencies."
          githubLink="https://github.com/ronit-ghosh/Mewsix"
          livePreviewLink="https://mewsix.freewebhostmost.com/"
          features={mewsix}
          image={mewsixImg}
          isLef={false}
        />

      </div>
    </>
  )
}

export default ProjectsSection
