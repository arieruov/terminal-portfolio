interface NotFoundCommandInterface {
    command: string;
}

export default function NotFoundCommand({ command }: NotFoundCommandInterface) {
    return (
        <div>
            Command{' '}
            <span className="text-indigo-200 text-shadow-indigo-500 text-shadow-xs">
                {command}
            </span>{' '}
            not found
        </div>
    );
}
