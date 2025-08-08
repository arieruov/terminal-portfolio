import { useState } from 'react';
import executeCommand from '../utils/executeCommand';

export default function ShellInput() {
    const [command, setCommand] = useState<string>('');
    const commandList: string[] = ['welcome', 'help', 'about', 'clear'];

    return (
        <form
            className="flex h-fit w-full gap-2"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                executeCommand(command);
                setCommand('');
            }}
        >
            <label htmlFor="shellInput">
                <span className="text-cyan-200">user</span>@
                <span className="text-violet-200">hostname</span>:~$
            </label>
            <input
                id="shellInput"
                type="text"
                value={command}
                autoComplete="off"
                autoFocus
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCommand(e.target.value)
                }
                className={`flex-1 outline-0 ${commandList.includes(command.trim()) ? 'text-indigo-200 text-shadow-indigo-500 text-shadow-xs' : ''}`}
            />
        </form>
    );
}
