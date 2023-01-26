import FrontLayout from '@/layout/frontLayout'
import { gsap } from 'gsap'
import { forwardRef, useImperativeHandle, useRef } from 'react'

const CareersPage = (_, ref: any) => {
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
			<FrontLayout page='careers'>
				<section>
					<h1>Careers</h1>
				</section>
			</FrontLayout>
		</section>
	)
}

export default forwardRef(CareersPage)
