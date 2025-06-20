"use client";

import { motion, useAnimate } from "motion/react";
import { IconExternalLink } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function Info() {
  const [scope, animate] = useAnimate();

  const startHoverAnimating = async (text: string) => {
    await animate(`#info-text-${text}`, {
      y: 10,
      opacity: 0,
      filter: "blur(1px)",
    });
    animate(`#info-icon-${text}`, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    });
  };

  const startLeaveAnimating = async (text: string) => {
    await animate(`#info-icon-${text}`, {
      y: -10,
      opacity: 0,
      filter: "blur(1px)",
    });
    animate(`#info-text-${text}`, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    });
  };

  return (
    <div ref={scope} className="flex gap-3 py-2">
      {LINKS.map((link, i) => {
        return (
          <motion.a
            key={i}
            onMouseEnter={() => startHoverAnimating(link.text)}
            onMouseLeave={() => startLeaveAnimating(link.text)}
            href={link.href}
          >
            <button
              className={cn(
                "group relative cursor-pointer rounded-lg px-4 py-2.5 text-sm font-bold text-neutral-300 transition-transform",
                "border border-neutral-900 bg-gradient-to-t from-neutral-900 to-neutral-950",
              )}
            >
              <span className="absolute inset-x-0 bottom-px z-100 mx-auto h-[0.5px] w-3/4 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
              <span
                className={cn(
                  "absolute inset-x-0 bottom-px opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                  "mx-auto h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent blur-lg",
                )}
              />
              <motion.span
                initial={{
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                id={`info-text-${link.text}`}
                className="relative inline-flex h-full w-full uppercase"
              >
                {link.text}
              </motion.span>
              <motion.span
                initial={{
                  y: -10,
                  opacity: 0,
                  filter: "blur(2px)",
                }}
                id={`info-icon-${link.text}`}
                className="absolute inset-0 m-auto inline-flex h-full w-full items-center justify-center"
              >
                <IconExternalLink size={20} />
              </motion.span>
            </button>
          </motion.a>
        );
      })}
    </div>
  );
}

const LINKS = [
  {
    href: "https://stirring-lamp-59e.notion.site/s-few-projects-1b9e9513904780d69717c21eae3a16af?pvs=4",
    text: "updates",
  },
  {
    href: "https://pub-07b216c33cb94d9db3ada1de2e98bf02.r2.dev/Ronit-Ghosh-Resume.pdf",
    text: "resume",
  },
];
