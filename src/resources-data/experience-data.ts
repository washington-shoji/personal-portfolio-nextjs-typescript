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
		date: 'Oct 2020 - Dec 2021',
		description: `The Professional Development Forum (PDF) is a local not-for-profit organisation that helps young professionals prepare for their careers. 
		
		Achievements:
		- Improved their content distribution and management by up to 80% through the development of an app and website with React.js/Next.js CSS/SASS and TypeScript.

		- Integrated: 
		• automated workflow features to the app/website, automating content distribution.
		• Third-party APIs (Eventbrite, YouTube, Donorbox, Auth0, Mailchimp, and Whooshkaa) to the workflow.
		• Fully optimised the website for SEO.
		• Created a full-stack content management API and dashboard analytics with Node.js, Express, MongoDB.
		`,
	},
	{
		id: 2,
		title: 'Web Developer',
		workplace: 'Shani Raja',
		link: 'https://shaniraja.com',
		date: 'July 2019 - Oct 2020',
		description: `Shani Raja is a former Wall Street Journal editor and currently an online writing instructor with over half a million students. 
		
		Achievements: 
		- Increased content and marketing productivity by up to 80%. Creating an automated workflow system that integrated third-party vendors' APIs, such as Kajabi, Teachable, Udemy and Mailchimp, that boosted sales conversion.`,
	},
	{
		id: 3,
		title: 'Business/Data Analyst',
		workplace: 'NSW Department of Education',
		date: 'Feb 2015 - Dec 2018',
		description: `The NSW Department of Education oversees and manage over 2,200 public schools and education programs in the state. 
		
		Achievements: 
		- Proactively built data visualisation tools that improved the management of NSW school budgets and expenses down to a granular level across school administration staff. 
		- These tools were embedded in daily business process and enabled staff to view data in real-time, to make quicker and informed decisions or resource allocation.`,
	},
];
