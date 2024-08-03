import { FaEye } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const ProjectCard = (props) => {
    const { title, description, githubLink, livePreviewLink, features, image, isLeft } = props
    return (
        <>{isLeft ?
            <section key={title} className="text-subtext body-font">
                <div className="container mx-auto flex md:px-16 px-6 pb-20 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
                        <img className="object-cover object-fit rounded bg-no-repeat" alt={title} src={image} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-heading capitalize">{title}</h1>
                        <p className="mb-8 leading-relaxed capitalize">{description}</p>
                        <ul className="list-disc list-inside mb-8">{
                            features.map(feature => <li key={feature} className="capitalize">{feature}</li>)
                        }</ul>

                        <div className="flex justify-center">
                            <a href={githubLink} target="_blank" className="flex items-center gap-2 text-white bg-accent border-0 py-2 px-4 focus:outline-none hover:bg-accent_hover rounded text-lg cursor-pointer"><FaGithub fontSize={24} /><span className="lg:block hidden">Source Code</span></a>
                            <a href={livePreviewLink} target="_blank" className="ml-4 flex items-center gap-2 text-btn_text bg-btn_bg_color border-0 py-2 px-5 focus:outline-none hover:bg-btn_hover_bg_color hover:text-heading rounded text-lg cursor-pointer"><FaEye fontSize={22} /><span className="lg:block hidden">Live Preview</span></a>
                        </div>
                    </div>
                </div>
            </section>
            :
            <section key={title} className="text-subtext body-font">
                <div className="container mx-auto flex md:px-16 px-6 pb-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-heading">{title}</h1>
                        <p className="mb-8 leading-relaxed capitalize">{description}</p>
                        <ul className="list-disc list-inside mb-8">{
                            features.map(feature => <li key={feature} className="capitalize">{feature}</li>)
                        }</ul>
                        <div className="flex justify-center">
                            <a href={githubLink} target="_blank" className="flex items-center gap-2 text-white bg-accent border-0 py-2 px-4 focus:outline-none hover:bg-accent_hover rounded text-lg cursor-pointer"><FaGithub fontSize={24} /><span className="lg:block hidden">Source Code</span></a>
                            <a href={livePreviewLink} target="_blank" className="ml-4 flex items-center gap-2 text-subtext bg-btn_bg_color border-0 py-2 px-5 focus:outline-none hover:bg-btn_hover_bg_color hover:text-heading rounded text-lg cursor-pointer"><FaEye fontSize={22} /><span className="lg:block hidden">Live Preview</span></a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
                        <img className="object-cover object-fit rounded bg-no-repeat" alt={title} src={image} />
                    </div>
                </div>
            </section>
        }</>
    )
}

export default ProjectCard
