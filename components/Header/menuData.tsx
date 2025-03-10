import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  // {
  //   id: 1,
  //   title: "Home",
  //   newTab: false,
  //   path: "/",
  // },

  {
    id: 3,
    title: "Emplois",
    newTab: false,
    submenu: [
      {
        id: 1,
        title: "Agriculture, Agroalimentaire, Élevage",
        newTab: false,
        path: "/categories/agriculture",
      },
      {
        id: 2,
        title: "Armée, Sécurité, Force",
        newTab: false,
        path: "/categories/armee",
      },
      {
        id: 3,
        title: "Art, Design, Culture, Artisanat d'art",
        newTab: false,
        path: "/categories/art-design",
      },
      {
        id: 4,
        title: "Audiovisuel, Spectacle, Cinéma",
        newTab: false,
        path: "/categories/audiovisuel",
      },
      {
        id: 5,
        title: "Audit, Conseil, Études, Expertise",
        newTab: false,
        path: "/categories/audit",
      },
      {
        id: 6,
        title: "Finance, Banque, Assurance",
        newTab: false,
        path: "/categories/finance",
      },
      {
        id: 7,
        title: "BTP, Architecture, Immobilier",
        newTab: false,
        path: "/categories/btp",
      },
      {
        id: 8,
        title: "Chimie, Laboratoires",
        newTab: false,
        path: "/categories/chimie",
      },
      {
        id: 9,
        title: "Commerce, Distribution, E-commerce, Négoce",
        newTab: false,
        path: "/categories/commerce",
      },
      {
        id: 10,
        title: "Construction aéronautique, ferroviaire et navale",
        newTab: false,
        path: "/categories/construction",
      },
      {
        id: 11,
        title: "Droit, Justice",
        newTab: false,
        path: "/categories/droit",
      },
      {
        id: 12,
        title: "Électronique, Électrotechnique, Mécanique, Bois",
        newTab: false,
        path: "/categories/electronique",
      },
      {
        id: 13,
        title: "Énergie, Hydrocarbure, Mines",
        newTab: false,
        path: "/categories/energie",
      },
      {
        id: 14,
        title: "Enseignement, Formation",
        newTab: false,
        path: "/categories/enseignement",
      },
      {
        id: 15,
        title: "Environnement, Eau, Forêt",
        newTab: false,
        path: "/categories/environnement",
      },
      {
        id: 16,
        title: "Fonction publique, Gouvernance",
        newTab: false,
        path: "/categories/fonction-publique",
      },
      {
        id: 17,
        title: "Textile, Habillement, Mode",
        newTab: false,
        path: "/categories/textile",
      },
      {
        id: 18,
        title: "Hôtellerie, Restauration, Tourisme",
        newTab: false,
        path: "/categories/hotellerie",
      },
      {
        id: 19,
        title: "Technologie, Informatique, Numérique",
        newTab: false,
        path: "/categories/technologie",
      },
      {
        id: 20,
        title: "Logistique, Transport",
        newTab: false,
        path: "/categories/logistique",
      },
      {
        id: 21,
        title: "Maintenance, Entretien",
        newTab: false,
        path: "/categories/maintenance",
      },
      {
        id: 22,
        title: "Marketing, Publicité, Communication",
        newTab: false,
        path: "/categories/marketing",
      },
      {
        id: 23,
        title: "Matériaux, Transformations",
        newTab: false,
        path: "/categories/materiaux",
      },
      {
        id: 24,
        title: "Mer, Pêche",
        newTab: false,
        path: "/categories/mer-peche",
      },
      {
        id: 25,
        title: "ONG, Association, Fondation, Organismes Internationaux",
        newTab: false,
        path: "/categories/ong",
      },
      {
        id: 26,
        title: "Prestataire de service, Service aux entreprises",
        newTab: false,
        path: "/categories/prestataire-service",
      },
      {
        id: 27,
        title: "Santé, Médical, Pharmacie",
        newTab: false,
        path: "/categories/sante",
      },
      {
        id: 28,
        title: "Social, Services à la personne",
        newTab: false,
        path: "/categories/social",
      },
      {
        id: 29,
        title: "Sport et Loisirs",
        newTab: false,
        path: "/categories/sport-loisirs",
      },
    ],
  },
];

