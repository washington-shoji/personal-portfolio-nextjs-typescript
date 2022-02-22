import React from 'react';
import { IProjectsData } from '../../resources-data/project-data';
import Button from '../button/Button';
import styles from './Card.module.scss';
import Image from 'next/image';

export default function Card({ data }: { data: IProjectsData }) {
	const { title, image, description, demoLink, githubLink } = data;
	return (
		<div className={styles.container}>
			<h1>{title}</h1>
			<Image
				className={styles.project_image}
				src={image}
				alt=''
				width={450}
				height={450}
			/>
			<div className={styles.content}>
				<h3>More Info</h3>
				<p>{description}</p>
				<div className={styles.button}>
					<Button externalLink={demoLink} title={'Live demo'} />
					<Button internalLink={githubLink} title={'GitHub'} />
				</div>
			</div>
		</div>
	);
}
