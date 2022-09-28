import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import gsap from 'gsap'

import S from './Panel.module.scss'

const Panel = () => {
	const router = useRouter()

	const startAnimation = () => {
		gsap.fromTo(
			"[data-animation='panel']",
			{
				y: '100%',
			},
			{
				y: 0,
				duration: 1.5,
				ease: 'expo.inOut',
			}
		)
	}

	const endAnimation = () => {
		gsap.to("[data-animation='panel']", {
			y: '-100%',
			delay: 0.5,
			duration: 1.5,
			ease: 'expo.inOut',
		})
	}

	useEffect(() => {
		router.events.on('routeChangeStart', startAnimation)
		router.events.on('routeChangeComplete', endAnimation)
		router.events.on('routeChangeError', endAnimation)

		return () => {
			router.events.off('routeChangeStart', startAnimation)
			router.events.off('routeChangeComplete', endAnimation)
			router.events.off('routeChangeError', endAnimation)
		}
	}, [router])

	return <div className={S.panel} data-animation='panel'></div>
}

export default Panel
