import { type ReactNode, createElement } from 'react';
import useHistory from '../hooks/useHistory';
import WelcomeCommand from '../components/output/WelcomeCommand';
import AboutCommand from '../components/output/AboutCommand';
import NotFoundCommand from '../components/output/NotFoundCommand';
import HelpCommand from '../components/output/HelpCommand';
import EducationCommand from '../components/output/EducationCommand';
import ProjectsCommand from '../components/output/ProjectsCommand';
import SocialsCommand from '../components/output/SocialsCommand';

export default function executeCommand(command: string): void {
    const history = useHistory.getState();
    const id = crypto.randomUUID();
    let component: ReactNode | null = null;

    switch (command.trim().toLowerCase()) {
        case 'about':
            component = createElement(AboutCommand);
            break;

        case 'clear':
            history.clearHistory();
            return;

        case 'education':
            component = createElement(EducationCommand);
            break;

        case 'help':
            component = createElement(HelpCommand);
            break;

        case 'projects':
            component = createElement(ProjectsCommand);
            break;

        case 'socials':
            component = createElement(SocialsCommand);
            break;

        case 'welcome':
            component = createElement(WelcomeCommand);
            break;

        case '':
            component = null;
            break;

        default:
            component = createElement(NotFoundCommand, {
                command: command.trim().toLowerCase(),
            });
    }

    history.addToHistory(id, command, component);
}
