export interface IProjectData {
	id: number;
	title: string;
	image: string;
	description: string;
	liveLink: string;
	githubLink: string;
}

export const projectData: IProjectData[] = [
	{
		id: 1,
		title: 'Project 1',
		image:
			'https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2',
		description:
			'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
		liveLink: 'http://localhost:3000/projectExp',
		githubLink: 'https://github.com/washington-shoji',
	},
	{
		id: 2,
		title: 'Project 2',
		image:
			'https://images.pexels.com/photos/4603464/pexels-photo-4603464.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
		description:
			'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
		liveLink: 'http://localhost:3000/projectExp',
		githubLink: 'https://github.com/washington-shoji',
	},
	{
		id: 3,
		title: 'Project 3',
		image:
			'https://images.pexels.com/photos/5499145/pexels-photo-5499145.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
		description:
			'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
		liveLink: 'http://localhost:3000/projectExp',
		githubLink: 'https://github.com/washington-shoji',
	},
];
