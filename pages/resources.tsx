import { NextPage } from 'next';
import React, { useState } from 'react';
import styles from '../styles/Resources.module.scss';
import bgImage from '../public/assets/images/bg_construction_2.jpg';
import Image from 'next/image';
import ResourceCard from '../src/components/resources/ResourceCard';

const resourceCardContent = [
	{
		title: 'Title 1',
	},
	{
		title: 'Title  2',
	},
	{
		title: 'Title 3',
	},
	{
		title: 'Title  4',
	},
	{
		title: 'Title 5',
	},
	{
		title: 'Title 6',
	},
];

export default function Resources<NextPage>(): JSX.Element {
	return (
		<div className={styles.container}>
			{/* <Image src={bgImage} alt='' /> */}
			<div className={styles.header}>
				<h1>Resources</h1>
				<p>This is a repo of resources dedicated to the lovely community.</p>
				<p>{`I hope it's useful for you.`}</p>
			</div>
			<div className={styles.body}>
				{resourceCardContent.map((content) => {
					return <ResourceCard key={content.title} {...content} />;
				})}
			</div>
		</div>
	);
}
