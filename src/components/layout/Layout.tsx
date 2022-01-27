import {ScriptProps} from 'next/script';

import styles from '../../../styles/Layout.module.scss';
import Footer from '../footer/Footer';
import NavigationBar from '../navigation-bar/NavigationBar';

export function Layout({children}: ScriptProps): JSX.Element {
	return (
		<div
			className={`${styles.layout_container} ${styles.gradient__background}`}
		>
			<NavigationBar />
			<div>{children}</div>
			<Footer />
		</div>
	);
}
