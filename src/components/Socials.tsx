import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Socials() {
    return (
        <div className="flex space-x-4 pt-1">
            <Link
                href="https://github.com/ronit-ghosh"
                className="cursor-pointer rounded-full p-2 hover:scale-105 active:scale-105 transition-transform">
                <Github size={26} />
            </Link>
            <Link
                href="https://twitter.com/ronntwt"
                className="cursor-pointer rounded-full p-2 hover:scale-105 active:scale-105 transition-transform">
                <Twitter size={26} />
            </Link>
            <Link
                href="https://www.instagram.com/ronnn_ig/"
                className="cursor-pointer rounded-full p-2 hover:scale-105 active:scale-105 transition-transform">
                <Instagram size={26} />
            </Link>
            <Link
                href="https://www.linkedin.com/in/ronit-ghosh-7b10972a2/"
                className="cursor-pointer rounded-full p-2 hover:scale-105 active:scale-105 transition-transform">
                <Linkedin size={26} />
            </Link>
        </div >
    )
}