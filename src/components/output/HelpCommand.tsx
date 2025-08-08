export default function HelpCommand() {
    return (
        <div>
            <h2>Commands available:</h2>
            <br />
            <table className="border-separate border-spacing-y-2 md:border-collapse md:border-spacing-y-0">
                <tr>
                    <td className="text-indigo-200 text-shadow-indigo-500 text-shadow-xs">
                        about
                    </td>
                    <td className="pl-12">
                        Display information about me and my background
                    </td>
                </tr>
                <tr>
                    <td className="text-indigo-200 text-shadow-indigo-500 text-shadow-xs">
                        clear
                    </td>
                    <td className="pl-12">Clear the terminal screen</td>
                </tr>
                <tr>
                    <td className="text-indigo-200 text-shadow-indigo-500 text-shadow-xs">
                        education
                    </td>
                    <td className="pl-12">
                        Show my educational background and qualifications
                    </td>
                </tr>
                <tr>
                    <td className="text-indigo-200 text-shadow-indigo-500 text-shadow-xs">
                        help
                    </td>
                    <td className="pl-12">
                        Display this help menu with available commands
                    </td>
                </tr>
                <tr>
                    <td className="text-indigo-200 text-shadow-indigo-500 text-shadow-xs">
                        projects
                    </td>
                    <td className="pl-12">
                        View my portfolio of projects and work
                    </td>
                </tr>
                <tr>
                    <td className="text-indigo-200 text-shadow-indigo-500 text-shadow-xs">
                        socials
                    </td>
                    <td className="pl-12">
                        Show my social media links and contact information
                    </td>
                </tr>
                <tr>
                    <td className="text-indigo-200 text-shadow-indigo-500 text-shadow-xs">
                        welcome
                    </td>
                    <td className="pl-12">
                        Display the welcome message and introduction
                    </td>
                </tr>
            </table>
        </div>
    );
}
