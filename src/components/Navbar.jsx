const Navbar = () => {
    return (
        <>
            <header className="h-[80px] w-full flex justify-around items-center bg-transparent absolute gradient-border-bottom">
                <div className="font-extralight text-2xl">{"< R />"}</div>
                <ul className="flex gap-10 text-xl font-bold text-gray-300">
                    <li className=""><a href="" className="hover:text-gray-400">Skills</a></li>
                    <li className=""><a href="" className="hover:text-gray-400">Projects</a></li>
                    <li className=""><a href="" className="hover:text-gray-400">About Me</a></li>
                    <li className=""><a href="" className="hover:text-gray-400">Contact</a></li>
                </ul>
            </header>
        </>
    )
}

export default Navbar