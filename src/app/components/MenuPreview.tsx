import { useState } from 'react';
import { Info } from 'lucide-react';
import type { Lang } from './Nav';

/* Allergen codes */
const ALLERGEN_COLORS: Record<string, string> = {
  G: '#8B6914',  // gluten — amber
  P: '#1B4E6B',  // pesce/fish — petrol
  M: '#2D6A5A',  // molluschi — teal
  C: '#7A3B1E',  // crostacei — terracotta
  L: '#5A3B7A',  // lattosio — purple
  S: '#3B6B1B',  // soia — green
  U: '#8B4513',  // uova — brown
};

/*const ALLERGEN_NAMES_IT: Record<string, string> = {
  G: 'Glutine', P: 'Pesce', M: 'Molluschi', C: 'Crostacei',
  L: 'Lattosio', S: 'Soia', U: 'Uova',
};
const ALLERGEN_NAMES_EN: Record<string, string> = {
  G: 'Gluten', P: 'Fish', M: 'Shellfish', C: 'Crustaceans',
  L: 'Dairy', S: 'Soy', U: 'Eggs',
};*/

interface MenuItem {
  itName: string;
  enName: string;
  itDesc: string;
  enDesc: string;
  price: string;
  //allergens: string[];
}

interface Category {
  key: string;
  itLabel: string;
  enLabel: string;
  items: MenuItem[];
}

