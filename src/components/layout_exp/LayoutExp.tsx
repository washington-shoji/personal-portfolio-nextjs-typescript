import { ScriptProps } from 'next/script';
import React from 'react';
import styles from './LayoutExp.module.scss';

export function LayoutExp({ children }: ScriptProps): JSX.Element {
	return (
		<div className={styles.container}>
			<main className={styles.main}>{children}</main>
		</div>
	);
}
