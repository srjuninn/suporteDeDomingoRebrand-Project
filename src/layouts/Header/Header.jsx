import '@layouts/Header/Header.scss';
import { useState } from 'react';
import { openWhatsapp } from '@utils/openWhatsapp'

export default function Header({ links = [] }) {
  const [activeLink, setActiveLink] = useState('#home')

  const handleClick = (href) => {
    if (href === '#contact') {
      openWhatsapp()
    } else {
      setActiveLink(href)
    }
  }

  return (
    <header>
      <nav>
        <ul>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href === '#contact' ? undefined : href}
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
