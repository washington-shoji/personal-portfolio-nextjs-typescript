import { ScriptProps } from 'next/script';
import React from 'react';
import styles from './Layout.module.scss';

export function Layout({ children }: ScriptProps): JSX.Element {
	return (
		<div className={styles.container}>
			<main className={styles.main}>{children}</main>
		</div>
	);
}
