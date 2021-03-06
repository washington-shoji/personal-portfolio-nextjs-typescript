import type { NextPage } from 'next';
import Head from 'next/head';
import { NavigationMenu } from '../../src/components/navigation-menu/NavigationMenu';
import {
	experienceData,
	IExperienceData,
} from '../../src/resources-data/experience-data';
import styles from './Experience.module.scss';

const Experience = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Washington Shoji Portfolio</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/ws_logo.ico' />
			</Head>
			<NavigationMenu />
			<div className={styles.header}>
				<h1 className={styles.text}>Work</h1>
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
								<p className={styles.experience__description}>
									{experience.description}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Experience;
