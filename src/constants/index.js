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
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Network Design & Management",
    icon: web,
  },
  {
    title: " Network Operations & Security",
    icon: mobile,
  },
  {
    title: "SQL Proficiency & Database Design",
    icon: backend,
  },
  {
    title: "Cloud Platform Proficiency",
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
    title: "Internet Network Specialist",
    company_name: " Almora Cable Network , Uttarakhand India",
    icon: starbucks,
    iconBg:"#000000",
    date: "August 2023 - October 2023",
    points: [
      "Worked with Almora Cable Network, contributing to their Telecom Infrastructure Provider (TIP) role forcompanies like BSNL, JIO, AIR COM, and RAIL WIRE",
      "Managing more than 3000 clients. Supported telecom giants to deliver their services effectively.",
      "Tasks: Managing OLT, FMS, ONT, Fiber Optics, Troubleshooting and Maintenance",
      
    ],
  },
  {
    title: " Managed Network Expert",
    company_name: "Chegg India , Remote",
    icon: tesla,
    iconBg: "#000000",
    date: "February 2024 - July 2024",
    points: [ 
      "Provided freelance academic support on Chegg India , solving diverse student questions.",
      "Maintained a high standard of accuracy and clarity in solutions, contributing to positive student feedback and improved learning outcomes",
      "Stayed updated with the latest academic trends and methodologies to provide relevant and current support to students.",
      
    ],
  },
  {
    title: "Member",
    company_name: "Umeed A Drop Of Hope (NGO) ",
    icon: shopify,
    iconBg: "#000000",
    date: " March 2024 - August 2024",
    points: [
      "Worked closely with a team to implement the Knowledge for All initiative, ensuring effective outreach and resource distribution.",
      "Aimed to bridge the educational gap by making learning accessible to all, regardless of economic background.Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Contributed to the enhancement of educational opportunities for marginalized groups, directly impacting the lives of many individuals in need.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Vijay Chaudhary",
    designation: "Member & Investor",
    company: "Almora Cable Networks",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
 
];

const projects = [
  {
    name: " Static IP Network Deployment",
    description:
      " Executed a network deployment project using static IP addressing.",      
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
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
