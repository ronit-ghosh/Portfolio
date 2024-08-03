import logo from "../public/logo.svg"

const FooterSection = () => {
    return (
        <footer className="text-subtext bg-background body-font">
            <div className="container px-10 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <span className="ml-3 text-xl cursor-help sm:block hidden"><img src={logo} alt="logo" className="w-10 bg-indigo-500 rounded-full p-2" /></span>
                </a>
                <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-border sm:py-2 sm:mt-0 mt-4 cursor-help">© Personal Portfolio —
                    <a href="" className="text-subtext ml-1 cursor-help" rel="noopener noreferrer" target="_blank">@ronit-ghosh</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href='https://www.facebook.com/profile.php?id=100056426041715' target='_blank' className="ml-3">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a href='https://www.instagram.com/ronit__ghosh/' target='_blank' className="ml-3 ">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default FooterSection