const MENU: Category[] = [
  {
    key: 'antipasti',
    itLabel: 'Antipasti',
    enLabel: 'Starters',
    items: [
    {
      itName: 'Baccalà mantecato con cialde di polenta, pomodorini confit e granella di cipolla fritta',
      enName: 'Creamed cod with polenta wafers, confit cherry tomatoes and crispy fried onion',
      itDesc: 'Classico baccalà mantecato servito con cialde di polenta, pomodorini confit e granella di cipolla fritta',
      enDesc: 'Traditional creamed cod served with polenta wafers, confit cherry tomatoes and crispy fried onion',
      price: '15',
      //allergens: ['P', 'G', 'L'], // da adattare alla tua legenda
    },
    {
      itName: 'Capesante gratinate con concassé di pomodoro e polvere di olive taggiasche',
      enName: 'Gratin scallops with tomato concassé and Taggiasca olive powder',
      itDesc: 'Capesante dell’Atlantico gratinate, servite con concassé di pomodoro e polvere di olive taggiasche',
      enDesc: 'North Atlantic scallops au gratin, served with tomato concassé and Taggiasca olive powder',
      price: '19',
      //allergens: ['M', 'L'],
    },
    {
      itName: 'Calamaretti scottati, salsa al porro e burratina affumicata',
      enName: 'Seared baby squid, leek sauce and smoked burrata',
      itDesc: 'Calamaretti scottati alla piastra, crema di porro e burratina affumicata',
      enDesc: 'Seared baby squid with a silky leek sauce and smoked burrata',
      price: '19',
      //allergens: ['M', 'L'],
    },
    {
      itName: 'Trancetto di ricciola scottata in plancia, insalatina cruda di zucchine e caviale al lime',
      enName: 'Seared amberjack fillet, raw zucchini salad and lime caviar',
      itDesc: 'Trancetto di ricciola scottata alla piastra, insalatina di zucchine crude e caviale al lime',
      enDesc: 'Seared amberjack fillet with a raw zucchini salad and lime caviar pearls',
      price: '21',
      //allergens: ['P'],
    },
  ],
  },
  {
    key: 'primi',
    itLabel: 'Primi',
    enLabel: 'First Courses',
    items: [
    {
      itName: 'Risotto con crema di patate, cozze nostrane e salsa verde al prezzemolo',
      enName: 'Risotto with potato cream, local mussels and green parsley sauce',
      itDesc: 'Riso mantecato con crema di patate, cozze nostrane e salsa verde al prezzemolo',
      enDesc: 'Creamy risotto with potato purée, local mussels and a green parsley sauce',
      price: '25',
      //allergens: ['G', 'M', 'L'], // da verificare con la tua legenda
    },
    {
      itName: 'Garganelli con pesto di pomodoro secchi, sarde e finocchietto selvatico',
      enName: 'Garganelli with sun-dried tomato pesto, sardines and wild fennel',
      itDesc: 'Pasta fresca garganelli con pesto di pomodoro secco, sarde e finocchietto selvatico',
      enDesc: 'Fresh garganelli pasta with sun-dried tomato pesto, sardines and wild fennel',
      price: '19',
      //allergens: ['G', 'P', 'M'],
    },
    {
      itName: 'Mezzi paccheri con bisque di crostacei, pesto di basilico e battuta di gambero',
      enName: 'Mezzi paccheri with shellfish bisque, basil pesto and chopped prawn',
      itDesc: 'Mezzi paccheri al sugo di bisque di crostacei, pesto al basilico e battuta di gambero',
      enDesc: 'Mezzi paccheri in a rich shellfish bisque, basil pesto and chopped prawn',
      price: '19',
      //allergens: ['G', 'C', 'P'],
    },
    {
      itName: 'Tagliatelle all’uovo, ragù di moscardini e pane croccante al rosmarino',
      enName: 'Egg tagliatelle with baby octopus ragù and rosemary crisp bread',
      itDesc: 'Tagliatelle all’uovo con ragù di moscardini e pane croccante aromatizzato al rosmarino',
      enDesc: 'Egg tagliatelle with a baby octopus ragù and rosemary-scented crisp bread',
      price: '19',
      //allergens: ['G', 'M', 'L'],
    },
  ],
  },
  {
    key: 'secondi',
    itLabel: 'Secondi',
    enLabel: 'Mains',
      items: [
    {
      itName: 'Polpo arrostitto, crema di ceci e foglie di menta',
      enName: 'Roasted octopus, chickpea cream and mint leaves',
      itDesc: 'Tentacoli di polpo arrostitto serviti su crema di ceci, con olio extravergine e foglie di menta fresca',
      enDesc: 'Roasted octopus tentacles served on a smooth chickpea cream, with extra-virgin olive oil and fresh mint leaves',
      price: '26',
      //allergens: ['M'], // da verificare con la tua legenda
    },
    {
      itName: 'Tonno scottato alle nocciole, ristretto di pomodoro affumicato e involtini di melanzane',
      enName: 'Seared tuna with hazelnuts, smoked tomato reduction and eggplant rolls',
      itDesc: 'Filetto di tonno scottato in crosta di nocciole, salsa di pomodoro affumicato e involtini di melanzane ripieni',
      enDesc: 'Seared tuna fillet in a hazelnut crust, served with smoked tomato reduction and stuffed eggplant rolls',
      price: '26',
      //allergens: ['P', 'N'], // pesce + frutta a guscio, da adattare
    },
    {
      itName: 'Trancetto di spada al salmoriglio, pesto di ricciola e pomodori gratinati',
      enName: 'Swordfish steak with salmoriglio, amberjack pesto and gratin tomatoes',
      itDesc: 'Trancio di pesce spada al salmoriglio, con pesto di ricciola e pomodorini gratinati al forno',
      enDesc: 'Swordfish steak in a lemon and herb salmoriglio, with amberjack pesto and oven-gratin tomatoes',
      price: '26',
      //allergens: ['P'],
    },
    {
      itName: 'Ombrina in crosta di patate e salsa ai peperoni e taccole spadellate',
      enName: 'Ombrina in potato crust, pepper sauce and sautéed snow peas',
      itDesc: 'Filetto di ombrina al forno in crosta di patate, servito con salsa ai peperoni e taccole spadellate',
      enDesc: 'Baked ombrina fillet in a crispy potato crust, served with roasted pepper sauce and sautéed snow peas',
      price: '26',
      //allergens: ['P'],
    },
  ],
  },
  {
    key: 'crudi',
    itLabel: 'Crudi',
    enLabel: 'Raw Bar',
      items: [
    {
      itName: 'Scampo crudo',
      enName: 'Raw scampi',
      itDesc: 'Selezione del giorno, da Nord Europa e Adriatico',
      enDesc: "Today's selection, from Northern Europe and the Adriatic Sea",
      price: '4/pz',
      //allergens: ['M'],
    },
    {
      itName: 'Gambero rosso di Mazara del Vallo',
      enName: 'Mazara del Vallo red prawn',
      itDesc: 'Gambero rosso crudo, olio e limone',
      enDesc: 'Raw red prawn, olive oil and lemon',
      price: '4/pz',
      //allergens: ['C'],
    },
    {
      itName: 'Ostriche',
      enName: 'Oysters',
      itDesc: 'Selezione di ostriche del giorno',
      enDesc: 'Selection of oysters of the day',
      price: '5/pz',
      //allergens: ['M'],
    },
    {
      itName: 'Tartare di tonno pinne gialle con pistacchio e cipolla di Tropea caramellata',
      enName: 'Yellowfin tuna tartare with pistachios and caramelized Tropea onion',
      itDesc: 'Tonno pinne gialle, granella di pistacchio, cipolla di Tropea caramellata',
      enDesc: 'Yellowfin tuna, crushed pistachios, caramelized Tropea onion',
      price: '20',
      //allergens: ['P'],
    },
  ],
  },
];

