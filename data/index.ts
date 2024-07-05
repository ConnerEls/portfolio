import { icons } from "@tabler/icons-react";

export const navItems = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "About",
		link: "#about",
	},
	{
		name: "Projects",
		link: "#projects",
	},
	{
		name: "Experience",
		link: "#experience",
	},
	{
		name: "Contact",
		link: "#contact",
	},
];

export const gridItems = [
	{
		id: 1,
		title: "I prioritize client collaboration, fostering open communication ",
		description: "",
		className: "w-full h-full lg:col-span-2 md:col-span-3 md:row-span-2  ",
		imgClassName: "w-full h-full",
		titleClassName: "justify-end",
		img: "/b1.svg",
		spareImg: "",
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: "",
		className: "w-full lg:col-span-1 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-1 md:col-span-2 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "Tech enthusiast with a passion for development.",
		description: "",
		className: "lg:col-span-1 md:col-span-2 ",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/b4.svg",
	},

	{
		id: 5,
		title: "Currently learning Next.js",
		description: "The Inside Scoop",
		className: "md:col-span-2 md:row-span-1",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b5.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 6,
		title: "Do you want to start a project together?",
		description: "",
		className: "lg:col-span-3 md:col-span-2 ",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60",
		img: "",
		spareImg: "",
	},
];

export const projects = [
	{
		id: 1,
		title: "React Admin Dashboard",
		des: "A React Admin Dashboard With Real time Data, Charts, Events, Kanban, CRM, and More",
		img: "/ReactDashboard.webp",
		iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
		link: "https://github.com/ConnerEls?tab=repositories",
	},
	{
		id: 2,
		title: "Full Stack E-Commerce App",
		des: "An incredible Full Stack E-Commerce App with an Admin Dashboard & CMS using Next 14, Stripe, TypeScript, and Payload CMS.",
		img: "/p2.svg",
		iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
		link: "https://github.com/ConnerEls?tab=repositories",
	},
	{
		id: 3,
		title: "AI Image SaaS - Canva Application",
		des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
		img: "/p3.svg",
		iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
		link: "https://github.com/ConnerEls?tab=repositories",
	},
];


export const workExperience = [
	{
		id: 1,
		title: "Unity XR Developer",
		desc: "I create and deliver training simulations in VR for various industries, such as health and safety, manufacturing, and automotive.",
		className: "md:col-span-2",
		thumbnail: "/exp1.svg",
	},
	{
		id: 2,
		title: "UI / UX Developer",
		desc: "Studied and Quilified UI / UX Developer. Created multiple project to enhance my skills.",
		className: "md:col-span-2", // change to md:col-span-2
		thumbnail: "/exp2.svg",
	},
	{
		id: 3,
		title: "Freelance Web Designer",
		desc: "Led the dev of a web site for a NPO client, from initial concept to live deployment.",
		className: "md:col-span-2", // change to md:col-span-2
		thumbnail: "/exp3.svg",
	},
	{
		id: 4,
		title: "Lead Frontend Developer",
		desc: "Developing user-facing features using modern frontend technologies.",
		className: "md:col-span-2",
		thumbnail: "/exp4.svg",
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
		link: "https://github.com/ConnerEls?tab=repositories",
	},
	{
		id: 2,
		img: "/link.svg",
		link: "https://www.linkedin.com/in/conner-els-920816245/?trk=nav_responsive_tab_profile_pic&originalSubdomain=za",
	},
];
