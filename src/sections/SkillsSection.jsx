import SkillsCard from "../components/SkillsCard";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiRecoil } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiHono } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiFastify } from "react-icons/si";

const SkillsSection = () => {
    const skills = [{
        text: "HTML",
        icon: <FaHtml5 fontSize={60} color="#e96228" />
    }, {
        text: "CSS",
        icon: <IoLogoCss3 fontSize={60} color="#2862e9" />
    }, {
        text: "Tailwind",
        icon: <SiTailwindcss fontSize={60} color="#1dc0cd" />,
        title: "CSS Framework"
    }, {
        text: "TypeScript",
        icon: <SiTypescript fontSize={60} color="#3178c6" />
    }, {
        text: "JavaScript",
        icon: <IoLogoJavascript fontSize={60} color="#f7e025" />
    }, {
        text: "Next",
        icon: <SiNextdotjs fontSize={60} color="black" />,
        
    },{
        text: "Express",
        icon: <SiExpress fontSize={60} color="darkgray" />,
        title: "Backend Framework"
    }, {
        text: "Hono",
        icon: <SiHono fontSize={60} color="#ff3c0e" />,
        title: "Backend Framework"
    }, {
        text: "React",
        icon: <FaReact fontSize={60} color="#66dbfb" />,
        title: "Frontend Framework"
    }, {
        text: "Recoil",
        icon: <SiRecoil fontSize={60} color="#097ef4" />,
        title: "React State Management Library"
    }, , {
        text: "Prisma",
        icon: <SiPrisma fontSize={60} color="#143a51" />,
        title: "Object-Relational Mapping"
    }, {
        text: "Postgres",
        icon: <BiLogoPostgresql fontSize={60} color="#396c94" />,
        title: "SQL Database"
    }, {
        text: "Mongo",
        icon: <SiMongodb fontSize={60} color="#55ad47" />,
        title: "NoSQL Database"
    },]

    return (
        <section className="text-subtext bg-background body-font min-h-[78vh]">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-heading capitalize">Here are my skills in a nutshell</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base capitalize">From crafting responsive designs to building dynamic web applications, I’m well-versed in the essentials and always eager to learn more.</p>
                </div>
                <div className="flex flex-wrap -m-4 text-center justify-center">
                    {
                        skills.map((skill) => <SkillsCard key={skill.text} text={skill.text} icon={skill.icon} title={skill.title} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
