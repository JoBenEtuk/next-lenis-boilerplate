import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/future/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Preloader from '../preloader'
import Panel from '../panel'

import S from './Layout.module.scss'

const FrontLayout = ({ children }: any) => {
	type ILinks = { href: string; name: string }
	const router = useRouter()

	// Preloader state
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.onunload = function () {
				sessionStorage.removeItem('preloader')
			}
		}
		const timeout = setTimeout(() => {
			sessionStorage.setItem('preloader', 'true')
		}, 1000)
		return () => {
			clearTimeout(timeout)
		}
	}, [])

	const [preload, setPreload] = useState<string | null>(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setPreload(sessionStorage.getItem('preloader'))
		}
	}, [])

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
	return (
		<Fragment>
			{!preload && <Preloader />}
			<Panel />
			<main className={S.layout} data-main>
				<header className={S.layout__header}>
					<div className={S.layout__header__left}>
						<ul>
							{links.map((link) => (
								<li key={link.href}>
									<Link href={link.href}>
										<a>{link.name}</a>
									</Link>
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
