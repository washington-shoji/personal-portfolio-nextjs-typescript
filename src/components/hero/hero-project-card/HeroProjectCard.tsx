import styles from './HeroProjectCard.module.scss';

export interface IHeroProjectCardProps {
	title: string;
	description: string;
	liveLink: string;
}

export default function HeroProjectCard(props: IHeroProjectCardProps) {
	const { title, description, liveLink } = props;
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.content}>
					<p>{title}</p>
					<p>{description}</p>
				</div>
				<div className={styles.buttons}>
					<button className={styles.button__style}>
						<a href={liveLink} target='_blank' rel='noreferrer'>
							Live
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}
