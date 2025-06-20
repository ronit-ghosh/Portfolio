"use client";

import Main from "@/components/Main";
import { motion } from "motion/react";
export default function Home() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="bg-background mx-auto flex h-[100dvh] flex-col items-center"
    >
      <motion.div
        className="absolute -z-10 h-full w-full"
        animate={{
          backgroundImage: [
            "radial-gradient(100% 100% at 50% -20%, #9700FF 0%, #0a0a0a 60%)",
            "radial-gradient(100% 100% at 50% -25%, rgba(151,0,255,0.6) 0%, #0a0a0a 65%)",
            "radial-gradient(100% 100% at 50% -25%, rgba(151,0,255,0.8) 0%, #0a0a0a 70%)",
            "radial-gradient(100% 100% at 50% -25%, rgba(151,0,255,0.6) 0%, #0a0a0a 65%)",
            "radial-gradient(100% 100% at 50% -20%, #9700FF 0%, #0a0a0a 60%)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        {" "}
      </motion.div>
      <Main />
    </motion.div>
  );
}
