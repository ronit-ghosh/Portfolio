"use client";

import { IconBrandGithub, IconChevronsDown, IconLink } from "@tabler/icons-react";
import { ScrollArea } from "./ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "./ui/separator";
import { Project, projectsarray } from "@/lib/projects";
import Link from "next/link";
import { stagger, useAnimate, motion } from "motion/react";
import { useEffect } from "react";

export default function Projects() {
  return (
    <div className="relative mt-5 w-full">
      <h3 className="mx-auto flex w-32 items-center justify-center gap-1 text-lg font-bold">
        Projects
      </h3>
      <ScrollArea className="h-85 py-2">
        <ProjectCard projects={projectsarray} />
      </ScrollArea>
      <span className="absolute right-1/2 bottom-0 z-10 animate-pulse">
        <IconChevronsDown />
      </span>
    </div>
  );
}

function ProjectCard({ projects }: { projects: Project[] }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    startAnimating();
  }, []);

  const startAnimating = () => {
    animate(
      "#projects",
      {
        y: 0,
        filter: "blur(0px)",
        opacity: 1,
      },
      {
        delay: stagger(0.1),
      },
    );
  };

  return (
    <Accordion
      ref={scope}
      type="single"
      collapsible
      className="w-full space-y-2"
    >
      {projects.map((project, i) => (
        <motion.div
          key={i}
          style={{
            y: 15,
            filter: "blur(10px)",
            opacity: 0,
          }}
          id="projects"
        >
          <AccordionItem
            value={`item-${i}`}
            className="rounded-xl border border-neutral-900 bg-gradient-to-t from-neutral-900 to-neutral-950 px-4"
          >
            <AccordionTrigger className="justify-between">
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col justify-center gap-0 md:flex-row md:gap-2">
                  <span className="font-bold capitalize">{project.name}</span>
                  <span className="text-primary/70 font-normal capitalize">
                    {project.desc}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    target="_blank"
                    href={project.live}
                    className="transition-transform hover:scale-105"
                  >
                    <IconLink size={21} />
                  </Link>
                  <Link
                    target="_blank"
                    href={project.github}
                    className="transition-transform hover:scale-105"
                  >
                    <IconBrandGithub size={21} />
                  </Link>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-3">
              <div className="flex flex-wrap items-center gap-2 overflow-hidden">
                {project.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-neutral-900 bg-gradient-to-t from-neutral-950 to-neutral-900 px-2 py-1 capitalize"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Separator className="mt-2" />
              {project.features.map((feature, i) => (
                <div key={i} className="mt-2 space-y-1.5">
                  <li className="capitalize">{feature}</li>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
}
