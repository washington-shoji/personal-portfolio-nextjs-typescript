import { NextPage } from 'next';
import React from 'react';
import styles from '../styles/Resources.module.scss';
import bgImage from '../public/assets/images/bg_construction_2.jpg';
import Image from 'next/image';

export default function Resources<NextPage>(): JSX.Element {
	return (
		<div className={styles.container}>
			<Image src={bgImage} alt='' />
		</div>
	);
}
