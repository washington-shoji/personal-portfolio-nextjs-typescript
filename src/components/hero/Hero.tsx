import Image from 'next/image';

import styles from '../../../styles/Hero.module.scss';
import heroImage from '../../../public/assets/images/bg_1.png';
export function Hero(): JSX.Element {
	return (
		<section id='hero' className={styles.hero_container}>
			<div className={styles.hero_header}>
				<h1>
					I am <span>Washington</span>
				</h1>
				<p>
					I am a passionate, full-stack web developer who strives to help people
					solve their problems with my technical skills.
				</p>
			</div>
			<div className={styles.hero_image__wrapper}>
				<Image
					className={styles.hero_image}
					src={heroImage}
					alt=''
					width={450}
					height={450}
				/>
			</div>
		</section>
	);
}
