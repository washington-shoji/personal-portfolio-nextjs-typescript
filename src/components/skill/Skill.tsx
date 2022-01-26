import {FaReact, FaHtml5, FaCss3, FaSass} from 'react-icons/fa';
import {SiNextdotjs} from 'react-icons/si';

import styles from '../../../styles/Skill.module.scss';

const skillsData = [
	{
		id: 1,
		title: 'front-end',
		description:
			'A passionate self-taught full-stack web and mobile developer who strives to help solve problems with my technical skills.',
		icons: [FaReact, FaHtml5, FaCss3, FaSass],
	},
	{
		id: 2,
		title: 'backend-end',
		description:
			'A passionate self-taught full-stack web and mobile developer who strives to help solve problems with my technical skills.',
		icons: [FaReact, FaHtml5, FaCss3, FaSass],
	},
	{
		id: 3,
		title: 'soft-skills',
		description:
			'A passionate self-taught full-stack web and mobile developer who strives to help solve problems with my technical skills.',
		icons: [FaReact, FaHtml5, FaCss3, FaSass],
	},
];

export default function Skill(): JSX.Element {
	return (
		<div className={styles.container}>
			<h1>My Skills</h1>
			<div className={styles.skills_wrapper}>
				{skillsData.map((data) => {
					const icons = data.icons;
					return (
						<div key={data.id} className={styles.skills_category}>
							<h2>{data.title}</h2>
							<p>{data.description}</p>
							<div className={styles.skills_item__container}>
								{icons.map((i, index) => {
									const Icon = i;
									return <Icon key={index} />;
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
