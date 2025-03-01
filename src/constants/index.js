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
    title: "Recoomendations",
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
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAhFBMVEX///8AAAAICh+Ojo5WVlb09PRCQkKhoaH39/fCwsJvb2/a2tpoaGgaGhqFhYVTU1NgYGAAABiYmJjOzs67u7sAABsAABQVFRUvLy/l5eVLS0t4eHiwsLAiIiIQEBB/f39JSlMbHSoUFSM6O0Y0NDhYWF1XV2JDQ1AiIy57e4NycnhnZ3D/McPvAAACxUlEQVR4nO2aC5OaMBCAXZW3gkRE8N1aeoX7//+vICd6CAnVJGtn9htvRrmZu2+SZbO7OBoRBEEQBEEQBEEQBEEQBEHg4Tn+dA2wnvqOh+3yxdJNoCFxl9g+JZ4JLUz01WLrtlO5jQxVyZg9KlXMDESpoNsJIMBzcvucAFwsJ6vfCcDCcUp5TgApilRPkDfBjuG0nPOl5hhZ1Oc7Afj6nWzBQpVLZWuX8kROAPqPG24+qNGfFQT3XoX++6/3hLmh/6zZiKU2JFXxltu3FUtttUvtxFI77VKCGqFCf51gPzQMbUz9x4w4pWOUeV7Cd0pQOi3Gl8Lps+w9z2mPEFEVy0O/0wGte+fkKv05qqH3DkRqsGqibqcI06mMq46DOcCfBlmt1G4ibp29u/5zIwqazmYeRNeBi7XTnhSccn2OzcDHcCzm+8xybleO5Zo5WpWMupoye+uAtN7TrcY5VdTk8kmnVjq5/n6v7T68z04me4gcm92Hvp6wtxetDDBzvFsoeU67IVxoiHejY3yXLLbMKmHbRUc94yoPLENYcD5iKrayOWPOfly1OzigsepCabM1YNTSjcJ70OFUdXwOypK7IWgVeCSqgv34vFN5UKpxcl5xAlCygfaA2R2PmYq88OJCqVmqJ1L5d0z5Ti8vlIqlEj5gECP9EUTK7dGHsZc9sOpp8P4N2WXoVIbUVLKUDCcAuU5LOVJyW2fBgGwocgdpTxZ3baQWe0a7g3mShcwCJn35jKnpb6mfQDQJHorUibEnfGA8jLlUKTlOch8re8FUCgH6V6sIgiAIgiAIgiAIgiAIgiAI4v9n8oZIeg4rl9H4DblIrS6v8Ti8XFrFcbiq34Xjr3f6peLTj59niGM4lT8x/MqL0wdUn88Z/P4IsaSyP3l+yor8M8tPBfM3xe4zyrKomLDzWaJU86dW3z6F43gVh3cX/gIDLSh116+72wAAAABJRU5ErkJggg==",
  },
  {
    testimonial: "TBD",
    name: "Waleed Butt",
    // designation: "COO",
    // company: "DEF Corp",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAhFBMVEX///8AAAAICh+Ojo5WVlb09PRCQkKhoaH39/fCwsJvb2/a2tpoaGgaGhqFhYVTU1NgYGAAABiYmJjOzs67u7sAABsAABQVFRUvLy/l5eVLS0t4eHiwsLAiIiIQEBB/f39JSlMbHSoUFSM6O0Y0NDhYWF1XV2JDQ1AiIy57e4NycnhnZ3D/McPvAAACxUlEQVR4nO2aC5OaMBCAXZW3gkRE8N1aeoX7//+vICd6CAnVJGtn9htvRrmZu2+SZbO7OBoRBEEQBEEQBEEQBEEQBEHg4Tn+dA2wnvqOh+3yxdJNoCFxl9g+JZ4JLUz01WLrtlO5jQxVyZg9KlXMDESpoNsJIMBzcvucAFwsJ6vfCcDCcUp5TgApilRPkDfBjuG0nPOl5hhZ1Oc7Afj6nWzBQpVLZWuX8kROAPqPG24+qNGfFQT3XoX++6/3hLmh/6zZiKU2JFXxltu3FUtttUvtxFI77VKCGqFCf51gPzQMbUz9x4w4pWOUeV7Cd0pQOi3Gl8Lps+w9z2mPEFEVy0O/0wGte+fkKv05qqH3DkRqsGqibqcI06mMq46DOcCfBlmt1G4ibp29u/5zIwqazmYeRNeBi7XTnhSccn2OzcDHcCzm+8xybleO5Zo5WpWMupoye+uAtN7TrcY5VdTk8kmnVjq5/n6v7T68z04me4gcm92Hvp6wtxetDDBzvFsoeU67IVxoiHejY3yXLLbMKmHbRUc94yoPLENYcD5iKrayOWPOfly1OzigsepCabM1YNTSjcJ70OFUdXwOypK7IWgVeCSqgv34vFN5UKpxcl5xAlCygfaA2R2PmYq88OJCqVmqJ1L5d0z5Ti8vlIqlEj5gECP9EUTK7dGHsZc9sOpp8P4N2WXoVIbUVLKUDCcAuU5LOVJyW2fBgGwocgdpTxZ3baQWe0a7g3mShcwCJn35jKnpb6mfQDQJHorUibEnfGA8jLlUKTlOch8re8FUCgH6V6sIgiAIgiAIgiAIgiAIgiAI4v9n8oZIeg4rl9H4DblIrS6v8Ti8XFrFcbiq34Xjr3f6peLTj59niGM4lT8x/MqL0wdUn88Z/P4IsaSyP3l+yor8M8tPBfM3xe4zyrKomLDzWaJU86dW3z6F43gVh3cX/gIDLSh116+72wAAAABJRU5ErkJggg==",
  },
  {
    testimonial: "TBD",
    name: "Salman Zahid",
    // designation: "CTO",
    // company: "456 Enterprises",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAhFBMVEX///8AAAAICh+Ojo5WVlb09PRCQkKhoaH39/fCwsJvb2/a2tpoaGgaGhqFhYVTU1NgYGAAABiYmJjOzs67u7sAABsAABQVFRUvLy/l5eVLS0t4eHiwsLAiIiIQEBB/f39JSlMbHSoUFSM6O0Y0NDhYWF1XV2JDQ1AiIy57e4NycnhnZ3D/McPvAAACxUlEQVR4nO2aC5OaMBCAXZW3gkRE8N1aeoX7//+vICd6CAnVJGtn9htvRrmZu2+SZbO7OBoRBEEQBEEQBEEQBEEQBEHg4Tn+dA2wnvqOh+3yxdJNoCFxl9g+JZ4JLUz01WLrtlO5jQxVyZg9KlXMDESpoNsJIMBzcvucAFwsJ6vfCcDCcUp5TgApilRPkDfBjuG0nPOl5hhZ1Oc7Afj6nWzBQpVLZWuX8kROAPqPG24+qNGfFQT3XoX++6/3hLmh/6zZiKU2JFXxltu3FUtttUvtxFI77VKCGqFCf51gPzQMbUz9x4w4pWOUeV7Cd0pQOi3Gl8Lps+w9z2mPEFEVy0O/0wGte+fkKv05qqH3DkRqsGqibqcI06mMq46DOcCfBlmt1G4ibp29u/5zIwqazmYeRNeBi7XTnhSccn2OzcDHcCzm+8xybleO5Zo5WpWMupoye+uAtN7TrcY5VdTk8kmnVjq5/n6v7T68z04me4gcm92Hvp6wtxetDDBzvFsoeU67IVxoiHejY3yXLLbMKmHbRUc94yoPLENYcD5iKrayOWPOfly1OzigsepCabM1YNTSjcJ70OFUdXwOypK7IWgVeCSqgv34vFN5UKpxcl5xAlCygfaA2R2PmYq88OJCqVmqJ1L5d0z5Ti8vlIqlEj5gECP9EUTK7dGHsZc9sOpp8P4N2WXoVIbUVLKUDCcAuU5LOVJyW2fBgGwocgdpTxZ3baQWe0a7g3mShcwCJn35jKnpb6mfQDQJHorUibEnfGA8jLlUKTlOch8re8FUCgH6V6sIgiAIgiAIgiAIgiAIgiAI4v9n8oZIeg4rl9H4DblIrS6v8Ti8XFrFcbiq34Xjr3f6peLTj59niGM4lT8x/MqL0wdUn88Z/P4IsaSyP3l+yor8M8tPBfM3xe4zyrKomLDzWaJU86dW3z6F43gVh3cX/gIDLSh116+72wAAAABJRU5ErkJggg==",
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
