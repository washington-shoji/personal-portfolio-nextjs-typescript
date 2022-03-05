import styles from './HeroSlider.module.scss';
import { HeroHorizontalSwiper } from '../hero-horizotal-swiper/HeroHorizontalSwiper';

export default function HeroSlider() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h3 className={styles.text}>My latest</h3>
			</div>
			<HeroHorizontalSwiper />
		</div>
	);
}
