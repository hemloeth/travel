'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';

export default function DesignExperience({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState('');
  const [request, setRequest] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function click(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    const action = target.closest<HTMLElement>('[data-action]')?.dataset.action;
    if (action === 'services') {
      root.current?.classList.toggle('services-open');
      return;
    }
    if (action === 'subscribe') {
      const input = root.current?.querySelector<HTMLInputElement>('[name=newsletter]');
      if (!input?.value || !input.checkValidity()) {
        input?.reportValidity();
        setMessage('Enter a valid email address.');
        return;
      }
      setMessage('Newsletter sign-up is a design preview. No subscription has been sent.');
      return;
    }
    if (action === 'add-destination') {
      const value = window.prompt('Add another destination');
      if (value) {
        try {
          sessionStorage.setItem('additionalDestination', value);
        } catch {}
        setMessage('Additional destination added: ' + value);
      }
      return;
    }
    if (action === 'build') {
      const fields = root.current?.querySelectorAll<HTMLInputElement>('.builder-field');
      const draft = Object.fromEntries(Array.from(fields || []).map((i) => [i.name, i.value]));
      try {
        sessionStorage.setItem('travelPackageDraft', JSON.stringify(draft));
      } catch {}
      setMessage(
        'Package preferences saved for this browser session. This design preview does not make reservations.'
      );
      return;
    }
    if (action === 'request') {
      setRequest(true);
      return;
    }
    const sort = target.closest<HTMLElement>('[data-sort]')?.dataset.sort;
    if (sort) {
      const data = [
        { id: 0, price: 1100, name: 'Kashmir', x: 259, y: 829 },
        { id: 1, price: 1230, name: 'Mumbai', x: 709, y: 888 },
        { id: 2, price: 3000, name: 'Andaman', x: 324, y: 1389 },
        { id: 3, price: 1440, name: 'Varanasi', x: 324, y: 1883 },
        { id: 4, price: 2000, name: 'Manali', x: 709, y: 1389 },
        { id: 5, price: 1210, name: 'Delhi', x: 709, y: 1883 },
      ];
      const slots = [data[0], data[1], data[2], data[4], data[3], data[5]];
      const ordered = [...data].sort((a, b) =>
        sort === 'low'
          ? a.price - b.price
          : sort === 'high'
          ? b.price - a.price
          : sort === 'name'
          ? a.name.localeCompare(b.name)
          : a.id - b.id
      );
      ordered.forEach((card, i) => {
        const group = root.current?.querySelector(`[data-card="${card.id}"]`);
        group?.querySelectorAll<HTMLElement>('.figma-layer').forEach((layer) => {
          layer.style.translate = `${slots[i].x - card.x}px ${slots[i].y - card.y}px`;
        });
      });
    }
  }

  return (
    <>
      {/* Mobile Top Navigation Bar (Visible only on mobile <= 1100px) */}
      <header className="mobile-app-header">
        <div className="mobile-header-inner">
          <Link href="/" className="mobile-brand" onClick={() => setMenuOpen(false)}>
            Travel
          </Link>
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {menuOpen && (
          <nav className="mobile-nav-menu">
            <Link href="/" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/packages" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              Upcoming Packages
            </Link>
            <Link href="/tour/information" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              Tour Information
            </Link>
            <Link href="/build-package" className="mobile-nav-cta" onClick={() => setMenuOpen(false)}>
              Get in Touch
            </Link>
          </nav>
        )}
      </header>

      <div ref={root} className="design-viewport" onClick={click}>
        {children}
      </div>

      {message && (
        <div className="feedback" role="status">
          <p>{message}</p>
          <button onClick={() => setMessage('')}>Close</button>
        </div>
      )}

      {request && (
        <div className="request-overlay" role="dialog" aria-modal="true" aria-label="Tour request">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setRequest(false);
              setMessage(
                'Your details have been checked. This design preview does not submit bookings or collect payment.'
              );
            }}
          >
            <button type="button" className="close" onClick={() => setRequest(false)}>
              ×
            </button>
            <h2>Book This Tour</h2>
            <p>Review your details</p>
            <label>
              Name
              <input required name="name" autoComplete="name" />
            </label>
            <label>
              Email
              <input required type="email" name="email" autoComplete="email" />
            </label>
            <label>
              Travel date
              <input required type="date" name="date" />
            </label>
            <button className="primary">Continue</button>
            <small>Design preview — no booking will be submitted.</small>
          </form>
        </div>
      )}
    </>
  );
}
