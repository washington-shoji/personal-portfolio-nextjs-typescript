import heroImage from '../../public/assets/images/bg_1.png';
import proj_1_img from '../../public/assets/images/proj_1.png';
import proj_2_img from '../../public/assets/images/proj_2.png';

export interface IProjectData {
	id: number;
	title: string;
	image: string;
	description: string;
	liveLink: string;
	githubLink: string;
}

export const projectData: IProjectData[] = [
	{
		id: 1,
		title: 'Project 1',
		image:
			'https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2',
		description:
			'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
		liveLink: 'http://localhost:3000/projectExp',
		githubLink: 'https://github.com/washington-shoji',
	},
	{
		id: 2,
		title: 'Project 2',
		image:
			'https://images.pexels.com/photos/4603464/pexels-photo-4603464.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
		description:
			'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
		liveLink: 'http://localhost:3000/projectExp',
		githubLink: 'https://github.com/washington-shoji',
	},
	{
		id: 3,
		title: 'Project 3',
		image:
			'https://images.pexels.com/photos/5499145/pexels-photo-5499145.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
		description:
			'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
		liveLink: 'http://localhost:3000/projectExp',
		githubLink: 'https://github.com/washington-shoji',
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
