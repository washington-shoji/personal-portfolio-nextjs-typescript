export interface IExperienceData {
	id: number;
	title: string;
	workplace: string;
	link?: string;
	date: string;
	description: string;
}

export const experienceData: IExperienceData[] = [
	{
		id: 1,
		title: 'Web Developer',
		workplace: 'Professional Development Forum',
		link: 'https://professionaldevelopmentforum.org',
		date: 'Oct 2020 - Present',
		description: `The Professional Development Forum (PDF) is a local not-for-profit 
		organisation that aims to help young professionals prepare for the 
		workplace and their career development. I built and maintain their React.js/Next.js web app, integrating various API's (e.g. YouTube, Whooska podcast, Eventbrite, etc.) to automate their 
		content propagation on the website.`,
	},
	{
		id: 2,
		title: 'Web Developer',
		workplace: 'Shani Raja',
		link: 'https://shaniraja.com',
		date: 'July 2019 - Oct 2020',
		description: `Shani Raja is a former Wall Street Journal editor and currently an online 
		writing instructor, who needed a website to promote his online courses. I 
		built Shani's website using HTML, CSS and, APIs integration adding features 
		to link and share his promotional material and other resources.`,
	},
	{
		id: 3,
		title: 'Business/Data Analyst',
		workplace: 'NSW Department of Education',
		date: 'Feb 2015 - Dec 2018',
		description: `The NSW Department of Education is responsible for governing over 2,200 
		public schools and education programs in the state. My role here was to 
		conduct analyses of internal data sources, to determine how to best allocate 
		available resources to have maximum impact on the schools. I proactively built data visualisation tools that aided all NSW school administration staff to better manage their budgets/expenses. These tools allow users to view data in real-time, which enables them to make informed decisions on resource allocation.`,
	},
];
