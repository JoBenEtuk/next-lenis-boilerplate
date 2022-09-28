import each from 'lodash/each'
import gsap from 'gsap'
import Splitting from 'splitting'

import { Animation } from '../classes/animation'

export default class Titles extends Animation {
	elementLinesSpan
	constructor({ element, elements }: { element: string; elements: {} }) {
		super({
			element,
			elements,
		})

		this.splitText()
		this.elementLinesSpan = this.element.querySelectorAll('span')
	}

	splitText() {
		Splitting({ target: this.element, by: 'lines' })
	}

	animateIn() {
		each(this.elementLinesSpan, (line) => {
			const lineIndex: number = Number(line.style.getPropertyValue('--line-index'))
			gsap
				.timeline({ delay: 0.5 })
				.set(this.element, {
					autoAlpha: 1,
				})
				.set(line, {
					y: '100%',
					autoAlpha: 0,
				})
				.to(line, {
					y: 0,
					autoAlpha: 1,
					delay: 0.15 * lineIndex,
					duration: 0.75,
					ease: 'back.out(1)',
				})
		})
	}

	animateOut() {
		gsap.set(this.element, {
			autoAlpha: 0,
		})
	}

	onResize() {
		this.splitText()
	}
}
