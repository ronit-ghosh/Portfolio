import ProjectCard from "../components/ProjectCard"
import mewsixImg from "../assets/images/mewsix.png"
import contactAppImg from "../assets/images/contactapp.png"
import devSandboxImg from "../assets/images/devsandbox.png"
import animatedWebsiteImg from "../assets/images/animatedwebsite.png"

const ProjectsSection = () => {
  const mewsix = [
    "Play, pause, and stop functionality.",
    "Progress bar to visualize the current playing position.",
    "Volume control.",
    "Playlist functionality to queue up multiple tracks.",
    "Responsive design for seamless experience across devices"
  ];

  const contactApp = [
    "Used Formik for Form Handling",
    "Yup for validation",
    " Tailwind for styling"
  ]

  const devSandbox = [
    "Built with React.js",
    "Code editor functionality implemented using CodeMirror and react-codemirror2",
    "Styled using Tailwind CSS"
  ]

  const animatedWebsite = [
    "Features smooth animations and a modern design",
    "Utilizes GSAP & Tilt JS for creating advanced animations and interactions",
    "Responsive design ensuring compatibility across various devices"
  ]

  return (
    <><div className="bg-background text-subtext">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-heading capitalize">Here are my Projects</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base capitalize">From designing engaging interfaces to developing interactive web experiences, I specialize in creating visually captivating and highly functional projects. Always excited to explore new technologies and push the boundaries of web development.</p>
      </div>
      <ProjectCard
        title="Mewsix"
        description="a Music Player, allows users to play their favorite music tracks directly in their web browser without any external dependencies."
        githubLink="https://github.com/ronit-ghosh/Mewsix"
        livePreviewLink="https://mewsix.freewebhostmost.com/"
        features={mewsix}
        image={mewsixImg}
        isLeft />
      <ProjectCard
        title="Contact App"
        description="a CRUD Contact App with real-time contact management & search functionality."
        githubLink="https://github.com/ronit-ghosh/Contact-App"
        livePreviewLink="https://crud-contact-app-psi.vercel.app/"
        features={contactApp}
        image={contactAppImg}
        isLeft={false} />
      <ProjectCard
        title="Dev Sandbox"
        description="a web application designed to render HTML, CSS, and JavaScript."
        githubLink="https://github.com/ronit-ghosh/Dev-Sandbox"
        livePreviewLink="https://dev-sandbox-three.vercel.app/"
        features={devSandbox}
        image={devSandboxImg}
        isLeft
      />
      <ProjectCard
        title="Animated Website"
        description="an animated website featuring smooth animations and a modern design."
        githubLink="https://github.com/ronit-ghosh/Animated-Golf-Website"
        livePreviewLink="https://animated-golf-website.vercel.app/"
        features={animatedWebsite}
        image={animatedWebsiteImg}
        isLeft={false}
      />
    </div>
    </>
  )
}

export default ProjectsSection
