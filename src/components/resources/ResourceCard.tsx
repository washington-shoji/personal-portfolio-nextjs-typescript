import React from 'react';
import styles from './ResourceCard.module.scss';
import Image from 'next/image';

import proj_1_img from '../../../public/assets/images/proj_1.png';
import Link from 'next/link';

export default function ResourceCard(props: any) {
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
				<p>{`Be nice to sort of go near them and find out what they're made of, possibly tag their ears.`}</p>
				<div className={styles.card__navigation}>
					<Link href={``}>
						<a target='_blank'>Preview</a>
					</Link>
					<Link href={``}>
						<a target='_blank'> Github</a>
					</Link>
					<div className={styles.animation}></div>
				</div>
			</div>
		</div>
	);
}
