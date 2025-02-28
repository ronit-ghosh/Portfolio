export default function Info() {
    return (
        <div className="flex gap-3 py-2">
            <a href="https://pub-07b216c33cb94d9db3ada1de2e98bf02.r2.dev/Ronit-Ghosh-Resume.pdf">
                <button className="cursor-pointer border border-neutral-900 text-neutral-300 px-2 py-1 hover:scale-105 active:scale-105 transition-transform rounded-lg bg-gradient-to-t from-neutral-900 to-neutral-950">
                    Resume
                </button>
            </a>
            <a href="https://portfolio.ronitghosh.site">
                <button className="cursor-pointer border border-neutral-900 text-neutral-300 px-2 py-1 hover:scale-105 active:scale-105 transition-transform rounded-lg bg-gradient-to-t from-neutral-900 to-neutral-950">
                    Portfolio
                </button>
            </a>
        </div>
    )
}