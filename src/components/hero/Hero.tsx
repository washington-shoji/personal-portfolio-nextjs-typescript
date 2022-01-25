import Image from 'next/image';

import styles from '../../../styles/Hero.module.scss';
import heroImage from '../../../public/assets/images/bg_1.png';
export function Hero(): JSX.Element {
	return (
		<section className={styles.hero_container}>
			<div className={styles.hero_header}>
				<h1>
					I am <span>Washington</span>
				</h1>
				<p>
					A passionate self-taught full-stack web and mobile developer who
					strives to help solve problems with my technical skills.
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
