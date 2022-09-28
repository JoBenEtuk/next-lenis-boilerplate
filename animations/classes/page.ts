import { EventEmitter } from 'events'
import { each } from 'lodash'
import Lenis from '@studio-freight/lenis'

export class Page extends EventEmitter {
	components: any
	elements: any
	transformPrefix: any
	lenis: any

	constructor({ ...elements }: any) {
		super()
		this.elements = elements

		this.lenis = new Lenis({
			duration: 1,
			easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
			direction: 'vertical',
			smooth: true,
			smoothTouch: false,
			touchMultiplier: 2,
		})
	}

	create(): void {
		this.components = {}
		// for each of the data type passed in, select all and then save it as an item in this.elements
		each(this.elements, (component: any, key: any) => {
			this.components[key] = document.querySelectorAll(component)
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
