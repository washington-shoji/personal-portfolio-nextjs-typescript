export interface IResourcesPost {
	Id: number;
	Slug: string;
	Title: string;
	Text: string;
	component: string;
}

export const resourcePosts: IResourcesPost[] = [
	{
		Id: 1,
		Slug: 'sleek-navbar-1',
		Title: 'Sleek navigation bar',
		Text: `It's a sleek CSS/Sass navigation bar that can be used as React.js or Next.js component.`,
		component: 'SleekNavigationBarOne',
	},
	{
		Id: 2,
		Slug: 'simple-navbar-1',
		Title: 'Simple navigation bar',
		Text: `It's a simple to implement CSS/Sass navigation bar that can be used as React.js or Next.js component.`,
		component: 'SimpleNavigationBarOne',
	},
];
