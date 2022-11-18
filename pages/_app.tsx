import '../scss/index.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Preloader from '@/layout/preloader'
import Transition from '@/layout/Transition'
import { TransitionProvider } from '@/layout/Transition/TransitionContext'
import TransitionLayout from '@/layout/Transition/TransitionLayout'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=6,user-scalable=yes'
				/>
				<meta name='description' content='Description' />
				<meta name='keywords' content='Keywords' />
				<title>Next JS Lenis Starter</title>
			</Head>
			<>
				<TransitionProvider>
					<TransitionLayout>
						<Preloader />
						<Transition />
						<Component {...pageProps} />
					</TransitionLayout>
				</TransitionProvider>
			</>
		</>
	)
}

export default MyApp
