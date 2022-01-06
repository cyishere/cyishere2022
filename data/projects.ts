export interface AlbumType {
  id: number;
  title: string;
  excerpt: string;
  link: string;
  screenshots: Array<{ alt: string; src: string }>;
  demo?: string;
  cover?: {
    imageUrl?: string;
    width?: number;
    height?: number;
  };
}

export interface ProjectType {
  title: string;
  description: string;
  cover: string;
  techStack?: {
    backend: string[];
    frontend: string[];
    github: string;
  };
  excerpt?: string;
  contentList?: string[];
}

export interface FccProjectType {
  id: number;
  category: string;
  imageUrl: string;
  projects: {
    name: string;
    url?: string;
  }[];
}

export const ALBUMS: AlbumType[] = [
  {
    id: 1,
    title: "The Clone Webs",
    excerpt: `I recreate real websites to hone my skills as a frontend developer.`,
    link: "https://clones.cyishere.dev",
    screenshots: [
      { alt: "Ableton", src: "/screenshots/the-clone-webs/ableton.png" },
      {
        alt: "Backstage Talks",
        src: "/screenshots/the-clone-webs/backstage-talks.png",
      },
      { alt: "Bejamas", src: "/screenshots/the-clone-webs/bejamas.png" },
    ],
    cover: {
      imageUrl: "/screenshots/the-clone-webs/cover.png",
      width: 550,
      height: 402,
    },
  },
  {
    id: 2,
    title: "JavaScript 30 with React",
    excerpt: `I make the projects of Wes Bos' JavaScript 30 with React (and TypeScript). This let me think React more thoroughly, such as the component's closure.`,
    link: "https://github.com/cyishere/react-ts-30",
    screenshots: [
      {
        alt: "Interact with CSS Variables",
        src: "/screenshots/javascript-30/01-css-variables.png",
      },
      {
        alt: "Drum Kit",
        src: "/screenshots/javascript-30/02-drum-kit.png",
      },
      { alt: "JS Clock", src: "/screenshots/javascript-30/03-clock.png" },
      {
        alt: "Click and Drag",
        src: "/screenshots/javascript-30/04-click-and-drag.png",
      },
      {
        alt: "Countdown Timer",
        src: "/screenshots/javascript-30/05-countdown-timer.png",
      },
    ],
    cover: {
      imageUrl: "/screenshots/javascript-30/cover.png",
      width: 535,
      height: 416,
    },
  },
  {
    id: 3,
    title: "digiKIT",
    excerpt: `"digiKIT" is a fake e-commerce web app to demonstrate how this kind of app works on both server-side and client-side. This is my first *full-stack* app.`,
    link: "/portfolio/digikit",
    screenshots: [
      { alt: "", src: "/img/portfolio/digikit/digikit-cover_l.jpg" },
    ],
    cover: {
      imageUrl: "/img/portfolio/digikit/digikit-cover_l.jpg",
      width: 534,
      height: 300,
    },
  },
  {
    id: 4,
    title: "Chat App",
    excerpt: `I am fascinated by the concept of GraphQL and Prisma, so I made a chat app to learn the subscription of GraphQL, to know Prisma better. I used TailwindCSS for fast development.`,
    link: "/portfolio/chat-app",
    screenshots: [
      { alt: "", src: "/img/portfolio/chat-app/chat-app-cover_l.jpg" },
    ],
    cover: {
      imageUrl: "/img/portfolio/chat-app/chat-app-cover_l.jpg",
      width: 534,
      height: 300,
    },
  },
];

export const REACT_PROJECTS: AlbumType[] = [
  {
    id: 1,
    title: "Covid-19 Tracker",
    link: "https://github.com/cyishere/react-covid19-tracker",
    excerpt: "Exercise about React with API & Leaflet.",
    screenshots: [
      {
        alt: "",
        src: "/img/portfolio/covid-19-tracker/covid-19-tracker-screenshot.png",
      },
    ],
    demo: "https://react-covid19-tracker-cy.herokuapp.com/",
  },
  {
    id: 2,
    title: "Flashcard",
    link: "https://github.com/cyishere/react-flashcard",
    excerpt: "Exercise about React with store data on Firebase.",
    screenshots: [
      { alt: "", src: "/img/portfolio/flashcard/flashcard-screenshot.png" },
    ],
    demo: "https://react-flashcard-cy.herokuapp.com/",
  },
  {
    id: 3,
    title: "Find A Movie",
    link: "https://github.com/cyishere/find-a-movie",
    excerpt: "Exercise about React with API & localStorage.",
    screenshots: [
      {
        alt: "",
        src: "/img/portfolio/find-a-movie/find-a-movie-screenshot.png",
      },
    ],
    demo: "https://frozen-gorge-59869.herokuapp.com/",
  },
];

