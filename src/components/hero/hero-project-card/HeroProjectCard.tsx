import { useMediaQuery } from '../../../utils/hooks/usemediaquery';
import styles from './HeroProjectCard.module.scss';

export interface IHeroProjectCardProps {
	liveLink: string;
	desktopImage: string;
	tabletImage: string;
	mobileImage: string;
}

export default function HeroProjectCard(props: IHeroProjectCardProps) {
	const isTable = useMediaQuery('(max-width: 900px)');
	const isMobile = useMediaQuery('(max-width: 600px)');

	const { liveLink, desktopImage, tabletImage, mobileImage } = props;
	return (
		<div className={styles.container}>
			<div
				className={styles.card}
				style={{
					backgroundImage: isMobile
						? `url(${mobileImage})`
						: isTable
						? `url(${tabletImage})`
						: `url(${desktopImage})`,
					backgroundPosition: 'top',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className={styles.content}>
					{/* <p>{title}</p>
					<p>{description}</p> */}
				</div>
				<div className={styles.buttons}>
					<button className={styles.button__style}>
						<a href={liveLink} target='_blank' rel='noreferrer'>
							View Live
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}
