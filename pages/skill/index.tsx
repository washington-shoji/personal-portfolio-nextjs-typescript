import type { NextPage } from 'next';
import Head from 'next/head';
import Button from '../../src/components/button/Button';
import { ISkill, skillData } from '../../src/resources-data/skill-data';
import styles from './Skill.module.scss';

const Skill: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Washington Shoji Portfolio</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/ws_logo.ico' />
			</Head>
			<div className={styles.header}>
				<div className={styles.header__left}>
					<p>My skillset</p>
					<h1>Full-stack web developer</h1>
				</div>
				<div className={styles.header__right}>
					<p>{` My main area of 
						expertise is developing MERN stack applications with the addition of 
						Typescript and SASS.`}</p>
				</div>
			</div>
			<div className={styles.skill__container}>
				<h2>Tech-stack</h2>
				<div className={styles.skill__content}>
					{skillData.map((stack: ISkill) => {
						return (
							<div key={stack.id} className={styles.skill}>
								<h3>{stack.stack}</h3>
								{stack.skill.map((skill) => {
									return <p key={skill}>{skill}</p>;
								})}
							</div>
						);
					})}
				</div>
			</div>
			<Button internalLink={'/project'} title={'Go to my projects'} />
		</div>
	);
};

export default Skill;
