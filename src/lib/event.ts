export const SITE = {
  // TODO: cambiar a dominio final cuando esté listo (qarybe.com)
  url: "https://qaribe.netlify.app",
  name: "Qarybe Summit 2026",
  ogImage: "/images/og-image.jpg",
};

export const EVENT = {
  brand: "QARYBE",
  brandSuffix: "SUMMIT",
  pronunciation: "/ka·ri·be/",
  tagline: "10,000 years in the making.",
  year: "2026",
  startDate: "2026-09-24",
  endDate: "2026-09-26",
  dateLabel: "24 — 26 de septiembre · 2026",
  city: "Cartagena",
  country: "Colombia",
  venue: "Four Seasons",
  invitedBy: ["Shepwashi", "Luntriqa"],
};

export const NAV_LINKS = [
  { href: "#pilares",     label: "Pilares" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#acceso",      label: "Acceso" },
];

// ── 02 · Origen ─────────────────────────────────────────────
export const ORIGEN = {
  eyebrow: "Origen",
  title: "Hace miles de años",
  paragraphs: [
    "Los Karib ya cruzaban estas aguas. Navegantes, comerciantes, pioneros — le dieron su nombre a todo un mar. El Caribe se llama Caribe por ellos.",
    "Durante siglos, todo lo que movía al mundo pasó por aquí: rutas, riqueza, ideas, imperios. Siempre fue el lugar por donde la historia tenía que pasar.",
    "Qarybe toma ese nombre y lo devuelve a su origen. El primer encuentro de su clase en América Latina y el Caribe — por invitación — donde los invitados serán expuestos al futuro de la tecnología y la IA en nuestro hemisferio.",
  ],
  highlight: "El mismo cruce de caminos. Diez mil años después.",
  support: {
    label: "Beneficios",
    body: "2 noches · el icónico Four Seasons Cartagena · hospedaje, alimentación y traslados dentro de Cartagena, cubiertos. Tu misión es llegar.",
  },
};

// ── 03 · El momento ─────────────────────────────────────────
export const MOMENTO = {
  eyebrow: "El momento",
  title: "El futuro de la región se está escribiendo ahora.",
  body: [
    "Tecnología que cambia cada mes. Economías sin libreto. Inestabilidad política e institucional que redibuja el terreno. Una región que redefine sus reglas. Las decisiones que van a marcar la próxima década se toman ahora — y no admiten ensayo.",
    "Qarybe existe para tomarlas junto a quienes ya entienden hacia dónde va todo.",
  ],
};

// ── 04 · Cuatro pilares ─────────────────────────────────────
export const PILARES = [
  {
    n: "I",
    title: "Inteligencia Artificial",
    body: "Implementación con contexto profundo de mercado, riesgos y volatilidad. Estrategia respaldada por quienes estudiaron el terreno, no por quienes se subieron a la ola.",
  },
  {
    n: "II",
    title: "Construcción Personalizada",
    body: "Software hecho para tu organización, con tecnología de punta.",
  },
  {
    n: "III",
    title: "Insurtech",
    body: "El sector asegurador reescrito: procesos modernos, flujos automatizados.",
  },
  {
    n: "IV",
    title: "El futuro de la región",
    body: "Hacia dónde va LatAm y el Caribe, y cómo posicionarse antes que el resto.",
  },
];

// ── 06 · Agenda ─────────────────────────────────────────────
export const DIAS = [
  {
    n: "01",
    label: "Día 1",
    title: "Bienvenida",
    body: "Llegada, registro y apertura. La primera muestra de lo que viene.",
  },
  {
    n: "02",
    label: "Día 2",
    title: "Cumbre Ejecutiva",
    body: "Contenido de Shepwashi y Luntriqa. IA, desarrollo a medida e Insurtech. A puerta cerrada.",
  },
  {
    n: "03",
    label: "Día 3",
    title: "Experiencia",
    body: "Actividad privada y cierre. El inicio de lo que viene.",
  },
];

// ── 07 · Para quién ─────────────────────────────────────────
export const PERFILES = [
  { title: "Inversionistas e inversionistas institucionales" },
  { title: "Funcionarios y oficiales de gobierno" },
  { title: "CEOs y Presidentes" },
  { title: "Fundadores y propietarios" },
  { title: "CTOs y líderes de tecnología" },
];

// ── 10 · Acceso · formulario ────────────────────────────────
export const FOCUS_AREAS = [
  "Inteligencia Artificial",
  "Insurtech",
  "Fintech",
  "Innovación Tecnológica",
  "Desarrollo de Software",
  "Consultoría",
  "Otro",
];

// Endpoint del formulario. Pegar aquí el endpoint de Formspree
// (https://formspree.io/f/XXXXXXX) o de la API propia cuando esté listo.
// Vacío = modo demo (muestra confirmación sin enviar).
export const FORM_ENDPOINT = "";

// ── 08 · Quién organiza (simplificado) ──────────────────────
export const CREDENCIALES = {
  eyebrow: "Quién organiza",
  title: "Organizado por Shepwashi.",
  cards: [
    {
      n: "I",
      title: "65+ años de experiencia ejecutiva en seguros",
      body: "CEOs, presidentes y ejecutivos de reaseguro que han liderado aseguradoras en toda la región.",
    },
    {
      n: "II",
      title: "Pedigree académico avanzado en IA",
      body: "Expertos en inteligencia artificial, ciencia de datos e ingeniería de software. No teoría — implementación real.",
    },
    {
      n: "III",
      title: "Construimos e implementamos",
      body: "No solo asesoramos. Tenemos un equipo completo de desarrollo que construye soluciones a la medida de cada organización.",
    },
  ],
};

// ── 11 · Grand finale ───────────────────────────────────────
export const GRAND_FINALE = {
  eyebrow: "Grand finale",
  title: "Grand finale.",
  body: [
    "En Qarybe los invitados no solo verán el futuro. Serán los primeros en presenciar — y usar — una tecnología de su clase única, aplicable a cualquier industria, desde seguros hasta hospitalidad.",
    "Los primeros en interactuar. Los primeros en invertir, si así lo deciden. El resto del mundo, después.",
  ],
};
