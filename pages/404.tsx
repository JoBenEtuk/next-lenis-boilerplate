import FrontLayout from '@/layout/frontLayout'

import { gsap } from 'gsap'
import { forwardRef, useRef, useImperativeHandle } from 'react'

const ErrorPage = (props: any, ref) => {
	const el = useRef<any>(null)

	const animateIn = () => {
		return gsap
			.timeline({
				paused: true,
				defaults: {
					duration: 1,
				},
			})
			.timeScale(0.5)
			.to(el.current, {
				autoAlpha: 1,
			})
			.restart()
	}

	useImperativeHandle(ref, () => ({
		animateIn,
	}))

	return (
		<section ref={el}>
			<FrontLayout page='about'>
				<h1>ERROR</h1>
			</FrontLayout>
		</section>
	)
}

export default forwardRef(ErrorPage)