/*function AllergenBadge({ code, lang }: { code: string; lang: Lang }) {
  const names = lang === 'it' ? ALLERGEN_NAMES_IT : ALLERGEN_NAMES_EN;
  const color = ALLERGEN_COLORS[code] || '#888';

  return (
    <span
      title={names[code]}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 22,
        height: 22,
        borderRadius: '50%',
        border: `1px solid ${color}`,
        color,
        fontFamily: 'var(--font-body)',
        fontSize: '0.5625rem',
        fontWeight: 500,
        letterSpacing: 0,
        cursor: 'default',
        flexShrink: 0,
      }}
    >
      {code}
    </span>
  );
}*/

const t = {
  it: {
    tag: 'Il nostro menu',
    headline: 'Anteprima del menu',
    sub: 'Una selezione dalla nostra cucina. Il menu cambia in base alla disponibilità del pescato.',
    allergenNote: 'Per informazioni complete sugli allergeni, chiama il ristorante prima di venire.',
    fullMenu: 'Menu completo disponibile in sala',
  },
  en: {
    tag: 'Our menu',
    headline: 'Menu preview',
    sub: 'A selection from our kitchen. The menu changes based on daily catch availability.',
    allergenNote: 'For complete allergen information, please call the restaurant before visiting.',
    fullMenu: 'Full menu available in the restaurant',
  },
};

export function MenuPreview({ lang }: { lang: Lang }) {
  const [activeTab, setActiveTab] = useState(0);
  const tx = t[lang];
  const cat = MENU[activeTab];

  return (
    <section
      id="menu"
      style={{ background: 'var(--card)' }}
    >
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
          className="flex flex-col lg:flex-row lg:items-end justify-between"
          style={{ marginBottom: '3rem', gap: '1.5rem' }}
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
              fontSize: '0.875rem',
              color: 'var(--muted-foreground)',
              lineHeight: 1.6,
              maxWidth: 380,
              margin: 0,
              fontWeight: 300,
            }}
          >
            {tx.sub}
          </p>
        </div>

        {/* Category tabs */}
        <div
          className="flex overflow-x-auto"
          style={{
            gap: 0,
            borderBottom: '1px solid var(--border)',
            marginBottom: '3rem',
            scrollbarWidth: 'none',
          }}
        >
          {MENU.map((cat, i) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(i)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: activeTab === i ? 500 : 400,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: activeTab === i ? 'var(--primary)' : 'var(--muted-foreground)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.875rem 1.25rem',
                borderBottom: activeTab === i ? '2px solid var(--primary)' : '2px solid transparent',
                marginBottom: -1,
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {lang === 'it' ? cat.itLabel : cat.enLabel}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div
          className="grid md:grid-cols-2"
          style={{ gap: 0 }}
        >
          {cat.items.map((item, i) => (
            <div
              key={i}
              style={{
                padding: '1.5rem',
                borderBottom: '1px solid var(--border)',
                borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(35,35,32,0.025)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div
                className="flex items-start justify-between"
                style={{ gap: '1rem', marginBottom: '0.5rem' }}
              >
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.0625rem',
                      fontWeight: 500,
                      color: 'var(--foreground)',
                      marginBottom: 4,
                      lineHeight: 1.3,
                    }}
                  >
                    {lang === 'it' ? item.itName : item.enName}
                  </h4>
                  {lang === 'en' && (
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.8125rem',
                        fontStyle: 'italic',
                        color: 'var(--muted-foreground)',
                        marginBottom: 6,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.itName}
                    </p>
                  )}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.0625rem',
                    fontWeight: 500,
                    color: 'var(--primary)',
                    flexShrink: 0,
                  }}
                >
                  €{item.price}
                </div>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  fontWeight: 300,
                  color: 'var(--muted-foreground)',
                  lineHeight: 1.55,
                  margin: '0 0 0.875rem',
                }}
              >
                {lang === 'it' ? item.itDesc : item.enDesc}
              </p>

            </div>
          ))}
        </div>

        {/* Allergen note + full menu */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between"
          style={{
            marginTop: '2.5rem',
            padding: '1.25rem 1.5rem',
            background: 'rgba(27,78,107,0.05)',
            borderRadius: 2,
            gap: '1rem',
            border: '1px solid rgba(27,78,107,0.1)',
          }}
        >
          <div className="flex items-start" style={{ gap: 10 }}>
            <Info
              size={15}
              strokeWidth={1.5}
              style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 1 }}
            />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                color: 'var(--muted-foreground)',
                fontWeight: 300,
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {tx.allergenNote}
            </p>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--muted-foreground)',
              opacity: 0.7,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {tx.fullMenu}
          </span>
        </div>
      </div>
    </section>
  );
}
