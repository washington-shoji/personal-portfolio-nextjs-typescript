import React from 'react';
import styles from './Hero.module.scss';

export default function Hero(): JSX.Element {
	return (
		<div className={styles.container}>
			<div className={styles.hero}>
				<h1>Washington</h1>
			</div>
		</div>
	);
}
