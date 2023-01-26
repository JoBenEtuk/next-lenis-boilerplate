/* eslint-disable quotes */
import { Fragment, useRef, useState } from 'react'
import S from './Transition.module.scss'
import gsap from 'gsap'
import { useIsomorphicLayoutEffect } from '@/hooks'

export default function Transition({ Component, pageProps }: any) {
	const next = useRef<any>()

	const [DisplayChildren, setDisplayChildren] = useState(Component)

	const [timeline, setTimeline] = useState(() => gsap.timeline({ paused: true }))

	useIsomorphicLayoutEffect(() => {
		setTimeline(
			gsap
				.timeline({ paused: true })
				.fromTo(
					"[data-animation='transition']",
					{
						y: '100%',
					},
					{
						y: 0,
						duration: 1.5,
						ease: 'expo.inOut',
					}
				)
				.to("[data-animation='transition']", {
					y: '-100%',
					delay: 0.5,
					duration: 1.5,
					ease: 'expo.inOut',
				})
		)
	}, [])

	useIsomorphicLayoutEffect(() => {
		timeline.restart()
		const timeout = setTimeout(() => {
			next.current.animateIn()
			window.scrollTo(0, 0)
			setDisplayChildren(Component)
		}, 1500)

		return () => clearTimeout(timeout)
	}, [Component])

	return (
		<Fragment>
			<section className={S.transition} data-animation='transition' />
			<DisplayChildren ref={(node) => (next.current = node)} {...pageProps} />
		</Fragment>
	)
}
