import React, { useEffect, useState } from 'react';
import styles from './MobileMenu.module.scss';
import { FaSignature, FaTimesCircle } from 'react-icons/fa';
import Link from 'next/link';

const navData = [
	{ title: 'home', link: '/' },
	{ title: 'skills', link: '#skill' },
	{ title: 'projects', link: '#projects' },
	{ title: 'experience', link: '#experience' },
	{ title: 'resources', link: '/resources' },
];

export default function MobileMenu({ open, handleClick, hiddenWrapper }: any) {
	useEffect(() => {
		hiddenWrapper();
	}, [open, hiddenWrapper]);

	return (
		<aside className={styles.mobile__menu}>
			<div className={styles.mobile__menu__header}>
				<div className={styles.navbar_logo}>{<FaSignature />}</div>
				<div className={styles.mobile__menu__close} onClick={handleClick}>
					{<FaTimesCircle />}
				</div>
			</div>

			<nav>
				{navData.map((item) => {
					return (
						<Link key={item.title} href={`${item.link}`}>
							<a onClick={handleClick}>{item.title}</a>
						</Link>
					);
				})}
				<div className={styles.animation}></div>
			</nav>
		</aside>
	);
}
