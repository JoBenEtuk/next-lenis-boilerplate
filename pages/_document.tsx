import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<meta name='application-name' content='next-lenis' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-status-bar-style' content='default' />
				<meta name='apple-mobile-web-app-title' content='next-lenis' />
				<meta name='description' content='We put the Glamour in Events' />
				<meta name='format-detection' content='telephone=no' />
				<meta name='mobile-web-app-capable' content='yes' />
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:url' content='https://next-lenis.sunbeam.studio' />
				<meta name='twitter:title' content='next-lenis' />
				<meta name='twitter:description' content='We put the Glamour in Events' />
				<meta
					name='twitter:image'
					content='https://next-lenis.sunbeam.studio/svg/icon.svg'
				/>
				<meta name='twitter:creator' content='@JoBenEtuk' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='next-lenis' />
				<meta property='og:description' content='We put the Glamour in Events' />
				<meta property='og:site_name' content='next-lenis' />
				<meta property='og:url' content='https://next-lenis.sunbeam.studio' />
				<meta
					property='og:image'
					content='https://next-lenis.sunbeam.studio/svg/icon.svg'
				/>

				<link rel='manifest' href='/manifest.json' />
				<link href='/icon.svg' rel='icon' type='image/svg' sizes='16x16' />
				<link rel='apple-touch-icon' href='/svg/icon.svg'></link>
				<meta name='theme-color' content='#8B436C' />

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
				<link
					href='https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;500;600;700&family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
