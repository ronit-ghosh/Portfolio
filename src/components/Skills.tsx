"use client";

import Nextjs from "@/assets/NextJS-Dark.svg";
import Reactjs from "@/assets/React-Dark.svg";
import Docker from "@/assets/Docker.svg";
import Tailwind from "@/assets/TailwindCSS-Dark.svg";
import Expressjs from "@/assets/ExpressJS-Dark.svg";
import Mongodb from "@/assets/MongoDB.svg";
import Postgresql from "@/assets/PostgreSQL-Dark.svg";
import Prisma from "@/assets/Prisma.svg";
import Zustand from "@/assets/zustand.svg";
import Typescript from "@/assets/TypeScript.svg";
import Hono from "@/assets/Hono.svg";
import Zod from "@/assets/Zod-Dark.svg";
import Expo from "@/assets/Expo-Dark.svg";
import Motion from "@/assets/FramerMotion-Dark.svg";
import { motion, stagger, useAnimate } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";

const skills = [
  Typescript,
  Nextjs,
  Expressjs,
  Hono,
  Reactjs,
  Expo,
  Zustand,
  Zod,
  Prisma,
  Postgresql,
  Mongodb,
  Tailwind,
  Motion,
  Docker,
];

export default function Skills() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    startAnimating();
  }, []);

  const startAnimating = () => {
    animate(
      "#logo",
      {
        y: 0,
        filter: "blur(0px)",
        opacity: 1,
      },
      {
        delay: stagger(0.05),
      }
    );
  };

  return (
    <div ref={scope} className="grid grid-cols-7 gap-1 pt-1">
      {skills.map((skill, i) => (
        <motion.div
          id="logo"
          key={i}
          style={{
            y: 15,
            filter: "blur(2px)",
            opacity: 0,
          }}
          className="h-9 w-9 inline-block"
        >
          <Image className="rounded-lg" src={skill} alt="logo" />
        </motion.div>
      ))}
    </div>
  );
}
