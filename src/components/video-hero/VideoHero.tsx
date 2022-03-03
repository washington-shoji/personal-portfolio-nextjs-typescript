import Hero from '../../../pages/hero';
import styles from './VideoHero.module.scss';

export function VideoHero(): JSX.Element {
	return (
		<div id={styles.hide} className={styles.video__wrapper}>
			<video autoPlay loop muted className={styles.main__video}>
				<source
					src='https://cdn.videvo.net/videvo_files/video/free/2016-03/large_watermarked/Hologram_Planet_by_nuva_preview.mp4'
					type='video/mp4'
				/>
			</video>
			<Hero />
		</div>
	);
}
