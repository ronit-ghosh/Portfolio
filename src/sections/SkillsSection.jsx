import SkillsCard from "../components/SkillsCard";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";

const SkillsSection = () => {
    const skills = [{
        text: "HTML",
        icon: <FaHtml5 fontSize={60} color="#e96228"/>
    }, {
        text: "CSS",
        icon: <IoLogoCss3 fontSize={60} color="#2862e9"/>
    }, {
        text: "Tailwind",
        icon: <SiTailwindcss fontSize={60} color="#1dc0cd"/>
    }, {
        text: "JavaScript",
        icon: <IoLogoJavascript fontSize={60} color="#f7e025"/>
    }, {
        text: "React",
        icon: <FaReact fontSize={60} color="#66dbfb"/>
    },]
    
    return (
        <section className="text-gray-600 body-font min-h-[78vh]">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900 capitalize">Here are my skills in a nutshell</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base capitalize">From crafting responsive designs to building dynamic web applications, I’m well-versed in the essentials and always eager to learn more.</p>
                </div>
                <div className="flex flex-wrap -m-4 text-center justify-center">
                    {
                        skills.map((skill) => <SkillsCard text={skill.text} icon={skill.icon} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
