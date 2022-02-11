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
		<>
			{open && <MobileMenu closeMobileMenu={closeMobileMenu} />}
			<div
				className={`${styles.layout_container} ${styles.gradient__background}`}
			>
				{!open && <NavigationBar handleClick={handleClick} />}
				<div>{children}</div>
				<Footer />
			</div>
		</>
	);
}
