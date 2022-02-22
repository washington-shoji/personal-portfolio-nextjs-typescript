import React from 'react';
import Button from '../../src/components/button-exp/Button';
import styles from './Experience.module.scss';

export interface IExperienceData {
	id: number;
	title: string;
	workplace: string;
	date: string;
	description: string;
}

const experienceData: IExperienceData[] = [
	{
		id: 1,
		title: 'Job 1',
		workplace: 'Workplace 1',
		date: 'Jan 2020 - Dec 2021',
		description: `'Cosmos' is an occasion to bring everything that I have, all of my capacity to communicate. We may go to the edge of the universe, but we're going to land right on you: in your heart, in your soul, in your mind. My goal is to have people know that they are participants in this great unfolding cosmic story.`,
	},
	{
		id: 2,
		title: 'Job 2',
		workplace: 'Workplace 2',
		date: 'Jan 2020 - Dec 2021',
		description: `'Cosmos' is an occasion to bring everything that I have, all of my capacity to communicate. We may go to the edge of the universe, but we're going to land right on you: in your heart, in your soul, in your mind. My goal is to have people know that they are participants in this great unfolding cosmic story.`,
	},
	{
		id: 3,
		title: 'Job 3',
		workplace: 'Workplace 1',
		date: 'Jan 2020 - Dec 2021',
		description: `'Cosmos' is an occasion to bring everything that I have, all of my capacity to communicate. We may go to the edge of the universe, but we're going to land right on you: in your heart, in your soul, in your mind. My goal is to have people know that they are participants in this great unfolding cosmic story.`,
	},
	{
		id: 4,
		title: 'Job 4',
		workplace: 'Workplace 1',
		date: 'Jan 2020 - Dec 2021',
		description: `'Cosmos' is an occasion to bring everything that I have, all of my capacity to communicate. We may go to the edge of the universe, but we're going to land right on you: in your heart, in your soul, in your mind. My goal is to have people know that they are participants in this great unfolding cosmic story.`,
	},
];

export default function Experience(data: { data: IExperienceData[] }) {
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
			<Button internalLink='/heroExp' title='Back to start' />
		</div>
	);
}
