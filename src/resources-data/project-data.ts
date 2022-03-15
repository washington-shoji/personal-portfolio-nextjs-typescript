import heroImage from '../../public/assets/images/bg_1.png';
import proj_1_img from '../../public/assets/images/proj_1.png';
import proj_2_img from '../../public/assets/images/proj_2.png';

export interface ICommercialProjectData {
	id: number;
	desktopImage: string;
	tabletImage: string;
	mobileImage: string;
	liveLink: string;
}

export const projectData: ICommercialProjectData[] = [
	{
		id: 1,
		desktopImage: '/assets/images/pdf-website.webp',
		tabletImage: '/assets/images/pdf-website-tablet.webp',
		mobileImage: '/assets/images/pdf-website-mob.webp',
		liveLink: 'https://www.professionaldevelopmentforum.org/',
	},
	// {
	// 	id: 2,
	// 	desktopImage: '/assets/images/wsol-website.webp',
	// 	tabletImage: '/assets/images/wsol-website-tablet.webp',
	// 	mobileImage: '/assets/images/wsol-website-mob.webp',
	// 	liveLink: 'https://w-solutions-website.vercel.app/',
	// },
	{
		id: 3,
		desktopImage: '/assets/images/sj-website.webp',
		tabletImage: '/assets/images/sj-website-tablet.webp',
		mobileImage: '/assets/images/sj-website-mob.webp',
		liveLink: 'https://shaniraja.com/',
	},
];

export interface IProjectsData {
	id: number;
	image: StaticImageData;
	imageAlt: string;
	title: string;
	description: string;
	demoLink: string;
	githubLink: string;
}

export const projectsData: IProjectsData[] = [
	{
		id: 1,
		image: proj_1_img,
		imageAlt: 'event lite',
		title: 'Event Lite Front-end',
		description: `Event Lite front-end app. It is a lite version of an event management app.
		It is built with React, Sass, and Redux and has Auth0 authentication and Cloudinary for images generation. The app is deployed on Vercel.`,
		demoLink: 'https://event-x-2-0-client.vercel.app/',
		githubLink: 'https://github.com/washington-shoji/event-lite-react-redux',
	},
	{
		id: 2,
		image: proj_2_img,
		imageAlt: 'event lite',
		title: 'Event Lite Back-end',
		description:
			'Event Lite back-end API. Built with Node.js, MongoDB, and Express deployed on GCP as a serverless function. The app has Auth0 JWT token authentication and Cloudinary for image storage as third-party API integration. ',
		demoLink: 'https://event-x-2-0-client.vercel.app/',
		githubLink: 'https://github.com/washington-shoji/event-lite-express-api',
	},
	{
		id: 3,
		image: heroImage,
		imageAlt: 'personal portfolio',
		title: 'Personal Portfolio',
		description:
			'It is a server-side rendered web app built with Next.js, HTML (TSX), TypeScript, and Sass.',
		demoLink: 'https://www.washingtonshoji.live/',
		githubLink:
			'https://github.com/washington-shoji/personal-portfolio-nextjs-typescript',
	},
];
