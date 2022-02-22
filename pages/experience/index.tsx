import React from 'react';
import Button from '../../src/components/button/Button';
import {
	experienceData,
	IExperienceData,
} from '../../src/resources-data/experience-data';
import styles from './Experience.module.scss';

export default function Experience() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p>My working</p>
				<h1>Experience</h1>
			</div>
			<div className={styles.experience__container}>
				{experienceData.map((experience: IExperienceData) => {
					return (
						<div key={experience.id} className={styles.experience__content}>
							<div className={styles.content__header}>
								<h2>
									<span>| </span>
									{experience.title}
								</h2>
								<p>{experience.workplace}</p>
							</div>
							<div className={styles.content__body}>
								<p>{experience.date}</p>
								<p>{experience.description}</p>
							</div>
						</div>
					);
				})}
			</div>
			<Button internalLink='/hero' title='Back to start' />
		</div>
	);
}
