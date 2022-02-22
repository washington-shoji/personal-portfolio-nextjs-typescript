import Link from 'next/link';
import React from 'react';
import styles from './Button.module.scss';

interface IButton {
	internalLink?: string;
	externalLink?: string;
	title: string;
}

export default function Button({ internalLink, title, externalLink }: IButton) {
	return (
		<>
			{/* <div className={styles.button__wrapper}>
				<Link href={link}>
					<a className={styles.button}>{title}</a>
				</Link>
			</div> */}
			<div className={`${styles.button_exp} ${styles.relative}`}>
				{internalLink !== undefined ? (
					<Link href={`${internalLink}`} passHref>
						<div className={styles.element}>
							<p>{title}</p>
						</div>
					</Link>
				) : (
					<a href={`${externalLink}`} target='_blank' rel='noreferrer'>
						<div className={styles.element}>
							<p>{title}</p>
						</div>
					</a>
				)}
			</div>
		</>
	);
}
