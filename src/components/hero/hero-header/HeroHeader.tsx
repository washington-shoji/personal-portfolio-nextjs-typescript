import { HeroMouseScroll } from '../hero-mouse-scroll/HeroMouseScroll';
import styles from './HeroHeader.module.scss';

export function HeroHeader(): JSX.Element {
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>
				Washington<span>_</span>
			</h1>
			<p>A passionate full-stack web developer</p>
			<HeroMouseScroll />
		</div>
	);
}
