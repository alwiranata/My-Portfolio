// import images
import Hero_person from "./assets/images/Hero/person1.png"

import figma from "./assets/images/Skills/figma.png"
import reactjs from "./assets/images/Skills/react.png"
import nodejs from "./assets/images/Skills/node.png"
import nextjs from "./assets/images/Skills/nj.png"
import expressjs from "./assets/images/Skills/Express.png"
import prisma from "./assets/images/Skills/prisma.png"
import TypeScript from "./assets/images/Skills/TypeScript.png"
import mui from "./assets/images/Skills/mui.png"
import tailwind from "./assets/images/Skills/tailwind.png"
import bootstrap from "./assets/images/Skills/Bootstrap.png"
import mongodb from "./assets/images/Skills/MongoDB.png"
import MySQL from "./assets/images/Skills/MySQL.png"
import PostgresSQL from "./assets/images/Skills/PostgresSQL.png"
import git from "./assets/images/Skills/Git.png"
import NestJs from "./assets/images/Skills/Nest.js.png"
import codeIgniter from "./assets/images/Skills/CodeIgniter.png"
import vercel from "./assets/images/Skills/Vercel.png"
import postman from "./assets/images/Skills/Postman.png"

import services_logo1 from "./assets/images/Services/logo1.png"
import services_logo2 from "./assets/images/Services/logo2.png"
import services_logo3 from "./assets/images/Services/logo3.png"

import ai from "./assets/images/projects/ai.jpg"
import laundry from "./assets/images/projects/laundry.png"
import eShop from "./assets/images/projects/eShop.png"
import ui from "./assets/images/projects/ui.png"
import fixbug from "./assets/images/projects/fixbug.png"
import laundryApi from "./assets/images/projects/laundryapi.png"
import person_project from "./assets/images/projects/person.png"
import github from "./assets/images/projects/github.png"
import ig from "./assets/images/projects/ig.png"
import spreadsheet from "./assets/images/projects/spreadshet.png"

import orenda from "./assets/images/Testimonials/orenda.jpg"
import itbox from "./assets/images/Testimonials/itbox.jpg"
import codingstudio from "./assets/images/Testimonials/codingstudio.jpg"
import nusacodes from "./assets/images/Testimonials/nusacodes.jpg"
import wpu from "./assets/images/Testimonials/wpu.jpg"
import codepolitan from "./assets/images/Testimonials/codepolitan.jpg"
import imphnen from "./assets/images/Testimonials/imphnen.jpg"
import intern_id from "./assets/images/Testimonials/intern_id.jpg"

// import icons from react-icons
import {TbSmartHome} from "react-icons/tb"
import {BiUser} from "react-icons/bi"
import {RiServiceLine, RiProjectorLine} from "react-icons/ri"
import {MdOutlinePermContactCalendar} from "react-icons/md"

