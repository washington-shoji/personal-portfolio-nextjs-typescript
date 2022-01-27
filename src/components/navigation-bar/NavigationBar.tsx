import Link from 'next/link';
import styles from '../../../styles/NavigationBar.module.scss';

import {FaSignature} from 'react-icons/fa';

const navData = [
	{title: 'home', link: '/'},
	{title: 'skills', link: '/'},
	{title: 'projects', link: '/'},
	{title: 'experience', link: '/'},
	{title: 'resources', link: '/'},
];

export default function NavigationBar(): JSX.Element {
	return (
		<div className={styles.navbar_container}>
			<div className={styles.navbar_logo}>{<FaSignature />}</div>
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
