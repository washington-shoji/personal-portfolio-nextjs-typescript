import Link from 'next/link';
import React, { ComponentType } from 'react';
import styles from './Resource.module.scss';
import { SimpleNavigationBarOne } from '../../src/components/resources/navigation-bars/SimpleNavigationBarOne';
import {
	IResourcesPost,
	resourcePosts,
} from '../../src/resources-data/resources-data';
import { SleekNavigationBarOne } from '../../src/components/resources/navigation-bars/SleekNavigationBarOne';

export async function getStaticPaths() {
	const posts: IResourcesPost[] = resourcePosts;

	const paths = posts.map((post: IResourcesPost) => ({
		params: { slug: post.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: any) {
	const { slug } = params;

	const post = resourcePosts.find(
		(resource: IResourcesPost) => resource.slug === slug
	);

	return {
		props: { post },
	};
}

export default function Resource({ post }: any) {
	return (
		<main className={styles.container}>
			<article className={styles.resource__body}>
				<h1>{post.title}</h1>
				<div className={styles.resource__content}>
					{(() => {
						switch (post.component) {
							case 'SleekNavigationBarOne':
								return <SleekNavigationBarOne />;

							case 'SimpleNavigationBarOne':
								return <SimpleNavigationBarOne />;
							default:
								return null;
						}
					})()}
				</div>
			</article>

			<Link href='/resources'>
				<a className={styles.resource__link}>Back</a>
			</Link>
		</main>
	);
}
