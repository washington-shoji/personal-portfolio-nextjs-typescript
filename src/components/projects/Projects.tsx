import styles from '../../../styles/Projects.module.scss';
import heroImage from '../../../public/assets/images/bg_1.png';
import proj_1_img from '../../../public/assets/images/proj_1.png';
import proj_2_img from '../../../public/assets/images/proj_2.png';
import Image from 'next/image';
import Link from 'next/link';

const projectData = [
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
export default function Projects(): JSX.Element {
	return (
		<section id='projects' className={styles.container}>
			<h1>Projects</h1>
			<div className={styles.projects_card__wrapper}>
				{projectData.map((project) => {
					return (
						<div key={project.id} className={styles.project_card}>
							<div className={styles.project}>
								<Image
									className={styles.project_image}
									src={project.image}
									alt={project.imageAlt}
									width={200}
									height={200}
								/>
								<h2>{project.title}</h2>
								<p>{project.description}</p>
								<div className={styles.project_navigation}>
									<Link href={project.demoLink}>
										<a target='_blank'> Live demo</a>
									</Link>
									<Link href={project.githubLink}>
										<a target='_blank'> Github</a>
									</Link>
									<div className={styles.animation}></div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
