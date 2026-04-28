import '@styles/header.scss';
import { useState } from 'react';

export default function Header({ links = [] }) {
    const [activeLink, setActiveLink] = useState('#home')
    return (
        <header>
            <nav>
                <ul>
                    {links.map(({href, label}) => (
                        <li key={href}>
                            <a href={href}
                                className={activeLink === href ? 'active' : ''}
                                onClick={() => {setActiveLink(href)}}
                            >{label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}