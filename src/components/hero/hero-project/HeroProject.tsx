import styles from './HeroProject.module.scss';

import HeroSlider from '../hero-slider/HeroSlider';

export function HeroProject() {
	return (
		<div className={styles.container}>
			<HeroSlider />
		</div>
	);
}
