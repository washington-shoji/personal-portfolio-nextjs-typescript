import React, { useState } from 'react';
import { projectData, projectsData } from '../../resources-data/project-data';
import Card from '../card/Card';
import styles from './Slider.module.scss';
import { IProjectsData } from './../../resources-data/project-data';

export default function Slider({ slides }: { slides: IProjectsData[] }) {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}
	return (
		<div className={styles.container}>
			<div className={styles.slider}>
				<div className={styles.left__arrow} onClick={prevSlide}>
					<span className={styles.border}>{`<`}</span>
				</div>
				<div className={styles.right__arrow} onClick={nextSlide}>
					<span className={styles.border}>{`>`}</span>
				</div>
				{projectsData.map((slide: any, index: number) => {
					return (
						<div
							className={
								index === current
									? `${styles.slide} ${styles.active}`
									: `${styles.slide}`
							}
							key={index}
						>
							{index === current && (
								<div className={styles.slider__content}>
									<Card key={slide.id} data={slide} />
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
