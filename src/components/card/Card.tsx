import React from 'react';
import { IProjectData } from '../../resources-data/project-data';
import Button from '../button-exp/Button';
import styles from './Card.module.scss';
import Image from 'next/image';

export default function Card({ data }: { data: IProjectData }) {
	const { id, title, image, description, liveLink, githubLink } = data;
	return (
		<div className={styles.container}>
			<h1>{title}</h1>
			<Image
				className={styles.project_image}
				src={data.image}
				alt=''
				width={450}
				height={450}
			/>
			{/* <img src={image} alt='' /> */}
			<div className={styles.content}>
				<h3>More Info</h3>
				<p>{description}</p>
				<div className={styles.button}>
					<Button externalLink={liveLink} title={'Live demo'} />
					<Button internalLink={githubLink} title={'GitHub'} />
					{/* <button>More Info</button>
					<button>More Info</button> */}
				</div>
			</div>
		</div>
	);
}
