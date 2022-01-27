import styles from '../../../styles/Experience.module.scss';

const experienceData = [
	{
		id: 1,
		title: 'Freelancing working',
		text: 'I have worked on different projects, and experienced several tech stacks.',
	},
	{
		id: 2,
		title: 'Business Analyst',
		text: 'I have worked on different projects, and experienced several tech stacks.',
	},
	{
		id: 3,
		title: 'Master of IT',
		text: 'I have worked on different projects, and experienced several tech stacks.',
	},
	{
		id: 4,
		title: 'Bachelor of Commerce',
		text: 'I have worked on different projects, and experienced several tech stacks.',
	},
];

export default function Experience() {
	return (
		<div className={styles.container}>
			<div className={styles.experience_header}>
				<h1>Experience</h1>
				<p>Including working and education</p>
			</div>
			<div className={styles.experience_wrapper}>
				{experienceData.map((exp) => {
					return (
						<div key={exp.id} className={styles.experience_content}>
							<div className={styles.experience_title}>
								<h1>{exp.title}</h1>
							</div>
							<div className={styles.experience_text}>
								<p>{exp.text}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
