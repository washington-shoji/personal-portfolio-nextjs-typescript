import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IProjectsData } from '../../resources-data/project-data';
import styles from './SliderPersonalProject.module.scss';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import Button from '../button/Button';

export default function SliderPersonalProject({
	slides,
}: {
	slides: IProjectsData[];
}) {
	const [slide, setSlide] = useState(slides);
	const [index, setIndex] = React.useState(0);

	useEffect(() => {
		const lastIndex = slide.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, slide]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);
	return (
		<section className={styles.section}>
			<div className={styles.section__center}>
				{slide.map((item, itemIndex) => {
					const {
						id,
						image,
						imageAlt,
						title,
						description,
						demoLink,
						githubLink,
					} = item;

					let position = styles['nextSlide'];
					if (itemIndex === index) {
						position = styles['activeSlide'];
					}
					if (
						itemIndex === index - 1 ||
						(index === 0 && itemIndex === slide.length - 1)
					) {
						position = styles['lastSlide'];
					}

					return (
						<article className={position} key={id}>
							<Image
								src={image.src}
								alt={imageAlt}
								width={250}
								height={250}
								className={styles.img}
							/>
							<div className={styles.content}>
								<h4>{title}</h4>
								<p className={styles.title}>{description}</p>
								<div className={styles.content__button}>
									<Button title='Live' externalLink={demoLink} />
									{demoLink && (
										<Button title='GitHub' externalLink={githubLink} />
									)}
								</div>
							</div>
						</article>
					);
				})}
				<button className={styles.prev} onClick={() => setIndex(index - 1)}>
					<FaChevronCircleLeft />
				</button>
				<button className={styles.next} onClick={() => setIndex(index + 1)}>
					<FaChevronCircleRight />
				</button>
			</div>
		</section>
	);
}
