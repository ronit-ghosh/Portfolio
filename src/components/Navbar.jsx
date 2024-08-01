import { IoIosArrowRoundForward } from "react-icons/io";

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center px-14">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Ronit</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">First Link</a>  
                    <a className="mr-5 hover:text-gray-900">Second Link</a>
                    <a className="mr-5 hover:text-gray-900">Third Link</a>
                    {/* <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-2 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                <IoIosArrowRoundForward fontSize={24}/>
                </button>
            </div>
        </header>
    )
}

export default Navbar