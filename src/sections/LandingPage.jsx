import React from 'react'
import Navbar from '../components/Navbar'
import animationData from '../assets/lotties/Animation.json';
import Lottie from "react-lottie";
import { FaGithub } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <section className="text-subtext bg-background body-font px-10 md:mt-0 pt-10">
                <div className="container h-[91dvh] mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-6xl text-4xl mb-4 font-bold text-heading">Hello, I'm Ronit</h1>
                        <p className="mb-8 leading-relaxed capitalize">A passionate self-taught web developer with a keen interest in creating dynamic and responsive web applications. Currently enhancing my skills in React, Express, Node.js, and more.</p>
                        <div className="flex justify-center">
                            <a href="https://github.com/ronit-ghosh" target='_blank'><button className="flex items-center gap-2 text-white bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-accent_hover rounded text-lg"><FaGithub fontSize={24} /> Github</button></a>
                            <a href="https://drive.google.com/file/d/1Nu2wb0gKoEW65KWYXUJrGyik-Gg3KHVa/view?usp=sharing" target='_blank'><button className="ml-4 flex items-center gap-2 border-0 py-2 px-6 focus:outline-none rounded text-lg bg-btn_bg_color hover:bg-btn_hover_bg_color text-btn_text"><FiDownloadCloud fontSize={23} />Resume</button></a>
                        </div>
                    </div>
                    <div className='overflow-hidden lg:max-w-xl lg:w-full md:w-1/2 object-cover object-center rounded '>
                        <Lottie options={defaultOptions} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage
