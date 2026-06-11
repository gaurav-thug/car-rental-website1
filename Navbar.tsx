import { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { href: '#fleet', label: 'Fleet' },
    { href: '#finder', label: 'Find Vehicle' },
    { href: '#destinations', label: 'Destinations' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#booking', label: 'Book Now' },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#" className="navbar-logo">
            <div className="logo-icon">
              <Car size={22} color="#0a1628" />
            </div>
            <span className="logo-text">Drive<span>Ease</span></span>
          </a>

          <ul className="navbar-links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className={l.href === '#booking' ? 'navbar-cta' : ''}>{l.label}</a>
              </li>
            ))}
          </ul>

          <button className="menu-btn" onClick={() => setMenuOpen(o => !o)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
      </div>
    </>
  );
}
