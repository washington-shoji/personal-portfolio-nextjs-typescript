import React from 'react';
import styles from './ResourceCard.module.scss';
import Image from 'next/image';

import proj_1_img from '../../../public/assets/images/proj_1.png';
import Link from 'next/link';
import { IResourcesPost } from '../../resources-data/resources-data';

export default function ResourceCard(props: IResourcesPost): JSX.Element {
	return (
		<div className={styles.resource__card}>
			<div className={styles.card__content}>
				<Image
					className={styles.project_image}
					src={proj_1_img}
					alt=''
					width={200}
					height={200}
				/>
				<h2>{props.title}</h2>
				<p>{props.text}</p>
				<div className={styles.card__navigation}>
					<Link href={`/resources_page/${props.slug}`}>
						<a>Preview</a>
					</Link>
					<Link href={props.link}>
						<a target='_blank'> Github</a>
					</Link>
					<div className={styles.animation}></div>
				</div>
			</div>
		</div>
	);
}
