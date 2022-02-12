export interface IResourcesPost {
	id: number;
	slug: string;
	title: string;
	text: string;
	component: string;
	link: string;
}

export const resourcePosts: IResourcesPost[] = [
	{
		id: 1,
		slug: 'sleek-navbar-1',
		title: 'Sleek navigation bar',
		text: `It's a sleek CSS/Sass navigation bar that can be used as React.js or Next.js component.`,
		component: 'SleekNavigationBarOne',
		link: 'https://github.com/washington-shoji/personal-portfolio-nextjs-typescript/tree/main/src/components/resources/navigation-bars',
	},
	{
		id: 2,
		slug: 'simple-navbar-1',
		title: 'Simple navigation bar',
		text: `It's a simple to implement CSS/Sass navigation bar that can be used as React.js or Next.js component.`,
		component: 'SimpleNavigationBarOne',
		link: 'https://github.com/washington-shoji/personal-portfolio-nextjs-typescript/tree/main/src/components/resources/navigation-bars',
	},
];
