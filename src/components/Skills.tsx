import Nextjs from "@/svgs/NextJS-Dark.svg"
import Reactjs from "@/svgs/React-Dark.svg"
import Docker from '@/svgs/Docker.svg'
import Tailwind from "@/svgs/TailwindCSS-Dark.svg"
import Expressjs from "@/svgs/ExpressJS-Dark.svg"
import Mongodb from "@/svgs/MongoDB.svg"
import Postgresql from "@/svgs/PostgreSQL-Dark.svg"
import Prisma from "@/svgs/Prisma.svg"
import Recoil from "@/svgs/Recoil.svg"
import Typescript from "@/svgs/TypeScript.svg"
import Hono from "@/svgs/Hono.svg"
import Zod from "@/svgs/Zod.svg"

const skills = [
    Typescript,
    Nextjs,
    Expressjs,
    Hono,
    Reactjs,
    Recoil,
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