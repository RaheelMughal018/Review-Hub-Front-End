import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "login",
    title: "Login",
  },
  {
    id: "signup",
    title: "Sign up",
  },
  {
    id: "YT",
    title: "Youtube Search",
  },

  {
    id: "AMZ",
    title: "Amazon Search",
  },
  {
    id: "contacto",
    title: "Contact",
  },

  {
    id: "Logout",
    title: "Logout",
  },
];

const services = [
  {
    title: "Positive Comments",
    icon: web,
  },
  {
    title: "Negative Comments",
    icon: mobile,
  },
  {
    title: "Recomendations",
    icon: backend,
  },
  {
    title: "Questions",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Scrapping",
    company_name: "Pupiteer",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "From pupiteer we gather all the comments we need and we keep them stored for further processing  ",
      "This process is done for both Daraz and Youtube",
    ],
  },
  {
    title: "AI",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "TBD",
    name: "Raheel Mughal",
    // designation: "CEO",
    // company: "TBD",
    image:
      "https://images.pexels.com/photos/3612885/pexels-photo-3612885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    testimonial: "TBD",
    name: "Waleed Butt",
    // designation: "COO",
    // company: "DEF Corp",
    image:
      "https://images.pexels.com/photos/3612885/pexels-photo-3612885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    testimonial: "TBD",
    name: "Salman Zahid",
    // designation: "CTO",
    // company: "456 Enterprises",
    image:
      "https://images.pexels.com/photos/3612885/pexels-photo-3612885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const projects = [
  {
    name: "YOUTUBE",
    description:
      " Our sentiment analysis ensures you grasp the authentic pulse of your viewers, allowing you to create content that resonates. From comments, our platform transforms raw data into actionable insights, empowering you to stay at the forefront of the YouTube landscape.Elevate your content with",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "DARAZ",
    description:
      "Elevate your shopping experience with comprehensive data-driven insights.Authenticity is paramount, and our tools guarantee just that by sifting through reviews to unveil genuine insights.As a buyer wanting to make informed decisions, our platform is your go-to source for trustworthy analysis on Daraz",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "GRAPHICAL REPORT",
    description:
      "Visualize your success with our graphical reports tailored for your unique needs. Our platform transforms complex data into clear, insightful visualizations, allowing you to grasp trends at a glance. From sentiment trends to product feedback, empowering you to make informed decisions swiftly.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
