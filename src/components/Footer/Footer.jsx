'use client'

import './Footer.css'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/palestine36film',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Threads',
    href: 'https://www.threads.com/@palestine36film',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="7 -242 433 500" fill="currentColor">
        <path d="m332-12 6 3c29 14 50 35 62 61 15 36 17 96-31 143-36 36-80 53-142 53h-1c-70 0-124-24-160-70C34 137 17 80 17 8s17-129 49-170c36-46 90-69 160-70h1c70 1 125 24 162 70 18 23 32 50 41 82l-41 10c-7-25-18-47-32-65-29-36-73-54-130-55-57 1-101 19-129 55C72-102 59-54 58 8c1 62 14 110 40 143 28 36 72 54 129 55 51-1 85-13 113-41 33-32 32-72 22-96-6-14-17-26-32-35-4 27-12 48-25 65-17 22-41 33-73 35-23 1-46-4-64-16-20-14-33-35-34-59-2-48 36-83 95-87 21-1 41 0 60 3-3-15-8-26-15-35-10-12-26-18-46-18h-1c-17 0-39 5-53 27l-35-24c20-29 51-45 88-45h1c63 0 100 39 104 108h-1 1zM176 57c1 25 28 36 54 35 26-2 55-12 60-73-14-3-28-5-44-5-5 0-9 0-14 1-43 2-57 23-56 41v1z"/>
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/palestine36film',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://web.facebook.com/profile.php?id=61579663660547#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtu.be/D6rBDoOZnuU',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]


export default function FooterB() {
  return (
    <footer className="footerB">
      <div className="footerB-top-line" />

      {/* Social row */}
      <div className="footerB-social">
        {socialLinks.map((s) => (
          <a
            key={s.name}
            href={s.href}
            className="footerB-social-link"
            aria-label={s.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {s.icon}
            <span className="footerB-social-name">{s.name}</span>
          </a>
        ))}
      </div>

      {/* Nav row */}
      <nav className="footerB-nav" aria-label="Footer navigation">
        <a href="/" className="footerB-nav-link">Home</a>
        <span className="footerB-dot" aria-hidden="true" />
        <a href="#the-film" className="footerB-nav-link">The Film</a>
        <span className="footerB-dot" aria-hidden="true" />
        <a href="#screenings" className="footerB-nav-link">Screenings</a>
        <span className="footerB-dot" aria-hidden="true" />
        <a href="#awards" className="footerB-nav-link">Awards</a>
        <span className="footerB-dot" aria-hidden="true" />
        <a href="#watch-trailer" className="footerB-nav-link">Watch Trailer</a>
      </nav>

      {/* Bottom */}
      <div className="footerB-bottom">
        <span className="footerB-copyright">
          &copy; {new Date().getFullYear()} Palestine 36 Film. All rights reserved.
        </span>
        <div className="footerB-legal">
          <a href="#" className="footerB-legal-link">Privacy</a>
          <a href="#" className="footerB-legal-link">Terms</a>
        </div>
      </div>
    </footer>
  )
}
