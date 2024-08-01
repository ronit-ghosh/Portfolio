import { FaHtml5 } from "react-icons/fa";
import SkillsCard from "../components/SkillsCard";

const SkillsSection = () => {
    const skills = [{
        text: "HTML",
        icon: <FaHtml5 />
    }, {
        text: "HTML",
        icon: <FaHtml5 />
    }, {
        text: "HTML",
        icon: <FaHtml5 />
    }, {
        text: "HTML",
        icon: <FaHtml5 />
    }, {
        text: "HTML",
        icon: <FaHtml5 />
    },]
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
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
