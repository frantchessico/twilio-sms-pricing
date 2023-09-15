import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiSupabase,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiMui,
  SiPrisma,
  SiFlutter,
  SiHeroku,
  SiTailwindcss,
  SiGo,
  SiKubernetes,
  SiFauna,
  SiGraphql,
  SiFastify,
  SiRedis,
  SiAppwrite,
  SiAngular
} from "react-icons/si";
import axios from 'axios'
import { BiLogoPostgresql } from "react-icons/bi";


export const skills = [
  {
    icon: SiGo,
    text: "Golang",
  },
  {
    icon: SiNodedotjs,
    text: "Node",
  },
  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  

  {
    icon: SiExpress,
    text: "Express",
  },

  {
    icon: SiFastify,
    text: "Fastify",
  },

  {
    icon: SiGraphql,
    text: "GraphQL",
  },
  {
    icon: SiPrisma,
    text: "Prisma",
  },
  {
    icon: SiSupabase,
    text: "Supabase",
  },
  {
    icon: SiAppwrite,
    text: "Appwrite",
  },
  {
    icon: SiFirebase,
    text: "Firebase",
  },
  {
    icon: SiFauna,
    text: "FaunaDB",
  },
 
  {
    icon: BiLogoPostgresql,
    text: "PostgreSQL",
  },
  {
    icon: SiMongodb,
    text: "MongoDB",
  },
  {
    icon: SiRedis,
    text: "Redis",
  },
  {
    icon: SiDocker,
    text: "Docker",
  },
  {
    icon: SiAmazonaws,
    text: "AWS",
  },
  {
    icon: SiKubernetes,
    text: "Kubernetes",
  },
  {
    icon: SiHeroku,
    text: "Heroku",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiAngular,
    text: "Angular",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiRedux,
    text: "Redux",
  },
  
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  
  
 
  
  
  
  {
    icon: SiBootstrap,
    text: "Bootstrap",
  },
  {
    icon: SiMui,
    text: "MUI",
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
}


export interface IBlogPosts {
  title: string;
  url: string;
  description: string;
  user: {
    name: string,
    username: string
    profile_image: string
  };
}

  export let allBlogs: IBlogPosts[] = []



  export const getPosts = async() => {
    try {
      const { data } = await axios.get('https://dev.to/api/articles?username=frantchessico')
      return data
    } catch (error) {
      console.log(error)
    }
  }

  


export const projects: Project[] = [
  {
    title: "Zogo",
    description: "Zogo is a custom validation library for Go that allows you to define and apply various validation rules to your data. It is inspired by Zod's zogo.",
    link: "https://github.com/frantchessico/zogo",
  },
  {
    title: "Go Contact API & Send Email",
    description: "This API is designed to handle contact form submissions, store contact information in a MongoDB database, and send a confirmation email. It provides endpoints to submit contact information and receive confirmation messages.",
    link: "https://github.com/frantchessico/franciscoinoque.tech-server-go",
  },

  {
    title: "Country Dialing Code API With GoLang Documentation",
    description: "This simple Go (Golang) API provides information about countries, including their names, dialing codes, and country codes. It reads this information from a JSON file and exposes an endpoint to retrieve these data.",
    link: "https://github.com/frantchessico/countries-with-dials-go",
  },
  {
    title: "Country Dialing Code API With Python Documentation",
    description: "This FastAPI project provides information about countries, including their names, dialing codes, and country codes. It reads this information from a JSON file and exposes an endpoint to retrieve these data.",
    link: "https://github.com/frantchessico/countries-with-dialing-code-python",
  },
  {
    title: "Nodejs Auth API Documentation",
    description: "Welcome to the official documentation of Nodejs Auth API. This API provides a comprehensive set of functionalities for user management, authentication, email verification, and password reset.",
    link: "https://github.com/frantchessico/nodejs-auth-api",
  },
  {
    title: "Stripe Payment API in Go",
    description: "This is an example of a Go API that allows you to create a payment intent with Stripe. The API is configured to accept POST requests and responds with details about the created payment intent.",
    link: "https://github.com/frantchessico/stripe-payment-with-go",
  },
  {
    title: "Stripe Payment API with Python",
    description: "This is an example of a FastAPI-based API in Python that allows you to create a payment intent with Stripe and process payments. The API is configured to accept POST requests and respond with details about the created payment intent or payment processing status.",
    link: "https://github.com/frantchessico/stripe-payment-with-python",
  },

  {
    title: "PayPal Payment API with Python",
    description: "This is an example of a FastAPI-based API in Python that allows you to create and execute PayPal payments. The API is configured to accept POST requests and interact with the PayPal API for payment processing.",
    link: "https://github.com/frantchessico/paypal-payment-with-python",
  },

  {
    title: "PayPal Payment API with Go",
    description: "This is an example of a Go-based API that allows you to create and execute PayPal payments. The API interacts with the PayPal API for payment processing.",
    link: "https://github.com/frantchessico/paypal-payment-with-go",
  },
];






export const aboutYou = {
  name: "Francisco Inoque",
  description:
    "👨‍💻 Backend Developer with over 6 years of programming experience. 🚀 Specialized in Node.js, Go, and Python.",
  yearsOfExperience: "6 years",
  location: "Mozambique",
  email: "hi@franciscoinoque.tech",
};

export const logoText = "@frantchessico";

export const marketingHeadlines = {
  mainHeadline: "I'm Backend Software Developer",
  subHeadline: "My tech journey has been exciting, and I'm eager to share a bit more about myself.",
};

export const websiteMetadata = {
  title: "Francisco Inoque | Backend Developer",
  description: "👋 Hey, Random Person here. Welcome to my portflio/blog.",
};


export const stacktechs = [
  { key: 'golang', name: 'Golang' },
  { key: 'node', name: 'Node' },
  { key: 'python', name: 'Python' },
  { key: 'fastapi', name: 'FastAPI' },
  { key: 'express', name: 'Express' },
  { key: 'fastify', name: 'Fastify' },
  { key: 'prisma', name: 'Prisma' },
  { key: 'supabase', name: 'Supabase' },
  { key: 'appwrite', name: 'Appwrite' },
  { key: 'firebase', name: 'Firebase' },
  { key: 'faunadb', name: 'FaunaDB' },
  { key: 'postgresql', name: 'PostgreSQL' },
  { key: 'mongodb', name: 'MongoDB' },
  { key: 'redis', name: 'Redis' },
  { key: 'docker', name: 'Docker' },
  { key: 'aws', name: 'AWS' },
  { key: 'kubernetes', name: 'Kubernetes' },
  { key: 'heroku', name: 'Heroku' },
  { key: 'git', name: 'Git' }
];