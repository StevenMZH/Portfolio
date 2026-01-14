// import * as techs from "../data/techs";

// export const projects = [
//   {
//     type: "full",
//     name: ["Hermes Services &", "hermes-deployer framework"],
//     description:
//       "A DevOps-as-Code solution for automating multi-server deployments in App Service Environments. Simplifies environment management, infrastructure setup, and CI/CD.",
    
//     images: [
//       "hermes/hermes_preview.webp",
//       "hermes-service/hermes_servers-desk-light.webp",
//       "hermes-service/network-diagram.webp",
//     ],
//     mainImage: "hermes-service/hermes_servers-desk-light.webp",
//     stack: [techs.react, techs.django, techs.postgresql, techs.redis, techs.docker, techs.githubActions, techs.nginx, techs.gcp],
//     links: {
//       "View App": "https://hermes.purpleblue.site/",
//       "Package (PyPI)": "https://pypi.org/project/hermes-deployer/",
//       "App Repo": "https://github.com/steven-mendoza-z/hermes-deploy-service.git",
//       "Package Repo": "https://github.com/steven-mendoza-z/DHermes.git",
//     },
//     tags: [
//       "System Design", "Networking", "Devops", "Automatization"
//     ],
//     // problemAnalysis: {
//     //   problem_solving: "",
//     //   objetives: []
//     // },
//     // architecture: [
//     //   {
//     //     name: "Network Architecture Diagram",
//     //     image: "hermes-service/network-diagram.webp",
//     //     description:
//     //       "Network Architecture Diagram representing the main components of the Hermes Services deployment.",
//     //   },
//     // ],
//   },

//   // {
//   //   name: "hermes-deployer",
//   //   description:
//   //     "A DevOps-as-Code solution for automating multi-server deployments in App Service Environments. Simplifies environment management, infrastructure setup, and CI/CD.",
//   //   images: ["hermes/hermes_preview.webp"],
//   //   mainImage: "hermes/hermes_preview.webp",
//   //   project_url: "https://pypi.org/project/hermes-deployer/",
//   //   repo_url: "https://github.com/steven-mendoza-z/DHermes.git",
//   //   stack: [],
//   // },

//   {
//     type: "full",
//     name: ["Quackternion"],
//     description:
//       "Quackternion is an interactive application for simulating objects in a 3D plane, applying spatial transformations using quaternions. It allows exporting the solution procedure in PDF or LaTeX.",
//     images: ["quackternion/quackternion_preview.webp", "quackternion/quackternion-1.webp"],
//     mainImage: "quackternion/quackternion_preview.webp",
//     links: {
//       "View App": "https://quackternion.purpleblue.site/",
//       "Repo": "https://github.com/steven-mendoza-z/Quackternion.git",
//     },
//     stack: [
//       techs.react, techs.django, techs.latex, techs.reactRouter, techs.postgresql, techs.docker, techs.nginx, techs.gcp, techs.githubActions
//     ],
//     tags: [
//       "Math", "Simulation", "Educational", "Automatization"
//     ]
//   },

//   {
//     type: "full",
//     name: ["Eulerian Hades"],
//     description: "A Learning and Problem Solver Platform for engineering students",
//     images: [
//       "eulerian/eulerian_preview.webp",
//       "eulerian/eulerian-1.webp",
//       "eulerian/eulerian-2.webp",
//       "eulerian/eulerian-0.webp",
//     ],
//     mainImage: "eulerian/eulerian_preview.webp",
//     links: {
//       "View App": "https://eulerian-hades.purpleblue.site/",
//       "Repo": "https://github.com/steven-mendoza-z/Eulerian-hades.git",
//     },
//     stack: [
//       techs.react, techs.django, techs.reactRouter, techs.postgresql, techs.redis, techs.docker, techs.nginx, techs.gcp, techs.githubActions
//     ],
//         tags: [
//       "Math", "Educational"
//     ]

//   },
// ];

import * as techs from "../data/techs";

export const projects = [
  {
    type: "full",
    title: "Hermes Services",
    subtitle: "(PyPI Package Framework & Dev-Friendly Platform)",
    description: [
      "A DevOps-as-Code solution for automating multi-server deployments. Simplifies environment management, infrastructure setup, and CI/CD.",
      "(PyPI Package & Dev-Friendly Platform)",
    ],
    images: [
      "hermes/hermes_preview.webp",
      "hermes-service/hermes_servers-desk-light.webp",
      "hermes-service/network-diagram.webp",
    ],
    mainImage: "hermes/hermes_preview.webp",

    // Reordenado para que no parezca “primero frontend”
    stack: [
      techs.django,
      techs.postgresql,
      techs.redis,
      techs.nginx,
      techs.docker,
      techs.githubActions,
      techs.gcp,
      techs.react,
    ],

    links: {
      "View App": "https://hermes.purpleblue.site/",
      "Package (PyPI)": "https://pypi.org/project/hermes-deployer/",
      "App Repo": "https://github.com/steven-mendoza-z/hermes-deploy-service.git",
      "Package Repo": "https://github.com/steven-mendoza-z/DHermes.git",
    },

    // “Automation” y “DevOps” corregidos
    tags: ["System Design", "Networking", "DevOps", "Automation"],
  },

  {
    type: "full",
    title: "Quackternion",
    description: [
      "An interactive 3D simulator that applies spatial transformations using quaternions with support for exporting the solution procedure to PDF or LaTeX.",
    ],
    images: [
      "quackternion/quackternion_preview.webp",
      "quackternion/quackternion-1.webp",
    ],
    mainImage: "quackternion/quackternion_preview.webp",
    links: {
      "View App": "https://quackternion.purpleblue.site/",
      "Repo": "https://github.com/steven-mendoza-z/Quackternion.git",
    },
    stack: [
      techs.django,
      techs.postgresql,
      techs.nginx,
      techs.docker,
      techs.gcp,
      techs.githubActions,
      techs.react,
      techs.reactRouter,
      techs.latex,
    ],
    tags: ["Math", "Simulation", "Education", "Automation"],
  },

  {
    type: "full",
    title: "Eulerian Hades",
    description: [
      "A learning and problem-solving platform for engineering students.",
    ],
    images: [
      "eulerian/eulerian_preview.webp",
      "eulerian/eulerian-1.webp",
      "eulerian/eulerian-2.webp",
      "eulerian/eulerian-0.webp",
    ],
    mainImage: "eulerian/eulerian_preview.webp",
    links: {
      "View App": "https://eulerian-hades.purpleblue.site/",
      "Repo": "https://github.com/steven-mendoza-z/Eulerian-hades.git",
    },
    stack: [
      techs.django,
      techs.postgresql,
      techs.redis,
      techs.nginx,
      techs.docker,
      techs.gcp,
      techs.githubActions,
      techs.react,
      techs.reactRouter,
    ],
    tags: ["Math", "Education"],
  },
];
