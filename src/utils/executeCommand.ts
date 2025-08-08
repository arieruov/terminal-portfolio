import { type ReactNode, createElement } from 'react';
import useHistory from '../hooks/useHistory';
import WelcomeCommand from '../components/output/WelcomeCommand';
import AboutCommand from '../components/output/AboutCommand';
import NotFoundCommand from '../components/output/NotFoundCommand';
import HelpCommand from '../components/output/HelpCommand';

export default function executeCommand(command: string): void {
    const history = useHistory.getState();
    const id = crypto.randomUUID();
    let component: ReactNode | null = null;

    switch (command.trim().toLowerCase()) {
        case 'welcome':
            component = createElement(WelcomeCommand);
            break;

        case 'about':
            component = createElement(AboutCommand);
            break;

        case 'help':
            component = createElement(HelpCommand);
            break;

        case '':
            component = null;
            break;

        case 'clear':
            history.clearHistory();
            return;

        default:
            component = createElement(NotFoundCommand, {
                command: command.trim().toLowerCase(),
            });
    }

    history.addToHistory(id, command, component);
}
