import logo from "../public/logo.svg"
import { CgDarkMode } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [theme, setTheme] = useState(() => {
    // Get the saved theme from localStorage or use the preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return 'dark';
    } else {
      return 'light';
    }
  });

  useEffect(() => {
    // Apply the theme to the document body
    document.body.classList.add(theme);
    // Clean up previous theme
    return () => {
      document.body.classList.remove('light', 'dark');
    };
  }, [theme]);

  const handleThemeSwitch = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const navLinks = [{
    text: "LinkedIn",
    icon: <FaLinkedin fontSize={22} color="rgb(243 244 246)" />,
    link: "https://www.linkedin.com/in/ronit-ghosh-7b10972a2/"
  }, {
    text: "Twitter",
    icon: <BsTwitterX fontSize={18} color="rgb(243 244 246)" />,
    link: "https://twitter.com/ronit__ghosh"
  }, {
    text: "G-Mail",
    icon: <BiLogoGmail fontSize={26} color="rgb(243 244 246)" />,
    link: "mailto:work.ronitghosh@gmail.com?cc=ronitghosh06@gmail.com"
  },]
  return (
    <header className="bg-accent body-font">
      <div className="p-4 mx-auto flex items-center justify-around md:px-14">
        <a className="flex title-font font-medium items-center">
          <span className="ml-3 text-xl"><img src={logo} alt="logo" className="w-7" /></span>
        </a>
        <nav className="lg:mr-auto lg:ml-4 lg:py-1 lg:pl-4 lg:border-l lg:border-border-subtext flex flex-wrap items-center text-base justify-center">
          {
            navLinks.map(navLink => <a key={navLink.link} href={navLink.link} target="_blank" className="mr-5 hover:text-gray-200 text-gray-50 flex items-center gap-2">{navLink.icon} <span className="md:block hidden">{navLink.text}</span></a>)
          }
        </nav>
        <button onClick={handleThemeSwitch} className="mode-switcher flex items-center bg-gray-100 border-0 p-1 focus:outline- hover:bg-gray-200 rounded-lg text-base md:mt-0">
          <CgDarkMode fontSize={24} />
        </button>
      </div>
    </header>
  )
}

export default Navbar
