import Hero from '../../../pages/hero';
import styles from './VideoHero.module.scss';

export function VideoHero(): JSX.Element {
	return (
		<div id={styles.hide} className={styles.video__wrapper}>
			<video autoPlay loop muted className={styles.main__video}>
				<source src='/vid_1.webm' type='video/mp4' />
			</video>
			<Hero />
		</div>
	);
}
