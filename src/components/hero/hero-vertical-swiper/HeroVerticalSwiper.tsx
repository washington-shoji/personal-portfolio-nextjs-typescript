import styles from './HeroVerticalSwiper.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper';
import { HeroHeader } from '../hero-header/HeroHeader';
import { HeroSkill } from '../hero-skill/HeroSkill';
import { HeroProject } from '../hero-project/HeroProject';

export default function HeroVerticalSwiper() {
	return (
		<Swiper
			direction={'vertical'}
			slidesPerView={1}
			spaceBetween={30}
			mousewheel={true}
			pagination={{
				clickable: true,
			}}
			modules={[Mousewheel, Pagination]}
			speed={2500}
			className={styles.mySwiper}
		>
			<SwiperSlide className={styles.swiper}>
				<HeroHeader />
			</SwiperSlide>
			<SwiperSlide className={styles.swiper}>
				<HeroSkill />
			</SwiperSlide>
			<SwiperSlide className={styles.swiper}>
				<HeroProject />
			</SwiperSlide>
		</Swiper>
	);
}
