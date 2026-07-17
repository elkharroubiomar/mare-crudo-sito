import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import type { Lang } from './Nav';

const PHONE = '+39 0422 546476';
const PHONE_HREF = '+39 0422 546476';
const EMAIL = 'marecrudotreviso@gmail.com';

const t = {
  it: {
    tag: 'Dove siamo',
    headline: 'Info utili',
    sub: 'Tutte le informazioni di cui hai bisogno, prima di chiamarci.',
    address: {
      label: 'Indirizzo',
      value: 'P.za Santa Maria Maggiore, 31100 Treviso TV',
      note: 'Parcheggio a pagamento nelle vicinanze · Fermata bus linea 10',
    },
    phone: {
      label: 'Telefono',
      note: 'Prenotazioni tavolo e asporto solo telefoniche',
    },
    email: {
      label: 'Email',
      note: 'Solo comunicazioni generali — non per prenotazioni',
    },
    hoursTitle: 'Orari ristorante',
    hoursNote: 'Cucina aperta fino a 30 min prima della chiusura',
hours: [
  {
    days: 'Lunedì – Martedì',
    lunch: '11:00 – 15:00',
    dinner: '18:00 – 23:00',
  },
  {
    days: 'Mercoledì',
    lunch: 'Chiuso',
    dinner: 'Chiuso',
  },
  {
    days: 'Giovedì',
    lunch: '17:30 – 23:00',
    dinner: '—',
  },
  {
    days: 'Venerdì – Domenica',
    lunch: '11:00 – 15:00',
    dinner: '18:00 – 23:00',
  },
],

    lunchLabel: 'Pranzo',
    dinnerLabel: 'Cena',
    mapCaption: 'Apri in Google Maps',
  },
  en: {
    tag: 'Find us',
    headline: 'Useful info',
    sub: 'Everything you need to know before calling us.',
    address: {
      label: 'Address',
      value: 'Via Terraglio 123\n31100 Treviso TV',
      note: 'Free parking nearby · Bus stop line 7',
    },
    phone: {
      label: 'Phone',
      note: 'Table and takeaway reservations by phone only',
    },
    email: {
      label: 'Email',
      note: 'General enquiries only — not for reservations',
    },
    hoursTitle: 'Restaurant hours',
    hoursNote: 'Kitchen open until 30 min before closing',
  hours: [
    {
      days: 'Monday – Tuesday',
      lunch: '11:00 – 15:00',
      dinner: '18:00 – 23:00',
    },
    {
      days: 'Wednesday',
      lunch: 'Closed',
      dinner: 'Closed',
    },
    {
      days: 'Thursday',
      lunch: '17:30 – 23:00',
      dinner: '—',
    },
    {
      days: 'Friday – Sunday',
      lunch: '11:00 – 15:00',
      dinner: '18:00 – 23:00',
    },
  ],

    lunchLabel: 'Lunch',
    dinnerLabel: 'Dinner',
    mapCaption: 'Open in Google Maps',
  },
};

