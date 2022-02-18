import Link from 'next/link';
import styles from './NavigationBar.module.scss';

import { FaSignature, FaBars } from 'react-icons/fa';

export const navData = [
	{ title: 'home', link: '/' },
	{ title: 'skills', link: '/skills' },
	{ title: 'projects', link: '/projects' },
	{ title: 'experience', link: '/experiences' },
	{ title: 'resources', link: '/resources' },
];

export default function NavigationBar(props: any): JSX.Element {
	return (
		<div className={styles.navbar_container}>
			<div className={styles.navbar_logo}>
				<Link href='/' passHref>
					<FaSignature />
				</Link>
			</div>
			<div className={styles.navbar_menu_icon} onClick={props.handleClick}>
				{<FaBars />}
			</div>
			<nav>
				{navData.map((item) => {
					return (
						<Link key={item.title} href={`${item.link}`}>
							<a>{item.title}</a>
						</Link>
					);
				})}
				<div className={styles.animation}></div>
			</nav>
		</div>
	);
}
