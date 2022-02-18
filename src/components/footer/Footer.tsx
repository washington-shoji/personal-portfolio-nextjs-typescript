import Link from 'next/link';
import { FaSignature } from 'react-icons/fa';
import { navData } from '../navigation-bar/NavigationBar';
import styles from './Footer.module.scss';

export default function Footer(): JSX.Element {
	return (
		<footer className={styles.container}>
			<div>
				<nav className={styles.footer_nav}>
					<div className={styles.footer_brand}>
						<div className={styles.footer_logo}>
							<Link href='/' passHref>
								<FaSignature />
							</Link>
						</div>
					</div>
					{navData.map((item) => {
						return (
							<Link key={item.title} href={`${item.link}`}>
								<a className={styles.footer__link}>{item.title}</a>
							</Link>
						);
					})}
					<div className={styles.animation}></div>
				</nav>
			</div>

			<div className={styles.footer_copyright}>
				<p>©2022 Washington Shoji. All rights reserved.</p>
			</div>
		</footer>
	);
}
