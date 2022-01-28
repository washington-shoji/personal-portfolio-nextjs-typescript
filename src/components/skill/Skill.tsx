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
	toolTip: string[];
}

const skillsData: ISkills[] = [
	{
		id: 1,
		title: 'languages & utilities',
		description:
			'I predominantly use TypeScript and JavaScript for my full-stack web development and other utility tools to help boost productivity.',
		icons: [
			SiJavascript,
			SiTypescript,
			SiGit,
			SiGithub,
			SiVisualstudiocode,
			SiJira,
		],
		toolTip: ['JavaScript', 'TypeScript', 'Git', 'GitHub', 'VSCode', 'Jira'],
	},
	{
		id: 2,
		title: 'front end',
		description:
			'My front-end library and framework of choice are React and Next.js for Server Side Rendering with the help of Node.js dependencies.',
		icons: [FaReact, SiNextdotjs, SiRedux, FaHtml5, FaCss3, FaSass],
		toolTip: ['React', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'Sass'],
	},
	{
		id: 3,
		title: 'back end',
		description:
			'I can develop backend API services with Express and NoSQL databases, such as MongoDB or SQL databases with Node.js dependencies. ',
		icons: [FaNode, SiExpress, SiMongodb, SiMysql],
		toolTip: ['Node.js', 'Express', 'MongoDB', 'MySQL'],
	},
	{
		id: 4,
		title: 'human skills',
		description:
			'I am good at problem-solving, team-building and time management. I like to bring those skills to help my team/colleagues as best as possible.',
		icons: [FaQuestionCircle, GiTeamIdea, FaRegClock],
		toolTip: ['Problem-solving', 'Team-building', 'Time-management'],
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

									return (
										<div key={index} className={styles.skills_item__tooltip}>
											<Icon />
											<p className={styles.skills_item__tooltiptext}>
												{data.toolTip[index]}
											</p>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
