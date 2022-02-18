import React from 'react';
import styles from './SocialButtons.module.scss';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';
import Link from 'next/link';

const links = {
	linkedin: 'https://www.linkedin.com/in/washington-shoji-77171bb5/',
	twitter: 'https://twitter.com/ShojiWashington',
	github: 'https://github.com/washington-shoji',
};

export function SocialButtons() {
	return (
		<div className={styles.container}>
			<span>{`Let's connect`}</span>
			<div className={styles.container_content}>
				<Link href={links.linkedin} passHref>
					<a target='_blank'>
						<SiLinkedin className={styles.icon} />
					</a>
				</Link>
				<Link href={links.twitter} passHref>
					<a target='_blank'>
						<SiTwitter className={styles.icon} />
					</a>
				</Link>
				<Link href={links.github} passHref>
					<a target='_blank'>
						<SiGithub className={styles.icon} />
					</a>
				</Link>
			</div>
		</div>
	);
}
