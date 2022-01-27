import {FaSignature} from 'react-icons/fa';
import styles from '../../../styles/Footer.module.scss';

export default function Footer(): JSX.Element {
	return (
		<footer className={styles.container}>
			<div className={styles.footer_brand}>
				<div className={styles.footer_logo}>{<FaSignature />}</div>
				<p>ashington Shoji</p>
			</div>
			<div className={styles.footer_links}>
				<h4>Links</h4>
				<p>Home</p>
				<p>Skills</p>
				<p>Projects</p>
				<p>Experience</p>
				<p>Resources</p>
			</div>
			<div className={styles.footer_links}>
				<h4>Links</h4>
				<p>Home</p>
				<p>Skills</p>
				<p>Projects</p>
				<p>Experience</p>
				<p>Resources</p>
			</div>

			<div className={styles.footer_copyright}>
				<p>©2022 Washington Shoji. All rights reserved.</p>
			</div>
		</footer>
	);
}
