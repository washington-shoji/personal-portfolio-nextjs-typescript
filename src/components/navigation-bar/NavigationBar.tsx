import Link from 'next/link';
import styles from '../../../styles/NavigationBar.module.scss';

import { FaSignature, FaBars } from 'react-icons/fa';

const navData = [
	{ title: 'home', link: '/' },
	{ title: 'skills', link: '#skill' },
	{ title: 'projects', link: '#projects' },
	{ title: 'experience', link: '#experience' },
	{ title: 'resources', link: '/resources' },
];

export default function NavigationBar(props: any): JSX.Element {
	return (
		<div className={styles.navbar_container}>
			<div className={styles.navbar_logo}>{<FaSignature />}</div>
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
