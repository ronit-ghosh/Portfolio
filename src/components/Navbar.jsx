import { CgDarkMode } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Navbar = () => {
    const navLinks = [{
        text: "LinkedIn",
        icon: <FaLinkedin fontSize={22} color="rgb(243 244 246)"/>,
        link: "https://www.linkedin.com/in/ronit-ghosh-7b10972a2/"
    }, {
        text: "Twitter",
        icon: <BsTwitterX fontSize={18} color="rgb(243 244 246)"/>,
        link: "https://twitter.com/ronit__ghosh"
    }, {
        text: "G-Mail",
        icon: <BiLogoGmail fontSize={26} color="rgb(243 244 246)"/>,
        link: "mailto:work.ronitghosh@gmail.com?cc=ronitghosh06@gmail.com"
    },]
    return (
        <header className="bg-indigo-500 body-font rounded-br-xl rounded-bl-xl">
            <div className="p-4 mx-auto flex items-center justify-around md:px-14">
                <a className="flex title-font font-medium items-center text-gray-900">
                    <span className="ml-3 text-xl text-gray-100 lg:block hidden">Ronit</span>
                </a>
                <nav className="lg:mr-auto lg:ml-4 lg:py-1 lg:pl-4 lg:border-l lg:border-gray-400 flex flex-wrap items-center text-base justify-center">
                    {
                        navLinks.map(navLink => <a href={navLink.link} target="_blank" className="mr-5 hover:text-gray-200 text-gray-50 flex items-center gap-2">{navLink.icon} <span className="md:block hidden">{navLink.text}</span></a>)
                    }
                </nav>
                <button className="flex items-center bg-gray-100 border-0 py-1 px-2 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0"><CgDarkMode fontSize={24} filter="" /></button>
            </div>
        </header>
    )
}

export default Navbar