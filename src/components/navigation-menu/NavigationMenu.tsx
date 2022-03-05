import Link from 'next/link';
import styles from './NavigationMenu.module.scss';

export interface INavigationMenuProps {
	title: string;
	internalLink: string;
}

export const navigationMenuData: INavigationMenuProps[] = [
	{
		title: 'home',
		internalLink: '/',
	},
	{
		title: 'experience',
		internalLink: '/experience',
	},
	{
		title: 'projects',
		internalLink: '/project',
	},
];

export function NavigationMenu(): JSX.Element {
	return (
		<div className={styles.container}>
			{
				<nav className={styles.navigation}>
					{navigationMenuData.map(
						(menu: INavigationMenuProps, index: number) => {
							const { title, internalLink } = menu;
							return (
								<Link key={index} href={internalLink}>
									<a className={styles.link}>{title}</a>
								</Link>
							);
						}
					)}
				</nav>
			}
		</div>
	);
}
