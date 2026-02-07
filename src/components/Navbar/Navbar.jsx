'use client'

import { useState } from 'react'
import './Navbar.css'
const links = [
  { label: 'Home', href: '/' },
  { label: 'The Film', href: '#the-film' },
  { label: 'Screenings', href: '#screenings' },
  { label: 'Awards', href: '#awards' },
  { label: 'Watch Trailer', href: '#watch-trailer' },
]

export default function NavbarOne() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="nav1">
        <button
          className={`nav1-hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>

        <button className="nav1-cta">Find a Cinema</button>
      </header>

      <div
        className={`nav1-menu-overlay ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
      />

      <div className={`nav1-menu ${open ? 'open' : ''}`}>
        <nav>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav1-menu-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