export function InfoBlock({ lang }: { lang: Lang }) {
  const tx = t[lang];

  return (
    <section id="info" style={{ background: 'var(--card)' }}>
      <div style={{ height: 1, background: 'var(--border)' }} />

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
        }}
      >
        {/* Section header */}
        <div className="flex items-center" style={{ gap: 12, marginBottom: '2rem' }}>
          <div style={{ width: 32, height: 1, background: 'var(--accent)', opacity: 0.7 }} />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.625rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            {tx.tag}
          </span>
        </div>

        <div
          className="flex flex-col lg:flex-row justify-between"
          style={{ marginBottom: '3.5rem', gap: '1rem' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontStyle: 'italic',
              fontWeight: 500,
              color: 'var(--foreground)',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {tx.headline}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--muted-foreground)',
              fontWeight: 300,
              lineHeight: 1.6,
              margin: 0,
              maxWidth: 380,
            }}
          >
            {tx.sub}
          </p>
        </div>

        {/* Two-column layout: info left, map right */}
        <div className="grid lg:grid-cols-2" style={{ gap: 'clamp(2.5rem, 5vw, 5rem)' }}>
          {/* Left: contact + hours */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {/* Address */}
              <div className="flex items-start" style={{ gap: '1rem' }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(27,78,107,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <MapPin size={15} strokeWidth={1.5} style={{ color: 'var(--primary)' }} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.6875rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted-foreground)',
                      marginBottom: 4,
                      fontWeight: 400,
                    }}
                  >
                    {tx.address.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      color: 'var(--foreground)',
                      lineHeight: 1.45,
                      whiteSpace: 'pre-line',
                      marginBottom: 6,
                    }}
                  >
                    {tx.address.value}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      color: 'var(--muted-foreground)',
                      fontWeight: 300,
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {tx.address.note}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start" style={{ gap: '1rem' }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(27,78,107,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <Phone size={15} strokeWidth={1.5} style={{ color: 'var(--primary)' }} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.6875rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted-foreground)',
                      marginBottom: 4,
                      fontWeight: 400,
                    }}
                  >
                    {tx.phone.label}
                  </p>
                  <a
                    href={PHONE_HREF}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.375rem',
                      fontWeight: 500,
                      color: 'var(--primary)',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: 6,
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    {PHONE}
                  </a>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      color: 'var(--muted-foreground)',
                      fontWeight: 300,
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {tx.phone.note}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start" style={{ gap: '1rem' }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(27,78,107,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <Mail size={15} strokeWidth={1.5} style={{ color: 'var(--primary)' }} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.6875rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted-foreground)',
                      marginBottom: 4,
                      fontWeight: 400,
                    }}
                  >
                    {tx.email.label}
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      fontWeight: 400,
                      color: 'var(--foreground)',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: 4,
                    }}
                  >
                    {EMAIL}
                  </a>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      color: 'var(--muted-foreground)',
                      fontWeight: 300,
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {tx.email.note}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours tables */}
            <div>
              {/* Dine-in hours */}
              <div style={{ marginBottom: '2rem' }}>
                <div
                  className="flex items-center justify-between"
                  style={{ marginBottom: '1rem' }}
                >
                  <div className="flex items-center" style={{ gap: 8 }}>
                    <Clock size={13} strokeWidth={1.5} style={{ color: 'var(--accent)' }} />
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.6875rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        fontWeight: 400,
                      }}
                    >
                      {tx.hoursTitle}
                    </span>
                  </div>
                </div>

                <div style={{ border: '1px solid var(--border)', borderRadius: 2, overflow: 'hidden' }}>
                  {/* Table header */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 1fr',
                      background: 'rgba(27,78,107,0.06)',
                      padding: '0.625rem 1rem',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    {['', tx.lunchLabel, tx.dinnerLabel].map((h, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.625rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--muted-foreground)',
                          fontWeight: 500,
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {tx.hours.map((h, i) => {
                    const isClosed = h.lunch === 'Chiuso' || h.lunch === 'Closed';
                    return (
                      <div
                        key={i}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr 1fr',
                          padding: '0.75rem 1rem',
                          borderBottom: i < tx.hours.length - 1 ? '1px solid var(--border)' : 'none',
                          background: isClosed ? 'rgba(35,35,32,0.018)' : 'transparent',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.8125rem',
                            color: isClosed ? 'var(--muted-foreground)' : 'var(--foreground)',
                            fontWeight: isClosed ? 300 : 400,
                          }}
                        >
                          {h.days}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.8125rem',
                            color: isClosed ? 'var(--muted-foreground)' : 'var(--primary)',
                            fontWeight: 400,
                            opacity: isClosed ? 0.5 : 1,
                          }}
                        >
                          {h.lunch}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.8125rem',
                            color: isClosed ? 'var(--muted-foreground)' : 'var(--primary)',
                            fontWeight: 400,
                            opacity: isClosed ? 0.5 : 1,
                          }}
                        >
                          {h.dinner}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6875rem',
                    color: 'var(--muted-foreground)',
                    fontWeight: 300,
                    marginTop: 8,
                  }}
                >
                  {tx.hoursNote}
                </p>
              </div>

            </div>
          </div>

          {/* Right: Map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div
              style={{
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid var(--border)',
                flex: 1,
                minHeight: 400,
                position: 'relative',
                background: 'var(--muted)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.2862304712917!2d12.249591611905934!3d45.66515391988748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477949ea9e854065%3A0xf1a6f073f334ccd4!2sMareCrudo!5e0!3m2!1sit!2sit!4v1783697418158!5m2!1sit!2sit"
                style={{ border: 0, width: '100%', height: '100%', minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Mare Crudo Treviso"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Via+Terraglio+123+Treviso"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 400,
                color: 'var(--primary)',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                alignSelf: 'flex-start',
                opacity: 0.8,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
            >
              <MapPin size={13} strokeWidth={1.5} />
              {tx.mapCaption}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
