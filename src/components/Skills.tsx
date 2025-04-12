import Nextjs from "@/assets/NextJS-Dark.svg"
import Reactjs from "@/assets/React-Dark.svg"
import Docker from '@/assets/Docker.svg'
import Tailwind from "@/assets/TailwindCSS-Dark.svg"
import Expressjs from "@/assets/ExpressJS-Dark.svg"
import Mongodb from "@/assets/MongoDB.svg"
import Postgresql from "@/assets/PostgreSQL-Dark.svg"
import Prisma from "@/assets/Prisma.svg"
import Zustand from "@/assets/zustand.png"
import Typescript from "@/assets/TypeScript.svg"
import Hono from "@/assets/Hono.svg"
import Zod from "@/assets/Zod.svg"

const skills = [
    Typescript,
    Nextjs,
    Expressjs,
    Hono,
    Reactjs,
    Zustand,
    Prisma,
    Postgresql,
    Mongodb,
    Zod,
    Tailwind,
    Docker,
]

import Image from "next/image"
export default function Skills() {
    return (
        <div className="grid grid-cols-6 gap-1 pt-1">
            {skills.map((skill, i) => (
                <div key={i} className="h-9 w-9 items-center justify-center rounded-full bg-black">
                    <Image
                        className="rounded-lg"
                        src={skill}
                        alt="logo" />
                </div>
            ))}

        </div>
    )
}