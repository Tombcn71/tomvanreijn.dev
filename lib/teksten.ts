export type Taal = "nl" | "en";

export const TEKSTEN = {
  nl: {
    rol: "Saas en custom agents",
    kop: "Ik bouw saas en custom agents.",
    sub: "Software en assistenten die je elke dag gebruikt in je bedrijf.",
    cta: "Mail mij",
    cta2: "Bekijk mijn stack",
    agentLabel: "Mijn assistent",
    agentKop: "Vraag het gewoon aan mijn assistent.",
    agentTekst:
      "Klik op de knop en praat met hem, of typ je vraag. Hij vertelt wat ik bouw, hoe ik werk en wat het kan opleveren.",
    agentKnop: "Start gesprek",
    voorbeeldKop: "Vraag bijvoorbeeld",
    voorbeelden: [
      "Wat kun jij voor mijn bedrijf bouwen?",
      "Kun je mijn offertes automatisch laten maken?",
      "Hoe werkt een custom agent?",
      "Hoe lang duurt het om een eerste versie te maken?",
    ],
    agentBinnenkort: "De assistent komt hier binnenkort te staan.",
    stackKop: "Mijn stack",
    stackTekst: "Waar ik elke dag in werk.",
    projectenKop: "Projecten",
    projectenTekst: "Producten die ik zelf heb bedacht en gebouwd.",
    projecten: [
      {
        naam: "kozijnsoftware.nl",
        tekst: "Saas voor kozijnbedrijven. Klanten stellen hun kozijn samen, zien direct de prijs en vragen de offerte aan.",
        link: "https://kozijnsoftware.nl",
      },
      {
        naam: "moverAI",
        tekst: "Saas voor verhuisbedrijven. Klanten uploaden foto's van hun kamers en krijgen automatisch een offerte.",
        link: "",
      },
    ],
    bezoek: "Bezoek site",
    binnenkort: "Binnenkort",
    contactKop: "Een product laten bouwen?",
    contactTekst: "Vertel kort wat je wilt maken. Ik laat je zien hoe het kan.",
    mail: "Mail me",
    rechten: "Alle rechten voorbehouden.",
  },
  en: {
    rol: "SaaS and custom agents",
    kop: "I build SaaS and custom agents.",
    sub: "Software and assistants you use every day in your business.",
    cta: "Email me",
    cta2: "See my stack",
    agentLabel: "My assistant",
    agentKop: "Just ask my assistant.",
    agentTekst:
      "Press the button and talk to it, or type your question. It tells you what I build, how I work and what it can do for you.",
    agentKnop: "Start conversation",
    voorbeeldKop: "Try asking",
    voorbeelden: [
      "What can you build for my business?",
      "Can you automate my quotes?",
      "How does a custom agent work?",
      "How long does a first version take?",
    ],
    agentBinnenkort: "The assistant will appear here soon.",
    stackKop: "My stack",
    stackTekst: "What I work in, every day.",
    projectenKop: "Projects",
    projectenTekst: "Products I came up with and built myself.",
    projecten: [
      {
        naam: "kozijnsoftware.nl",
        tekst: "SaaS for window and door companies. Customers configure their window, see the price right away and request the quote.",
        link: "https://kozijnsoftware.nl",
      },
      {
        naam: "moverAI",
        tekst: "SaaS for moving companies. Customers upload photos of their rooms and get a quote automatically.",
        link: "",
      },
    ],
    bezoek: "Visit site",
    binnenkort: "Coming soon",
    contactKop: "Want a product built?",
    contactTekst: "Tell me briefly what you want to make. I will show you how it can be done.",
    mail: "Email me",
    rechten: "All rights reserved.",
  },
} as const;

export const STACK = [
  { naam: "Next.js", tekst: "React-framework voor snelle, goed vindbare sites en apps." },
  { naam: "shadcn/ui", tekst: "Nette, toegankelijke onderdelen voor de interface." },
  { naam: "Neon (Postgres)", tekst: "Database die meegroeit, zonder dat je er om hoeft te denken." },
  { naam: "Vercel", tekst: "Hosting waar elke wijziging direct live gaat." },
] as const;

export const STACK_EN = [
  { naam: "Next.js", tekst: "React framework for fast, searchable sites and apps." },
  { naam: "shadcn/ui", tekst: "Clean, accessible building blocks for the interface." },
  { naam: "Neon (Postgres)", tekst: "A database that grows with you, without you having to think about it." },
  { naam: "Vercel", tekst: "Hosting where every change goes live instantly." },
] as const;
