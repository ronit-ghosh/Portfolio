import Button from "./Button";
import Navbar from "./Navbar"
import { CgSoftwareDownload } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import animationData from '../lotties/Animation.json';
import Lottie from "react-lottie";

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
            <main className="h-[90vh] flex">
                <div className="h-full w-[50%] flex flex-col justify-center pl-12">
                    <span className="text-7xl font-bold">Hello,</span>
                    <span className=" text-8xl font-extrabold">I am RONIT</span>
                    <span className="text-6xl font-bold">Front-end Developer</span>
                    <div className="flex gap-4 mt-10">
                        <Button text="Github" icon={<FaGithub fontSize={22} />} />
                        <Button text="LinkedIn" icon={<FaLinkedin fontSize={22} />} />
                        <Button text="Resume" icon={<CgSoftwareDownload fontSize={22} />} />
                    </div>
                </div>
                <div className="h-full w-[50%] flex justify-center items-center pb-16 relative">
                    {/* <div className="absolute w-96 h-96 bg-gray-700 blur-3xl"></div> */}
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400} />
                </div>
            </main >
        </>
    )
}

export default LandingPage