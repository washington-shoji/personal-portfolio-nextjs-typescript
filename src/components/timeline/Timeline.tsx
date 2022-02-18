import { IExperience } from '../experience/Experience';
import styles from './Timeline.module.scss';

export function TimeLine({ data }: { data: IExperience[] }): JSX.Element {
	return (
		<div className={styles.container}>
			<div className={styles.timeline}>
				<ul>
					{data.map((item: IExperience) => {
						return (
							<li key={item.id}>
								<div className={styles.timeline__content}>
									<p className={styles.date}>{item.time}</p>
									<h1>{item.title}</h1>
									<p>{item.text}</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
