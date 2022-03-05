import React from 'react';
import styles from './Hero.module.scss';

import HeroVerticalSwiper from '../../src/components/hero/hero-vertical-swiper/HeroVerticalSwiper';
import { NavigationMenu } from '../../src/components/navigation-menu/NavigationMenu';

export default function Hero(): JSX.Element {
	return (
		<div className={styles.container}>
			<NavigationMenu />
			<HeroVerticalSwiper />
		</div>
	);
}
