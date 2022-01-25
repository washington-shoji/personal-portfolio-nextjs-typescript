import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import {Layout} from '../src/components/layout/Layout';

function MyApp({Component, pageProps}: AppProps): JSX.Element {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
