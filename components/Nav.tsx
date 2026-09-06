'use client';

import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  ['Work', '/work'],
  ['Services', '/services'],
  ['Process', '/process'],
  ['About', '/about'],
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="nav-wrap">
      <nav className="nav shell" aria-label="Primary navigation">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)}>fahaddev</Link>

        <div className="nav-links">
          <span className="nav-status"><i />Available for new projects</span>
          {links.map(([name, href]) => <Link key={href} href={href}>{name}</Link>)}
          <Link className="btn btn-sm" href="/contact">Book a Call</Link>
        </div>

        <button
          className="menu-btn"
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div id="mobile-navigation" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu-inner shell">
          <div className="mobile-menu-topline">
            <span className="nav-status"><i />Available for new projects</span>
            <span className="mobile-menu-label">Navigation</span>
          </div>
          <div className="mobile-menu-links">
            {links.map(([name, href], index) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>{name}<ArrowUpRight size={18} />
              </Link>
            ))}
          </div>
          <div className="mobile-menu-cta">
            <p>Have a project in mind?</p>
            <Link className="btn" href="/contact" onClick={() => setOpen(false)}>Book a 15-Minute Call</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
