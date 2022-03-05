import React from 'react';
import styles from './HeroMouseScroll.module.scss';

export function HeroMouseScroll() {
	return (
		<div className={styles.mouse_scroll}>
			<div className={styles.mouse}>
				<div className={styles.wheel}></div>
			</div>
			<div>
				<span className={`${styles.m_scroll_arrows} ${styles.one}`}></span>
				<span className={`${styles.m_scroll_arrows} ${styles.two}`}></span>
				<span className={`${styles.m_scroll_arrows} ${styles.three}`}></span>
			</div>
		</div>
	);
}
