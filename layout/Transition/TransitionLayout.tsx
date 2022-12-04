import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import { useState } from 'react'
import gsap from 'gsap'

export default function TransitionLayout({ children }: any) {
	const [displayChildren, setDisplayChildren] = useState(children)
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
	}, [children])

	useIsomorphicLayoutEffect(() => {
		timeline.restart()
		setTimeout(() => {
			setDisplayChildren(children)
		}, 1000)
	}, [children])

	return <>{displayChildren}</>
}
