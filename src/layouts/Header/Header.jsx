import '@layouts/Header/Header.scss';
import { useState } from 'react';

export default function Header({ links = [] }) {
  const [activeLink, setActiveLink] = useState('#home')

  const handleClick = (href) => {
    setActiveLink(href)

    // se for contato, rola até o footer
    const targetId = href === '#contact' ? '#socials' : href
    const section = document.querySelector(targetId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header>
      <nav>
        <ul>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={activeLink === href ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(href)
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
