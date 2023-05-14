import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "../Language/Switcher";
import { LanguageContext } from "../Language/locale";
import "./index.scss";

interface NavLink {
    title: string;
    href: string;
}

export default function Menu() {
    const locale = useContext(LanguageContext);
    const languages = { fr: "Français", en: "English" };
    const links: NavLink[] = [
        { title: "BEEF PC", href: "https://www.youtube.com/watch?v=KJ1HdZLwszU" },
    ];

    return (
        <nav>
            <div>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        to={link.href}
                        target={!link.href.startsWith(`${location.origin}/`) ? "_blank" : ""}
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
            <LanguageSwitcher languages={languages} />
        </nav>
    );
}
