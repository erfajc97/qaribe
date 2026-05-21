export const SITE = {
  // TODO: cambiar a dominio final cuando esté listo (qarybe.com)
  url: "https://qaribe.netlify.app",
  name: "Qarybe Summit 2026",
  ogImage: "/images/og-image.jpg",
};

export const EVENT = {
  brand: "QARYBE",
  brandSuffix: "SUMMIT",
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

export const PILARES = [
  {
    n: "I",
    title: "Inteligencia Artificial",
    body: "Cómo implementarla en ventas, operación, servicio y toma de decisiones — con casos reales de la región.",
  },
  {
    n: "II",
    title: "Insurtech",
    body: "Tecnología que está cambiando las reglas del sector asegurador: procesos modernos, flujos automatizados y clientes mejor atendidos.",
  },
  {
    n: "III",
    title: "Innovación Tecnológica",
    body: "Herramientas, plataformas e integraciones para las empresas que decidieron escalar en serio.",
  },
  {
    n: "IV",
    title: "Desarrollo a Medida",
    body: "Soluciones construidas para lo que tu empresa necesita — no plantillas para el mercado general.",
  },
];

export const DIAS = [
  {
    n: "01",
    label: "Día 1",
    title: "Bienvenida",
    body: "Llegada, registro y apertura oficial. Cena de conexión. Las conversaciones empiezan antes de la primera sesión.",
  },
  {
    n: "02",
    label: "Día 2",
    title: "Cumbre Ejecutiva",
    body: "Contenido estratégico liderado por Shepwashi y Luntriqa. Conversaciones privadas y conexiones estratégicas de alto nivel sobre inteligencia artificial, Insurtech e innovación.",
  },
  {
    n: "03",
    label: "Día 3",
    title: "Experiencia",
    body: "Actividad privada, cierre de conexiones. El final de la experiencia — y el inicio de lo que viene.",
  },
];

export const PERFILES = [
  {
    title: "CEOs y Presidentes",
    body: "Los que tienen que decidir hacia dónde va la empresa antes de que el mercado decida por ellos.",
  },
  {
    title: "Fundadores y Propietarios",
    body: "Los que construyeron su negocio y ahora necesitan tecnología que lo escale sin destruir lo que funciona.",
  },
  {
    title: "Líderes Comerciales y de Operación",
    body: "Los que saben que sus procesos tienen un techo — y quieren romperlo con las herramientas correctas.",
  },
  {
    title: "Equipos de Tecnología e Innovación",
    body: "Los que ejecutan, pero necesitan dirección estratégica y referentes reales para ir más rápido.",
  },
];

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

export const STATS = [
  {
    value: "78%",
    body: "de ejecutivos de seguros en LatAm no tienen una estrategia clara de IA — en una industria que la IA va a reestructurar completamente en la próxima década.",
  },
  {
    value: "5×",
    body: "la ventaja de rendimiento de aseguradoras con IA vs. operadores tradicionales en mercados emergentes.",
  },
  {
    value: "$2.4T",
    body: "valor proyectado de la IA en América Latina y el Caribe para 2035. La mayoría fluirá a organizaciones ya posicionadas hoy.",
  },
];

export const CREDENCIALES = {
  title: "¿Por qué Shepwashi?",
  subtitle:
    "La firma con más conocimiento en AI, InsurTech y tecnología para América Latina y el Caribe.",
  body: "Qarybe Summit no es organizado por una agencia de eventos. Es organizado por la firma que ha pasado más de 65 años construyendo y transformando el sector asegurador de la región — respaldada por un equipo de expertos en inteligencia artificial con pedigree académico avanzado y un equipo completo de desarrolladores que construye e implementa soluciones reales.",
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