export const digikit: ProjectType = {
  title: "digiKIT",
  description: `"digiKIT" is an e-commerce app to demonstrate how to put "full-stack" development together. It contains the basic CRUD for products, shopping cart, and making orders, except actual purchase.`,
  cover: "/img/portfolio/digikit/digikit-cover_l.jpg",
  techStack: {
    backend: ["Node.js / Express.js", "MongoDB"],
    frontend: ["React.js", "Redux", "styled-components", "Storybook"],
    github: "https://github.com/cyishere/digikit",
  },
};

export const chatApp: ProjectType = {
  title: "Chat App",
  description: `This is a little app to demonstrate the subscription of GraphQL.`,
  cover: "/img/portfolio/chat-app/chat-app-cover_l.jpg",
  techStack: {
    backend: ["Apollo Server", "GraphQL", "Prisma", "PostgreSQL"],
    frontend: ["React.js", "Apollo Client", "TailwindCSS"],
    github: "https://github.com/cyishere/chat-app",
  },
};

export const fcc: ProjectType = {
  title: "FreeCodeCamp Certifications",
  excerpt: "I got 4 certifications on freeCodeCamp.org.",
  description: `I got 4 certifications on freeCodeCamp.org about frontend and backend, all of JavaScript ecosystem. More details below.`,
  cover: "/img/portfolio/fcc/freecodecamp-certifications-cover.jpg",
  contentList: [
    "Responsive Web Design",
    "JavaScript Algorithms and Data Structures",
    "Font End Libraries",
    "APIs and Microservices",
  ],
};

export const fccProjects: FccProjectType[] = [
  {
    id: 1,
    category: "Responsive Web Design",
    imageUrl: "/img/portfolio/fcc/responsive-web-design.png",
    projects: [
      {
        name: "A Tribute Page",
        url: "https://codepen.io/cyishere/full/YzyQQmN",
      },
      {
        name: "A Survey Form",
        url: "https://codepen.io/cyishere/full/oNjweQo",
      },
      {
        name: "A Product Landing Page",
        url: "https://codepen.io/cyishere/full/GRpvoWO",
      },
      {
        name: "A Technical Documentation Page",
        url: "https://codepen.io/cyishere/full/JjYybdy",
      },
      {
        name: "A Personal Portfolio Webpage",
        url: "https://codepen.io/cyishere/full/LYpzyGy",
      },
    ],
  },
  {
    id: 2,
    category: "JavaScript Algorithms and Data Structures",
    imageUrl:
      "/img/portfolio/fcc/javascript-algorithms-and-data-structures.png",
    projects: [
      {
        name: "Palindrome Checker",
      },
      {
        name: "Roman Numeral Converter",
      },
      {
        name: "Caesars Cipher",
      },
      {
        name: "Telephone Number Validator",
      },
      {
        name: "Cash Register",
      },
    ],
  },
  {
    id: 3,
    category: "Front End Libraries",
    imageUrl: "/img/portfolio/fcc/front-end-libraries.png",
    projects: [
      {
        name: "A Random Quote Machine",
        url: "https://codepen.io/cyishere/full/dyYVwWY",
      },
      {
        name: "A Markdown Previewer",
        url: "https://codepen.io/cyishere/full/KKdXJKE",
      },
      {
        name: "A Drum Machine",
        url: "https://codepen.io/cyishere/full/jObxZEy",
      },
      {
        name: "A JavaScript Calculator",
        url: "https://codepen.io/cyishere/full/bGVMZyO",
      },
      {
        name: "A 25 + 5 Clock",
        url: "https://codepen.io/cyishere/full/BajRvoa",
      },
    ],
  },
  {
    id: 4,
    category: "APIs and Microservices",
    imageUrl: "/img/portfolio/fcc/apis-and-microservices.png",
    projects: [
      {
        name: "Timestamp Microservice",
        url: "https://glitch.com/edit/#!/cy-fcc-timestamps",
      },
      {
        name: "Request Header Parser\nMicroservice",
        url: "https://glitch.com/edit/#!/cy-fcc-request-header",
      },
      {
        name: "URL Shortener Microservice",
        url: "https://glitch.com/edit/#!/cy-fcc-url-shortener",
      },
      {
        name: "Exercise Tracker",
        url: "https://glitch.com/edit/#!/cy-fcc-tracker",
      },
      {
        name: "File Metadata Microservice",
        url: "https://glitch.com/edit/#!/cy-fcc-fileuploader",
      },
    ],
  },
];
