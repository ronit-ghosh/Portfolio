import { Github, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Socials() {
    return (
        <div className="flex space-x-4 pt-1">
            <a
                href="https://github.com/ronit-ghosh"
                className="cursor-pointer rounded-full p-2 hover:scale-105 active:scale-105 transition-transform">
                <Github size={26} />
            </a>
            <a
                href="https://twitter.com/ronit__ghosh"
                className="cursor-pointer rounded-full p-2 hover:scale-105 active:scale-105 transition-transform">
                <Twitter size={26} />
            </a>
            <a
                href="https://www.instagram.com/ronit__ghosh/"
                className="cursor-pointer rounded-full p-2 hover:scale-105 active:scale-105 transition-transform">
                <Instagram size={26} />
            </a>
            <a
                href="https://www.linkedin.com/in/ronit-ghosh-7b10972a2/"
                className="cursor-pointer rounded-full p-2 hover:scale-105 active:scale-105 transition-transform">
                <Linkedin size={26} />
            </a>
        </div >
    )
}