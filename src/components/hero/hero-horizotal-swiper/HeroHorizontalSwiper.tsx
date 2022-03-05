import styles from './HeroHorizontalSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import HeroProjectCard from '../hero-project-card/HeroProjectCard';
import { projectData } from '../../../resources-data/project-data';

export function HeroHorizontalSwiper() {
	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={30}
			autoplay={{
				delay: 3500,
				disableOnInteraction: false,
			}}
			speed={1500}
			pagination={{
				clickable: true,
			}}
			modules={[Autoplay, Pagination, Navigation]}
			className={styles.myHorizontalSwiper}
			navigation
		>
			{projectData.map((project) => {
				return (
					<SwiperSlide key={project.id} className={styles.swiper}>
						<HeroProjectCard {...project} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}
