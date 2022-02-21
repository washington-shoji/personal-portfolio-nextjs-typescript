import Link from 'next/link';
import React from 'react';
import Button from '../../src/components/button-exp/Button';
import styles from './Hero.module.scss';

export default function Hero(): JSX.Element {
	return (
		<div className={styles.container}>
			<div className={styles.hero}>
				<p>{`Hi I'm`}</p>
				<h1>WASHINGTON</h1>
				<div className={styles.animated__text}>
					<p>{`A passionate`}</p>
					<div className={styles.text__wrapper}>
						<div className={styles.inner__animated__text}>
							full-stack
							<br />
							web developer
							<br />
							solving problems
							<br />
							with tech.
						</div>
					</div>
				</div>
				<div className={styles.button}>
					<Button internalLink={'/skillExp'} title={'Go to my skills'} />
				</div>
			</div>
		</div>
	);
}
