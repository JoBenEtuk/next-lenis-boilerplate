import React, { Fragment, useCallback, useEffect, useRef } from 'react'
import Link from 'next/link'

import S from './Layout.module.scss'

const FrontLayout = ({ children, page }: { children: any; page: string }) => {
	type ILinks = { href: string; name: string }

	const links: ILinks[] = [
		{
			href: '/',
			name: 'Home',
		},
		{
			href: '/about',
			name: 'About',
		},
		{
			href: '/careers',
			name: 'Careers',
		},
		{
			href: '/contact',
			name: 'Contact',
		},
	]

	const hasInit = useRef<boolean>(false)

	const init = useCallback(async () => {
		const App = (await import('@/animations')).App
		new App({ page: 'home' })
	}, [])

	useEffect(() => {
		!hasInit.current && init()
		return () => {
			hasInit.current = true
		}
	}, [init])

	return (
		<Fragment>
			<main className={S.layout} data-main>
				<header className={S.layout__header}>
					<div className={S.layout__header__left}>
						<ul>
							{links.map((link) => (
								<li key={link.href}>
									<Link href={link.href}>{link.name}</Link>
								</li>
							))}
						</ul>
					</div>
				</header>

				<section className={S.layout__child}>{children}</section>
			</main>
		</Fragment>
	)
}

export default FrontLayout
