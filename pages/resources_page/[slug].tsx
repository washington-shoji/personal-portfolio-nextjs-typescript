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

	const paths = posts.map((post: any) => ({
		params: { slug: post.Slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: any) {
	const { slug } = params;

	const post = resourcePosts.find((p) => p.Slug === slug);

	return {
		props: { post },
	};
}

const Components = [SimpleNavigationBarOne, SleekNavigationBarOne];

export default function Resource({ post }: any) {
	const Component = Components.find(
		(Component) => Component.name === post.component
	) as ComponentType<any>;

	return (
		<main className={styles.resource}>
			<article className={styles.resource__body}>
				<h1>{post.Title}</h1>
				<div className={styles.resource__content}>
					<Component />
				</div>
			</article>

			<Link href='/resources'>
				<a className={styles.resource__link}>Back</a>
			</Link>
		</main>
	);
}
