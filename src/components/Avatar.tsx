import Image from "next/image";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";

export default function Avatar() {
    return (
        <HoverCard>
            <HoverCardTrigger>
                <div className="relative h-24 w-24 cursor-pointer z-10">
                    <Image
                        src="https://res.cloudinary.com/drynqkitl/image/upload/v1740220285/Dp_oxgveh.jpg"
                        alt="Profile avatar"
                        width={1200}
                        height={1200}
                        className="object-cover rounded-full"
                    />
                    <div className="h-26 w-26 rounded-full absolute bg-purple-600 animate-pulse -top-1 -left-1 -z-10" />
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="text-center w-40 p-1">
                I Just Build Shit 🤷‍♂️
            </HoverCardContent>
        </HoverCard>
    )
}