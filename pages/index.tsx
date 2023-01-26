import FrontLayout from '@/layout/frontLayout'

import { gsap } from 'gsap'
import { forwardRef, useRef, useImperativeHandle } from 'react'

const HomePage = (_, ref) => {
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
			<FrontLayout page='home'>
				<section>
					<h1>Home</h1>
				</section>
			</FrontLayout>
		</section>
	)
}

export default forwardRef(HomePage)
