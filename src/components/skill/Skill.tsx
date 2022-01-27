import {IconType} from 'react-icons';
import {
	FaReact,
	FaHtml5,
	FaCss3,
	FaSass,
	FaNode,
	FaQuestionCircle,
	FaRegClock,
} from 'react-icons/fa';
import {
	SiJavascript,
	SiTypescript,
	SiNextdotjs,
	SiRedux,
	SiExpress,
	SiMongodb,
	SiMysql,
	SiGit,
	SiGithub,
	SiVisualstudiocode,
	SiJira,
} from 'react-icons/si';
import {GiTeamIdea} from 'react-icons/gi';

import styles from '../../../styles/Skill.module.scss';

interface ISkills {
	id: number;
	title: string;
	description: string;
	icons?: IconType[];
}

const skillsData: ISkills[] = [
	{
		id: 1,
		title: 'languages & utils',
		description:
			'I predominantly use Typescript and Javascript for my full-stack web development and other utility tools to help boost efficiency.',
		icons: [
			SiJavascript,
			SiTypescript,
			SiGit,
			SiGithub,
			SiVisualstudiocode,
			SiJira,
		],
	},
	{
		id: 2,
		title: 'front end',
		description:
			'My front-end library and framework of choice are React and Next.js for Server Side Rendering with the help of Node.js dependencies.',
		icons: [FaReact, SiNextdotjs, SiRedux, FaHtml5, FaCss3, FaSass],
	},
	{
		id: 3,
		title: 'back end',
		description:
			'I can develop backend API services with Express and NoSQL databases, such as MongoDB or SQL databases with Node.js dependencies. ',
		icons: [FaNode, SiExpress, SiMongodb, SiMysql],
	},
	{
		id: 4,
		title: 'human skills',
		description:
			'As a soft-skills, I have good problem solving, team-building and time management. I bring those skills to help my team as best as possible. ',
		icons: [FaQuestionCircle, GiTeamIdea, FaRegClock],
	},
];

export default function Skill(): JSX.Element {
	return (
		<div className={styles.container}>
			<h1>Skills</h1>
			<div className={styles.skills_wrapper}>
				{skillsData.map((data) => {
					const icons = data.icons;
					return (
						<div key={data.id} className={styles.skills_category}>
							<h2>{data.title}</h2>
							<p>{data.description}</p>
							<div className={styles.skills_item__container}>
								{icons?.map((i, index) => {
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
