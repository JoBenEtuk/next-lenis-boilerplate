import { EventEmitter } from 'events'
import { each } from 'lodash'
import Lenis from '@studio-freight/lenis'

export class Page extends EventEmitter {
	components: any
	elements: any
	transformPrefix: any
	lenis: any
	selectors: { element: any; elements: any }
	element: any

	constructor({ element, elements }: any) {
		super()

		this.selectors = {
			element,
			elements: {
				...elements,
			},
		}

		this.lenis = new Lenis({
			duration: 1,
			easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: 'vertical',
			smooth: true,
			smoothTouch: false,
			touchMultiplier: 2,
		})

		this.create()
	}

	create(): void {
		this.element = document.querySelector(this.selectors.element)
		this.elements = {}

		each(this.selectors.elements, (selector, key) => {
			if (selector instanceof window.HTMLElement || selector instanceof window.NodeList) {
				this.elements[key] = selector
			} else if (Array.isArray(selector)) {
				this.elements[key] = selector
			} else {
				this.elements[key] = this.element.querySelectorAll(selector)

				if (this.elements[key].length === 0) {
					this.elements[key] = null
				} else if (this.elements[key].length === 1) {
					this.elements[key] = this.element.querySelector(selector)
				}
			}
		})
	}

	show(): void {}

	update(): void {
		const raf = (time: any) => {
			this.lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}

	addEventListeners(): void {}
}
