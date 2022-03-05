import { ISkill, skillData } from '../../../resources-data/skill-data';
import styles from './HeroSkill.module.scss';

export function HeroSkill() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2 className={styles.text}>Tech stack</h2>
			</div>
			<div className={styles.content}>
				<div className={styles.skills}>
					{skillData.map((stack: ISkill) => {
						return (
							<div key={stack.id} className={styles.skill}>
								<h3>
									{stack.stack}
									<span>_</span>
								</h3>
								{stack.skill.map((skill) => {
									return <p key={skill}>{skill}</p>;
								})}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
