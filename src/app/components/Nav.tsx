import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export type Lang = 'it' | 'en';

interface NavProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const PHONE = '+39 0422 546 476';
const PHONE_HREF = 'tel:+390422546476';

export function Nav({ lang, setLang }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 60;
          setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { href: '#concept', it: 'Visione', en: 'Concept' },
    { href: '#menu', it: 'Menu', en: 'Menu' },
    { href: '#asporto', it: 'Asporto', en: 'Takeaway' },
    { href: '#info', it: 'Info & Orari', en: 'Info & Hours' },
  ];

  const textColor = 'var(--foreground)';
  const mutedColor = 'var(--muted-foreground)';

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'rgba(244, 239, 227, 0.98)',
          boxShadow: '0 1px 0 rgba(35,35,32,0.07)',
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', height: 72 }}
        >
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ lineHeight: 1 }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4375rem',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  color: textColor,
                  letterSpacing: '-0.01em',
                  transition: 'color 0.35s',
                }}
              >
                Mare Crudo
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.5625rem',
                  fontWeight: 400,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: mutedColor,
                  marginTop: 3,
                  transition: 'color 0.35s',
                }}
              >
                Ristorante di Pesce · Treviso
              </div>
            </div>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center" style={{ gap: '2.5rem' }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: textColor,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                  opacity: 0.85,
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
              >
                {lang === 'it' ? l.it : l.en}
              </a>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center" style={{ gap: '1rem', flexShrink: 0 }}>
            {/* Lang toggle */}
            <button
              onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                letterSpacing: '0.12em',
                fontWeight: 500,
                textTransform: 'uppercase',
                color: mutedColor,
                background: 'none',
                border: `1px solid ${scrolled ? 'var(--border)' : 'rgba(244,239,227,0.3)'}`,
                cursor: 'pointer',
                padding: '5px 10px',
                borderRadius: 2,
                transition: 'all 0.2s',
              }}
            >
              {lang === 'it' ? 'EN' : 'IT'}
            </button>

            {/* Phone CTA — desktop */}
            <a
              href={PHONE_HREF}
              className="hidden lg:flex items-center"
              style={{
                gap: 8,
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: '#F4EFE3',
                background: 'var(--primary)',
                textDecoration: 'none',
                padding: '10px 22px',
                borderRadius: 2,
                transition: 'opacity 0.2s',
                letterSpacing: '0.03em',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <Phone size={13} strokeWidth={2} />
              {lang === 'it' ? 'Chiama ora' : 'Call now'}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: textColor,
                padding: 4,
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.35s',
              }}
              aria-label={open ? (lang === 'it' ? 'Chiudi menu' : 'Close menu') : (lang === 'it' ? 'Apri menu' : 'Open menu')}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          background: 'var(--primary)',
          display: 'flex',
          flexDirection: 'column',
          padding: '5rem 2rem 1.5rem',
          transform: open ? 'translateY(0)' : 'translateY(-100%)',
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
          pointerEvents: open ? 'auto' : 'none',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease, visibility 0s linear',
        }}
      >
        <nav className="flex flex-col" style={{ gap: '1.25rem', flex: 1 }}>
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 7vw, 2.25rem)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#F4EFE3',
                textDecoration: 'none',
                opacity: open ? 1 : 0,
                transform: open ? 'translateX(0)' : 'translateX(-24px)',
                transition: `opacity 0.4s ease ${i * 0.07 + 0.15}s, transform 0.4s ease ${i * 0.07 + 0.15}s`,
                borderBottom: '1px solid rgba(244,239,227,0.1)',
                paddingBottom: '0.6rem',
              }}
            >
              {lang === 'it' ? l.it : l.en}
            </a>
          ))}
        </nav>

        {/* Mobile phone CTA */}
        <div style={{ marginTop: '0.75rem' }}>
          <a
            href={PHONE_HREF}
            onClick={() => setOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              color: 'var(--secondary)',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 500,
              border: '1px solid rgba(196,170,130,0.35)',
              padding: '14px 22px',
              borderRadius: 2,
              letterSpacing: '0.02em',
            }}
          >
            <Phone size={20} strokeWidth={1.5} />
            {PHONE}
          </a>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              color: 'rgba(244,239,227,0.45)',
              marginTop: 6,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {lang === 'it' ? 'Prenotazioni solo telefoniche' : 'Reservations by phone only'}
          </p>
        </div>

        {/* Lang toggle in mobile menu */}
        <button
          onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
          style={{
            marginTop: '0.5rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(244,239,227,0.5)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            textAlign: 'left',
          }}
        >
          {lang === 'it' ? 'Switch to English →' : 'Passa all\'Italiano →'}
        </button>
      </div>
    </>
  );
}