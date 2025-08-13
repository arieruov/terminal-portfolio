interface socialInterface {
    name: string;
    url: string;
}

export default function SocialsCommand() {
    const socialLinks: socialInterface[] = [
        { name: 'GitHub', url: 'https://github.com/arieruov/' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/brandonaov/' },
    ];

    return (
        <div>
            <h2 className="mb-2">My social links:</h2>
            <ul>
                {socialLinks.map((s, i) => (
                    <li
                        key={i}
                        className="text-indigo-200 text-shadow-indigo-500 text-shadow-xs"
                    >
                        <a href={s.url} target="_blank">
                            {s.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
