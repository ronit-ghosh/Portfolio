export interface Project {
    name: string
    desc: string
    github: string
    live: string
    features: string[]
    techs: string[]
}

export const projectsarray: Project[] = [
    {
        name: "Artify",
        desc: "Image Generation AI",
        github: "https://github.com/ronit-ghosh/Artify",
        live: "https://artify.ronitghosh.site",
        features: [
            "Fetch all blogs with pagination, fetch specific user's blogs",
            "Recoil AtomFamily, SelectorFamily for async data fetching and caching",
            "Sign-in, sign-up, Create, update, delete blogs",
            "Zod validation, password hashing",
            "Used Zod type inference for consistent type safety across backend and frontend",
            "Custom hooks for cleaner code base",
        ],
        techs: ["Express", "Next", "Prisma", "Zod", "Shadcn"]
    },
    {
        name: "Daily Muse",
        desc: "Blog App",
        github: "https://github.com/ronit-ghosh/Daily-Muse",
        live: "https://daily--muse.vercel.app/",
        features: [
            "Fetch all blogs with pagination, fetch specific user's blogs",
            "Recoil AtomFamily, SelectorFamily for async data fetching and caching",
            "Sign-in, sign-up, Create, update, delete blogs",
            "Zod validation, password hashing",
            "Used Zod type inference for consistent type safety across backend and frontend",
            "Custom hooks for cleaner code base",
        ],
        techs: ["TypeScript", "Hono", "React", "Recoil", "Prisma", "Zod", "Tailwind"]
    },
    {
        name: "Payments App",
        desc: "real-time Payments App ",
        github: "https://github.com/ronit-ghosh/Payments-App",
        live: "https://payments-app-rg.vercel.app/",
        features: [
            "secure routes for sign-in, sign-up, dashboard, and transactions with Zod and JWT",
            "password hashing, salting, and concurrent request handling",
            "responsive frontend with a dashboard and transaction page",
            "Used Recoil for State Management in React",
            "Daisy UI for Premade UI components",
        ],
        techs: ["Express", "React", "Mongoose", "Tailwind", "Zod"]
    },
    {
        name: "Quip",
        desc: "real-time chat application",
        github: "https://github.com/ronit-ghosh/Quip",
        live: "https://quiip.vercel.app/",
        features: [
            "real-time messaging.",
            "user authentication.",
            "responsive design.",
            "Demo ID: demo@gmail.com",
            "Password: demo123",
        ],
        techs: ["Firebase", "React", "Tailwind"]
    },
    {
        name: "Mewsix",
        desc: "Music Player",
        github: "https://github.com/ronit-ghosh/Mewsix",
        live: "https://mewsix.freewebhostmost.com/",
        features: [
            "Play, pause, and stop functionality.",
            "Progress bar to visualize the current playing position.",
            "Volume control.",
            "Playlist functionality to queue up multiple tracks.",
            "Responsive design for seamless experience across devices",
        ],
        techs: ["JavaScript", "HTML", "CSS"]
    },
]