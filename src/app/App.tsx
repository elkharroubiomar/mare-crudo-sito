import { useState, useEffect } from 'react';
import { Phone, ShoppingBag } from 'lucide-react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { MenuPreview } from './components/MenuPreview';
import { Takeaway } from './components/Takeaway';
import { Gallery } from './components/Gallery';
import { InfoBlock } from './components/InfoBlock';
import { Footer } from './components/Footer';
import type { Lang } from './components/Nav';

const PHONE_HREF = 'tel:+390422123456';

/* Mobile sticky CTA — visible after hero, hidden on large screens */
function MobileStickyBar({ lang }: { lang: Lang }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      const heroH = window.innerHeight;
      setVisible(window.scrollY > heroH * 0.6);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div
      className="lg:hidden"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 45,
        background: 'rgba(244, 239, 227, 0.98)',
        borderTop: '1px solid rgba(35,35,32,0.08)',
        padding: '0.875rem 1.25rem',
        display: 'flex',
        gap: '0.75rem',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        paddingBottom: 'calc(0.875rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <a
        href={PHONE_HREF}
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: '#F4EFE3',
          background: 'var(--primary)',
          textDecoration: 'none',
          padding: '13px 16px',
          borderRadius: 2,
          letterSpacing: '0.03em',
        }}
      >
        <Phone size={14} strokeWidth={1.75} />
        {lang === 'it' ? 'Chiama' : 'Call'}
      </a>
      <a
        href="#asporto"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: 'var(--primary)',
          background: 'var(--secondary)',
          textDecoration: 'none',
          padding: '13px 16px',
          borderRadius: 2,
          letterSpacing: '0.03em',
        }}
      >
        <ShoppingBag size={14} strokeWidth={1.75} />
        {lang === 'it' ? 'Asporto' : 'Takeaway'}
      </a>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>('it');

  return (
    <div
      className="bg-background text-foreground"
      style={{ minHeight: '100dvh' }}
    >
      {/* MARKER-MAKE-KIT-INVOKED */}

      <Nav lang={lang} setLang={setLang} />

      <main>
        <Hero lang={lang} />
        <Concept lang={lang} />
        <MenuPreview lang={lang} />
        <Takeaway lang={lang} />
        <Gallery lang={lang} />
        <InfoBlock lang={lang} />
      </main>

      <Footer lang={lang} />

      {/* Mobile sticky bottom bar */}
      <MobileStickyBar lang={lang} />
    </div>
  );
}
