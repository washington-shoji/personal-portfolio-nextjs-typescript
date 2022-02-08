import React, { useState } from 'react';
import styles from '../../../styles/MobileMenu.module.scss';
import { FaSignature, FaTimesCircle } from 'react-icons/fa';
import Link from 'next/link';

const navData = [
	{ title: 'home', link: '/' },
	{ title: 'skills', link: '#skill' },
	{ title: 'projects', link: '#projects' },
	{ title: 'experience', link: '#experience' },
	{ title: 'resources', link: '/resources' },
];

export default function MobileMenu(props: any) {
	// const [click, setClick] = useState(false);
	// const handleClick = () => setClick(!click);
	// const closeMobileMenu = () => setClick(false);

	return (
		<aside className={styles.mobile__menu}>
			<div className={styles.mobile__menu__header}>
				<div className={styles.navbar_logo}>{<FaSignature />}</div>
				<div
					className={styles.mobile__menu__close}
					onClick={props.closeMobileMenu}
				>
					{<FaTimesCircle />}
				</div>
			</div>

			<nav>
				{navData.map((item) => {
					return (
						<Link key={item.title} href={`${item.link}`}>
							<a onClick={props.closeMobileMenu}>{item.title}</a>
						</Link>
					);
				})}
				<div className={styles.animation}></div>
			</nav>
		</aside>
	);
}
