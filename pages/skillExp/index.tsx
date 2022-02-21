import React from 'react';
import Button from '../../src/components/button-exp/Button';
import styles from './SkillExp.module.scss';

interface ISkill {
	id: number;
	stack: string;
	skill: string[];
}

const skillData: ISkill[] = [
	{
		id: 1,
		stack: 'Languages & Utilities',
		skill: ['JavaScrip', 'TypeScript', 'Git', 'GitHub'],
	},
	{
		id: 2,
		stack: 'Front-end',
		skill: ['React', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'Sass'],
	},
	{
		id: 3,
		stack: 'Back-end',
		skill: ['Node.js', 'Express', 'MongoDB', 'MySQL'],
	},

	{
		id: 4,
		stack: 'Soft-skill',
		skill: ['Problem-solving', 'Team-building', 'Time-management'],
	},
];

export default function Skill() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.header__left}>
					<p>My skillset</p>
					<h1>Full-stack web developer</h1>
				</div>
				<div className={styles.header__right}>
					<p>{`'Cosmos' is an occasion to bring everything that I have, all of my capacity to communicate. We may go to the edge of the universe, but we're going to land right on you: in your heart, in your soul, in your mind. My goal is to have people know that they are participants in this great unfolding cosmic story.`}</p>
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
			<Button internalLink={'/projectExp'} title={'Go to my projects'} />
		</div>
	);
}
