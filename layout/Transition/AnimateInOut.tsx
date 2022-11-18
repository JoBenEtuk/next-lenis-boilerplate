import React, { useContext, Fragment } from 'react'
import { gsap } from 'gsap'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import { TransitionContext } from './TransitionContext'

const AnimateInOut = ({ children }: any) => {
	const { timeline } = useContext(TransitionContext)

	useIsomorphicLayoutEffect(() => {
		timeline.add(
			gsap
				.timeline()
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
				}),
			0
		)
	}, [])

	return <Fragment>{children}</Fragment>
}

export default React.memo(AnimateInOut)
