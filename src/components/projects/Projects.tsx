import styles from '../../../styles/Projects.module.scss';
import heroImage from '../../../public/assets/images/bg_1.png';
import Image from 'next/image';
import Link from 'next/link';

const projectData = [
	{
		id: 1,
		image: heroImage,
		imageAlt: '',
		title: 'Project 1',
		description:
			'A short project description, giving a brief overview of what its about.',
		demoLink: 'https://nextjs.org/',
		githubLink: 'https://github.com/',
	},
	{
		id: 2,
		image: heroImage,
		imageAlt: '',
		title: 'Project 2',
		description:
			'A short project description, giving a brief overview of what its about.',
		demoLink: 'https://nextjs.org/',
		githubLink: 'https://github.com/',
	},
	{
		id: 3,
		image: heroImage,
		imageAlt: '',
		title: 'Project 3',
		description:
			'A short project description, giving a brief overview of what its about.',
		demoLink: 'https://nextjs.org/',
		githubLink: 'https://github.com/',
	},
];
export default function Projects(): JSX.Element {
	return (
		<div className={styles.container}>
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
								<h3>{project.title}</h3>
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
		</div>
	);
}