export default menuData;
const emploiMenu = {
  id: 3,
  title: "Emplois",
  newTab: false,
  submenu: [
    {
      category: "Agriculture & Environnement",
      items: [
        {
          id: 1,
          title: "Agriculture, Agroalimentaire, Élevage",
          path: "/categories/agriculture",
        },
        {
          id: 2,
          title: "Environnement, Eau, Forêt",
          path: "/categories/environnement",
        },
        { id: 3, title: "Mer, Pêche", path: "/categories/mer-peche" },
      ],
    },
    {
      category: "BTP & Industrie",
      items: [
        {
          id: 4,
          title: "BTP, Architecture, Immobilier",
          path: "/categories/btp",
        },
        {
          id: 5,
          title: "Construction aéronautique, ferroviaire et navale",
          path: "/categories/construction",
        },
        {
          id: 6,
          title: "Électronique, Électrotechnique, Mécanique, Bois",
          path: "/categories/electronique",
        },
        {
          id: 7,
          title: "Matériaux, Transformations",
          path: "/categories/materiaux",
        },
        { id: 8, title: "Chimie, Laboratoires", path: "/categories/chimie" },
        {
          id: 9,
          title: "Énergie, Hydrocarbure, Mines",
          path: "/categories/energie",
        },
      ],
    },
    {
      category: "Commerce & Services",
      items: [
        {
          id: 10,
          title: "Commerce, Distribution, E-commerce, Négoce",
          path: "/categories/commerce",
        },
        {
          id: 11,
          title: "Prestataire de service, Service aux entreprises",
          path: "/categories/prestataire-service",
        },
        {
          id: 12,
          title: "Logistique, Transport",
          path: "/categories/logistique",
        },
        {
          id: 13,
          title: "Marketing, Publicité, Communication",
          path: "/categories/marketing",
        },
        {
          id: 14,
          title: "Hôtellerie, Restauration, Tourisme",
          path: "/categories/hotellerie",
        },
      ],
    },
    {
      category: "Finance & Droit",
      items: [
        {
          id: 15,
          title: "Finance, Banque, Assurance",
          path: "/categories/finance",
        },
        {
          id: 16,
          title: "Audit, Conseil, Études, Expertise",
          path: "/categories/audit",
        },
        { id: 17, title: "Droit, Justice", path: "/categories/droit" },
      ],
    },
    {
      category: "Fonction publique & Organisations",
      items: [
        {
          id: 18,
          title: "Fonction publique, Gouvernance",
          path: "/categories/fonction-publique",
        },
        {
          id: 19,
          title: "ONG, Association, Fondation, Organismes Internationaux",
          path: "/categories/ong",
        },
      ],
    },
    {
      category: "Santé & Social",
      items: [
        {
          id: 20,
          title: "Santé, Médical, Pharmacie",
          path: "/categories/sante",
        },
        {
          id: 21,
          title: "Social, Services à la personne",
          path: "/categories/social",
        },
      ],
    },
    {
      category: "Technologie & Communication",
      items: [
        {
          id: 22,
          title: "Technologie, Informatique, Numérique",
          path: "/categories/technologie",
        },
        {
          id: 23,
          title: "Audiovisuel, Spectacle, Cinéma",
          path: "/categories/audiovisuel",
        },
      ],
    },
    {
      category: "Éducation & Recherche",
      items: [
        {
          id: 24,
          title: "Enseignement, Formation",
          path: "/categories/enseignement",
        },
      ],
    },
    {
      category: "Sécurité & Défense",
      items: [
        { id: 25, title: "Armée, Sécurité, Force", path: "/categories/armee" },
      ],
    },
    {
      category: "Culture & Loisirs",
      items: [
        {
          id: 26,
          title: "Art, Design, Culture, Artisanat d'art",
          path: "/categories/art-design",
        },
        {
          id: 27,
          title: "Sport et Loisirs",
          path: "/categories/sport-loisirs",
        },
      ],
    },
    {
      category: "Autres",
      items: [
        {
          id: 28,
          title: "Textile, Habillement, Mode",
          path: "/categories/textile",
        },
        {
          id: 29,
          title: "Maintenance, Entretien",
          path: "/categories/maintenance",
        },
      ],
    },
  ],
};
