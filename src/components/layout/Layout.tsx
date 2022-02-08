import { ScriptProps } from 'next/script';
import { useState } from 'react';

import styles from '../../../styles/Layout.module.scss';
import Footer from '../footer/Footer';
import MobileMenu from '../mobile-menu/MobileMenu';
import NavigationBar from '../navigation-bar/NavigationBar';

export function Layout({ children }: ScriptProps): JSX.Element {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const open = click;
	return (
		<div
			className={`${styles.layout_container} ${styles.gradient__background}`}
		>
			{open ? (
				<MobileMenu closeMobileMenu={closeMobileMenu} />
			) : (
				<NavigationBar handleClick={handleClick} />
			)}
			<div>{children}</div>
			<Footer />
		</div>
	);
}
