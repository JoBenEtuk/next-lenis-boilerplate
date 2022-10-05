import '../scss/index.scss'
import type { AppProps } from 'next/app'
import { useCallback, useEffect, useRef } from 'react'
import Head from 'next/head'
import FrontLayout from '@/layout/frontLayout'

function MyApp({ Component, pageProps }: AppProps) {
	const hasInit = useRef<boolean>(false)
	const init = useCallback(async () => {
		// import animations
		const App = (await import('@/animations')).App

		// initialize new animation
		new App({ page: 'home' })

		// update ref
		hasInit.current = true
	}, [])

	useEffect(() => {
		!hasInit.current && init()
	}, [])

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
			<FrontLayout>
				<Component {...pageProps} />
			</FrontLayout>
		</>
	)
}

export default MyApp
