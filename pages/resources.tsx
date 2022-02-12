import { NextPage } from 'next';
import React from 'react';
import styles from '../styles/Resources.module.scss';

import ResourceCard from '../src/components/resources/ResourceCard';
import {
	IResourcesPost,
	resourcePosts,
} from '../src/resources-data/resources-data';

export async function getStaticProps() {
	const posts: IResourcesPost[] = resourcePosts;

	return {
		props: { posts },
	};
}

const Resources: NextPage = ({ posts }: any) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>Resources</h1>
				<p>This is a repo of resources dedicated to the lovely community.</p>
				<p>{`I hope it's useful for you.`}</p>
			</div>
			<div className={styles.body}>
				{posts.map((content: IResourcesPost) => {
					return <ResourceCard key={content.title} {...content} />;
				})}
			</div>
		</div>
	);
};

export default Resources;
