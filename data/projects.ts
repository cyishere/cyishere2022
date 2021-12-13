export interface AlbumType {
  id: number;
  title: string;
  excerpt: string;
  link: string;
  screenshots: Array<{ alt: string; src: string }>;
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
  },
  {
    id: 2,
    title: "JavaScript 30 with React",
    excerpt: `I make the projects of Wes Bos' JavaScript 30 with React (and TypeScript). This let me think React more thoroughly, such as the component's closure.`,
    link: "https://js30.cyishere.dev",
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
  },
  {
    id: 3,
    title: "digiKIT",
    excerpt: `"digiKIT" is a fake e-commerce web app to demonstrate how this kind of app works on both server-side and client-side. This is my first *full-stack* app.`,
    link: "https://www.cyishere.dev/portfolio/digikit",
    screenshots: [
      { alt: "", src: "/img/portfolio/digikit/digikit-cover_l.jpg" },
    ],
  },
  {
    id: 4,
    title: "Chat App",
    excerpt: `I am fascinated by the concept of GraphQL and Prisma, so I made a chat app to learn the subscription of GraphQL, to know Prisma better. I used TailwindCSS for fast development.`,
    link: "https://www.cyishere.dev/portfolio/chat-app",
    screenshots: [
      { alt: "", src: "/img/portfolio/chat-app/chat-app-cover_l.jpg" },
    ],
  },
];
