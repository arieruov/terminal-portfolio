interface projectsInterface {
    name: string;
    url: string;
    src: string;
    alt: string;
    description: string;
}

export default function ProjectsCommand() {
    const projects: projectsInterface[] = [
        {
            name: 'skillmatch',
            url: 'https://skillmatch-inky.vercel.app/',
            src: '/images/skillmatc-website.webp',
            alt: 'skillmatch website image',
            description: `SkillMatch is a unique job search platform that helps you
                    discover opportunities by matching your skills to the
                    requirements of each role — not just the job title.`,
        },
        {
            name: 'arieruov.sh',
            url: 'https://arieruov-sh.vercel.app/',
            src: '/images/terminal-portfolio-website.webp',
            alt: 'arieruov.sh website image',
            description: 'My terminal based portfolio (this website)',
        },
    ];

    return (
        <div className="flex flex-col gap-4">
            {projects.map((p, i) => (
                <div key={i} className="flex flex-col gap-2">
                    <h3 className="text-indigo-200 text-shadow-indigo-500 text-shadow-xs">
                        {p.name}
                    </h3>
                    <a href={p.url} target="_blank" className="w-fit">
                        <img
                            src={p.src}
                            alt={p.alt}
                            className="w-full max-w-xs rounded-lg shadow-lg md:max-w-xl"
                        />
                    </a>
                    <p className="max-w-xl">{p.description}</p>
                </div>
            ))}
        </div>
    );
}
