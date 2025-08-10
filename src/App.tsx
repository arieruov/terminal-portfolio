import { useEffect } from 'react';
import CommandHistory from './components/CommandHistory';
import executeCommand from './utils/executeCommand';

export default function App() {
    useEffect(() => executeCommand('welcome'), []);

    return (
        <main className="flex h-full min-h-screen w-full flex-col overflow-scroll bg-[#1F2430] px-1 py-4 text-xs font-semibold text-white md:px-4 md:text-base">
            <CommandHistory />
        </main>
    );
}
