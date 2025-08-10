import ShellInput from './ShellInput';
import useHistory from '../hooks/useHistory';

export default function CommandHistory() {
    const history = useHistory((state) => state.history);

    return (
        <section className="">
            {history.map((item) => {
                return (
                    <section
                        className="mb-2 flex flex-col gap-2 "
                        key={item.id}
                    >
                        <div className="h-fit w-full">
                            <p>
                                <span className="text-cyan-200">user</span>@
                                <span className="text-fuchsia-200">
                                    arieruov.sh
                                </span>
                                :~$
                                <span className="ml-2 text-gray-400">
                                    {item.command}
                                </span>
                            </p>
                        </div>

                        <div key={item.id}>{item.component}</div>
                    </section>
                );
            })}

            <ShellInput />
        </section>
    );
}
