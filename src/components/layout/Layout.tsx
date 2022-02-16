import { ScriptProps } from 'next/script';
import { useCallback, useEffect, useState } from 'react';

import styles from './Layout.module.scss';
import Footer from '../footer/Footer';
import MobileMenu from '../mobile-menu/MobileMenu';
import NavigationBar from '../navigation-bar/NavigationBar';

export function Layout({ children }: ScriptProps): JSX.Element {
	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);

	const hiddenWrapper = useCallback(() => {
		function hideScrolling() {
			if (open === true) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
				document.body.style.overflow = 'scroll';
			}
		}
		hideScrolling();
	}, [open]);

	useEffect(() => {
		hiddenWrapper();
	}, [hiddenWrapper, open]);

	return (
		<div>
			{open && (
				<MobileMenu
					handleClick={handleClick}
					hiddenWrapper={hiddenWrapper}
					open={open}
				/>
			)}
			<div
				className={`${styles.layout_container} ${styles.gradient__background}`}
			>
				{!open && <NavigationBar handleClick={handleClick} />}
				<div>{children}</div>
				<Footer />
			</div>
		</div>
	);
}
