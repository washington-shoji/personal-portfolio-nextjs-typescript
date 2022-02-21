import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '../src/components/layout/Layout';
import { LayoutExp } from '../src/components/layout_exp/LayoutExp';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<LayoutExp>
			<Component {...pageProps} />
		</LayoutExp>
		// <Layout>
		// 	<Component {...pageProps} />
		// </Layout>
	);
}

export default MyApp;
