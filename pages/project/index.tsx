import React from 'react';
import Button from '../../src/components/button/Button';
import Slider from '../../src/components/slider/Slider';
import SliderTwo from '../../src/components/slider/SliderTwo';
import { projectsData } from '../../src/resources-data/project-data';
import styles from './Project.module.scss';

export default function Project() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p>My recent</p>
				<h1>Projects</h1>
			</div>
			<SliderTwo slides={projectsData} />
			{/* <Slider slides={projectsData} /> */}
			<Button internalLink='/experience' title={'Go to experience'} />
		</div>
	);
}
