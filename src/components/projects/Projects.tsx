import styles from './Projects.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '../../resources-data/project-data';

export default function Projects(): JSX.Element {
	return (
		<section id='projects' className={styles.container}>
			<h1>Projects</h1>
			<div className={styles.projects_card__wrapper}>
				{projectsData.map((project) => {
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
