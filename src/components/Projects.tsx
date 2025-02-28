import { Github, Link, MoveDown } from 'lucide-react'
import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from './ui/separator'
import { Project, projectsarray } from '@/lib/projects'

export default function Projects() {
    const projects = projectsarray
    return (
        <div className="mt-5 w-full">
            <h3 className="w-32 mx-auto text-xl font-bold flex justify-center items-center gap-1">
                Projects
                <MoveDown size={14} className="animate-bounce" />
            </h3>
            <ScrollArea className='h-85 py-2'>
                <ProjectCard projects={projects} />
            </ScrollArea>
        </div>
    )
}

function ProjectCard({ projects }: { projects: Project[] }) {
    return (
        <Accordion type="single" collapsible className="w-full space-y-2">
            {
                projects.map((project, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className='bg-gradient-to-t from-neutral-900 to-neutral-950 border border-neutral-900 rounded-xl px-4'>
                        <AccordionTrigger className='justify-between'>
                            <div className="flex justify-between items-center w-full">
                                <div className="flex md:flex-row flex-col md:gap-2 gap-0 justify-center">
                                    <span className="font-bold capitalize">{project.name}</span>
                                    <span className="font-normal text-primary/70 capitalize">{project.desc}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <a target='_blank' href={project.live} className='hover:scale-105 transition-transform'>
                                        <Link size={21} />
                                    </a>
                                    <a target='_blank' href={project.github} className='hover:scale-105 transition-transform'>
                                        <Github size={21} />
                                    </a>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='pt-3'>
                            <div className="flex items-center gap-2 overflow-hidden flex-wrap">
                                {
                                    project.techs.map((tech, i) => (
                                        <span key={i} className='rounded-lg px-2 py-1 bg-gradient-to-t from-neutral-950 to-neutral-900 border border-neutral-900 capitalize'>{tech}</span>
                                    ))
                                }
                            </div>
                            <Separator className='mt-2' />
                            {
                                project.features.map((feature, i) => (
                                    <div key={i} className="mt-2 space-y-1.5">
                                        <li className="capitalize">{feature}</li>
                                    </div>
                                ))
                            }
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}