export const content = {
	nav: [
		{
			link: "#home",
			icon: TbSmartHome,
		},
		{
			link: "#about",
			icon: BiUser,
		},
		{
			link: "#skills",
			icon: RiServiceLine,
		},
		{
			link: "#experience",
			icon: RiProjectorLine,
		},
		{
			link: "#projects",
			icon: MdOutlinePermContactCalendar,
		},
	],
	hero: {
		title: "SOFTWARE DEVELOPER",
		firstName: "ALDO",
		LastName: "WIRANATA",
		github: "Github",
		urlGithub: "https://github.com/alwiranata",
		linkedin: "LinkedIn",
		urlLinkedin: "https://www.linkedin.com/in/aldo-wiranata-9185552a7/",
		image: Hero_person,
		hero_content: [
			{
				count: "2+",
				text: "Software Developer Experience",
			},
			{
				count: "6+",
				text: "Projects Worked in my career",
			},
		],
	},
	skills: {
		title: "Skills",
		subtitle: "MY SKILLS",
		skills_content: [
			{
				name: "Node js",
				level: "Intermedience",
				logo: nodejs,
			},

			{
				name: "React js",
				level: "Intermedience",
				logo: reactjs,
			},
			{
				name: "NextJS",
				level: "Beginner",
				logo: nextjs,
			},
			{
				name: "Expressjs",
				level: "Intermedience",
				logo: expressjs,
			},
			{
				name: "TypeScript",
				level: "Intermedience",
				logo: TypeScript,
			},

			{
				name: "Prisma",
				level: "Intermedience",
				logo: prisma,
			},

			{
				name: "Material UI",
				level: "Beginner",
				logo: mui,
			},

			{
				name: "Tailwind CSS",
				level: "Intermedience",
				logo: tailwind,
			},
			{
				name: "Bootstrap",
				level: "Intermedience",
				logo: bootstrap,
			},
			{
				name: "MongoDB",
				level: "Beginner",
				logo: mongodb,
			},
			{
				name: "MYSQL",
				level: "Intermedience",
				logo: MySQL,
			},
			{
				name: "PostgreSQL",
				level: "Intermedience",
				logo: PostgresSQL,
			},
			{
				name: "Git",
				level: "Expert",
				logo: git,
			},
			{
				name: "Figma",
				level: "Beginner",
				logo: figma,
			},
			{
				name: "NestJS",
				level: "Beginner",
				logo: NestJs,
			},
			{
				name: "CodeIgniter",
				level: "Intermedience",
				logo: codeIgniter,
			},
			{
				name: "Vercel",
				level: "beginner",
				logo: vercel,
			},
			{
				name: "Postman",
				level: "Intermedience",
				logo: postman,
			},
		],
	},
	services: {
		title: "About Me",
		subtitle: "WHAT I OFFER",
		service_content: [
			{
				title: "Software Developer",
				para: "I specialize in designing, developing, and maintaining software solutions tailored to user needs, using modern technologies and best coding practices to ensure efficiency, scalability, and performance.",
				logo: services_logo1,
			},
			{
				title: "UI/UX Designing",
				para: "Crafting intuitive and engaging user interfaces while ensuring a seamless user experience through research-driven design, wireframes, and interactive prototypes.",
				logo: services_logo2,
			},
			{
				title: "Fixed Bugs",
				para: "I help identify, troubleshoot, and resolve software bugs to ensure smooth functionality and optimal performance of applications across different platforms.",
				logo: services_logo3,
			},
		],
	},
	Projects: {
		title: "Projects",
		subtitle: "MY CREATION",
		image: person_project,
		githubImg: github,
		igImg: ig,
		spreadshetImg: spreadsheet,
		project_content: [
			{
				title: "AI",
				image: ai,
				url: "https://github.com/alwiranata/AI-1.git",
			},
			{
				title:"WEB Laundry",
				image: laundry,
				url : "https://github.com/alwiranata/Web-Laundry.git"
			},
			{
				title:"E-Shop API",
				image: eShop,
				url : "https://github.com/alwiranata/Nusacodes/tree/main/w3"
			},
			{
				title:"Mobile Anime Desain",
				image: ui,
				url : "https://www.instagram.com/p/DAfPkkyzu_k/?img_index=1"
			},
			{
				title:"Fixed Bugs",
				image: fixbug,
				url : "https://docs.google.com/spreadsheets/d/1I0JL0pU2qRfG4JOdaTRJkhq16TH6mehO/edit?gid=742395577#gid=742395577"
			},
			{
				title:"Laundry API",
				image: laundryApi,
				url : "https://github.com/alwiranata/Web-Laundry/tree/main/backend"
			}
		],
	},
	Testimonials: {
		title: "Experience",
		subtitle: "My Experience",
		testimonials_content: [
			{
				review: "Junior Software Developer ",
				year: "@2023-2024",
				img: orenda,
				name: "PT. Prima Nusa Digital",
				nameLink: "orenda.co.id",
				link: "https://orenda.co.id/",
			},
			{
				review: "Bootcamp Fullstack Developer ",
				year: "@2024",
				img: itbox,
				name: "ITBOX",
				nameLink: "itbox.id",
				link: "https://itbox.id/",
			},
			{
				review: "Bootcamp Fullstack Developer ",
				year: "@2025",
				img: codingstudio,
				name: "Coding Studio",
				nameLink: "codingstudio.id",
				link: "https://itbox.id/",
			},
			{
				review: "Bootcamp Backend Developer ",
				year: "@2025",
				img: nusacodes,
				name: "Nusacodes",
				nameLink: "nusacodes.com",
				link: "https://nusacodes.com/",
			},
			{
				review: "Bootcamp Fullstack Developer ",
				year : "@2025",
				img: wpu,
				name: "WPU Course",
				nameLink: "wpucourse.id",
				link: "https://www.wpucourse.id/",
			},
			{
				review: "Bootcamp Fullstack Developer",
				year : "@2025",
				img: codepolitan,
				name: "CodePolitan",
				nameLink: "codepolitan.com",
				link: "https://www.codepolitan.com/",
			},
			{
				review: "Junior Software Developer ",
				year: "@2025-present",
				img: imphnen,
				name: "IMPHNEN",
				nameLink: "imphnen.com",
				link: "https://imphnen.com/",
			},
			{
				review: "Owner & Founder ",
				year : "@2025-present",
				img: intern_id,
				name: "Intern Id",
				nameLink: "intern.id",
				link: "https://www.instagram.com/intern_id/",
			},
		],
	},
	Footer: {
		text: "All © Copy Right Reserved 2022",
	},
}
