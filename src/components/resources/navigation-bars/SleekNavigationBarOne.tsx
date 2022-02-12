import styles from './SleekNavigationBarOne.module.scss';

interface INavigationMenuLinks {
	id: number;
	title: string;
	link: string;
}

const navigationMenuLinks: INavigationMenuLinks[] = [
	{
		id: 1,
		title: 'home',
		link: '#',
	},
	{
		id: 2,
		title: 'services',
		link: '#',
	},
	{
		id: 3,
		title: 'blog',
		link: '#',
	},
	{
		id: 4,
		title: 'resources',
		link: '#',
	},
	{
		id: 5,
		title: 'about',
		link: '#',
	},
];

export function SleekNavigationBarOne(): JSX.Element {
	return (
		<div className={styles.wrapper}>
			<div className={styles.navigation__bar}>
				<nav className={styles.navigation__bar__menu}>
					{navigationMenuLinks.map((item: INavigationMenuLinks) => {
						return (
							<a href={item.link} key={item.id}>
								{item.title}
							</a>
						);
					})}
				</nav>
			</div>
		</div>
	);
}
