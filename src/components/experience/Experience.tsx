import { TimeLine } from '../timeline/Timeline';
import styles from './Experience.module.scss';

export interface IExperience {
	id: number;
	title: string;
	text: string;
	time: string;
}

const experienceData: IExperience[] = [
	{
		id: 1,
		title: 'Volunteering',
		text: 'The Professional Development Forum (PDF) is a local not-for-profit organisation that aims to help young professionals prepare for the workplace and their career development. I volunteer my time to build and maintain their website and, integrating various APIs such as YouTube, Whooska podcast and, Eventbrite in order to automate their content propagation.',
		time: '2020 - Present',
	},
	{
		id: 2,
		title: 'Freelancing working',
		text: 'As a freelance developer, I develop websites and apps to improve the digital performance of small businesses and not-for-profit organisations. I work closely with stakeholders to understand and create solutions for their needs, using a tech stack that is sustainable for their use case.',
		time: '2019 - 2021',
	},
	{
		id: 3,
		title: 'Master of IT',
		text: 'Graduated in 2017 - University Technology Sydney',
		time: '2017',
	},
	{
		id: 4,
		title: 'Business Analyst',
		text: 'Before becoming a full-stack web developer, I worked for The NSW Department of Education. The department is responsible for governing over 2,200 public schools and education programs in the state. My role here was to conduct analyses of internal data sources, to determine how to best allocate available resources to have maximum impact on the schools.',
		time: '2015 - 2018',
	},
	{
		id: 5,
		title: 'Bachelor of Commerce',
		text: 'Graduated in 2010 - Macquarie University',
		time: '2010',
	},
];

export default function Experience() {
	return (
		<div className={styles.container}>
			<div className={styles.experience_header}>
				<h1>Experience</h1>
				<p>Work and education</p>
			</div>
			<TimeLine data={experienceData} />
		</div>
	);
}
