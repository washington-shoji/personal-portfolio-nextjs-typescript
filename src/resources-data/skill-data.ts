export interface ISkill {
	id: number;
	stack: string;
	skill: string[];
}

export const skillData: ISkill[] = [
	{
		id: 1,
		stack: 'Languages',
		skill: ['JavaScrip', 'TypeScript'],
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
		stack: 'Utilities',
		skill: ['Git', 'GitHub', 'Postman', 'Auth0', 'Stripe'],
	},

	{
		id: 5,
		stack: 'Soft-skill',
		skill: ['Problem-solving', 'Team-building', 'Time-management'],
	},
];
