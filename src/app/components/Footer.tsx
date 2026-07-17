import { Phone, Instagram, Facebook } from 'lucide-react';
import type { Lang } from './Nav';

const PHONE = '+39 0422 546 476';
const PHONE_HREF = 'tel:+390422546476';

const t = {
  it: {
    tagline: 'Ristorante di pesce a Treviso',
    desc: 'Pesce fresco dell\'Adriatico e del Mediterraneo. Cucina di mare completa: crudi, grigliati, fritti, primi e secondi.',
    sections: [
      {
        title: 'Il ristorante',
        links: [
          { label: 'La filosofia', href: '#concept' },
          { label: 'Menu', href: '#menu' },
          { label: 'Galleria', href: '#gallery' },
        ],
      },
      {
        title: 'Servizi',
        links: [
          { label: 'Asporto', href: '#asporto' },
          { label: 'Prenotazioni', href: PHONE_HREF },
          { label: 'Info & Orari', href: '#info' },
        ],
      },
    ],
    contactTitle: 'Contatti',
    address: 'P.za Santa Maria Maggiore\n31100 Treviso TV',
    copyright: '© 2026 Mare Crudo · P.IVA 05370610262 · Tutti i diritti riservati',
    reservationNote: 'Prenotazioni solo telefoniche — non accettiamo prenotazioni online.',
  },
  en: {
    tagline: 'Seafood restaurant in Treviso',
    desc: 'Fresh Adriatic and Mediterranean fish. Complete seafood kitchen: raw, grilled, fried, first and main courses.',
    sections: [
      {
        title: 'The restaurant',
        links: [
          { label: 'Philosophy', href: '#concept' },
          { label: 'Menu', href: '#menu' },
          { label: 'Gallery', href: '#gallery' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Takeaway', href: '#asporto' },
          { label: 'Reservations', href: PHONE_HREF },
          { label: 'Info & Hours', href: '#info' },
        ],
      },
    ],
    contactTitle: 'Contact',
    address: 'P.za Santa Maria Maggiore\n31100 Treviso TV',
    copyright: '© 2026 Mare Crudo · VAT 05370610262 · All rights reserved',
    reservationNote: 'Reservations by phone only — we do not accept online bookings.',
  },
};

export function Footer({ lang }: { lang: Lang }) {
  const tx = t[lang];

  return (
    <footer style={{ background: '#1A1916', color: 'rgba(244,239,227,0.7)' }}>
      <div style={{ height: 1, background: 'rgba(196,170,130,0.15)' }} />

      {/* Main footer body */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(3.5rem, 6vw, 5.5rem) 1.5rem 3rem',
        }}
      >
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 'clamp(2.5rem, 4vw, 4rem)' }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }} className="lg:col-span-1">
            <div style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.625rem',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  color: '#F4EFE3',
                  letterSpacing: '-0.01em',
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                Mare Crudo
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.5625rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(196,170,130,0.6)',
                }}
              >
                {tx.tagline}
              </div>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 300,
                color: 'rgba(244,239,227,0.45)',
                lineHeight: 1.65,
                marginBottom: '1.75rem',
              }}
            >
              {tx.desc}
            </p>

            {/* Social icons */}
            <div className="flex items-center" style={{ gap: '1rem' }}>
              <a
                href="#"
                aria-label="Instagram"
                style={{
                  color: 'rgba(244,239,227,0.4)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(196,170,130,0.9)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,239,227,0.4)')}
              >
                <Instagram size={18} strokeWidth={1.25} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                style={{
                  color: 'rgba(244,239,227,0.4)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(196,170,130,0.9)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,239,227,0.4)')}
              >
                <Facebook size={18} strokeWidth={1.25} />
              </a>
            </div>
          </div>

          {/* Nav sections */}
          {tx.sections.map((section) => (
            <div key={section.title}>
              <h4
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.625rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(196,170,130,0.6)',
                  marginBottom: '1.25rem',
                  fontWeight: 500,
                }}
              >
                {section.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        fontWeight: 300,
                        color: 'rgba(244,239,227,0.55)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#F4EFE3')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,239,227,0.55)')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.625rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(196,170,130,0.6)',
                marginBottom: '1.25rem',
                fontWeight: 500,
              }}
            >
              {tx.contactTitle}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Phone */}
              <a
                href={PHONE_HREF}
                className="flex items-center"
                style={{
                  gap: 8,
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  color: 'var(--secondary)',
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F4EFE3')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--secondary)')}
              >
                <Phone size={14} strokeWidth={1.5} />
                {PHONE}
              </a>

              {/* Address */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  fontWeight: 300,
                  color: 'rgba(244,239,227,0.4)',
                  lineHeight: 1.6,
                  margin: 0,
                  whiteSpace: 'pre-line',
                }}
              >
                {tx.address}
              </p>

              {/* Reservation note */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6875rem',
                  fontWeight: 300,
                  color: 'rgba(196,170,130,0.45)',
                  lineHeight: 1.55,
                  margin: 0,
                  fontStyle: 'italic',
                }}
              >
                {tx.reservationNote}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(244,239,227,0.06)' }}>
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              color: 'rgba(244,239,227,0.25)',
              margin: 0,
              fontWeight: 300,
            }}
          >
            {tx.copyright}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              color: 'rgba(244,239,227,0.2)',
              margin: 0,
              fontWeight: 300,
            }}
          >
            Design concept
          </p>
        </div>
      </div>
    </footer>
  );
}
