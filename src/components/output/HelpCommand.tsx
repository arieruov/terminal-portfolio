interface commandsInterface {
    command: string;
    description: string;
}

export default function HelpCommand() {
    const commands: commandsInterface[] = [
        {
            command: 'about',
            description: 'Display information about me and my background',
        },
        {
            command: 'clear',
            description: 'Clear the terminal screen',
        },
        {
            command: 'education',
            description: 'Show my educational background and qualifications',
        },
        {
            command: 'help',
            description: 'Display this help menu with available commands',
        },
        {
            command: 'projects',
            description: 'View my portfolio of projects and work',
        },
        {
            command: 'socials',
            description: 'Show my social media links and contact information',
        },
        {
            command: 'welcome',
            description: 'Display the welcome message and introduction',
        },
    ];

    return (
        <div>
            <h2 className="mb-2">Commands available:</h2>
            <table className="border-separate border-spacing-y-2 md:border-collapse md:border-spacing-y-0">
                {commands.map((c, i) => (
                    <tr key={i}>
                        <td className="text-indigo-200 text-shadow-indigo-500 text-shadow-xs">
                            {c.command}
                        </td>
                        <td className="pl-12">{c.description}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
