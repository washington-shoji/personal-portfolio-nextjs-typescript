import Link from 'next/link';
import styles from '../../../styles/NavigationBar.module.scss';

import {FaSignature} from 'react-icons/fa';

const navData = [
	{title: 'home', link: '/'},
	{title: 'skills', link: '/'},
	{title: 'projects', link: '/'},
	{title: 'experience', link: '/'},
	{title: 'about', link: '/'},
];

export default function NavigationBar(): JSX.Element {
	return (
		<div className={styles.navbar_container}>
			<div className={styles.navbar_logo}>{<FaSignature />}</div>
			<nav>
				<ul>
					{navData.map((item) => {
						return (
							<li key={item.title}>
								<Link href={`${item.link}`}>
									<a>{item.title}</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
}
