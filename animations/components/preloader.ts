import { Component } from '../classes/component'
import GSAP from 'gsap'
import { each } from 'lodash'

export class Preloader extends Component {
	images: any[]
	length: number
	interval!: ReturnType<typeof setInterval> | undefined
	constructor() {
		super({
			element: '[data-animation="preloader"]',
			elements: {
				text: '[data-animation="preloader__text"] span',
				h1: '[data-animation="preloader__text"]',
			},
		})

		this.images = [...document.querySelectorAll('[data-src]')]

		this.length = 0
		this.interval
		this.createLoader()
	}

	createLoader() {
		if (this.images.length > 0) {
			this.images.forEach((image) => {
				const media = new window.Image()
				const src = image.getAttribute('data-src')
				media.crossOrigin = 'anonymous'
				media.src = src

				media.onload = (_) => {
					image.setAttribute('src', src)
					this.onAssetLoaded()
				}
			})
		} else this.onLoaded()
	}

	onAssetLoaded(image?: any) {
		this.length += 1

		const percent = this.length / this.images.length
		// this.elements.number.innerHTML = `${Math.round(percent * 100)}%`
		// this.elements.path.style.strokeDasharray = `${Math.round(percent * 100)} 100`

		if (percent === 1) {
			this.onLoaded()
		}
	}

	create() {
		super.create()
	}

	onLoaded() {
		this.interval = setInterval(() => {
			this.length < 99 ? (this.length += 1) : (this.length = 100)
			// this.elements.number.innerHTML = `${this.length}%`
		}, 27)

		// GSAP.timeline()
		// 	.to(this.element, { autoAlpha: 0 })
		// 	.call(() => {
		// 		this.emit('completed')
		// 	})
		GSAP.timeline()
			.to(this.elements.text, {
				y: '0',
				duration: 1.5,
				ease: 'expo.inOut',
			})
			.to(this.elements.text, {
				width: 'auto',
				delay: 0.5,
			})
			.to(
				this.elements.text,
				{
					delay: 1,
					width: '0',
					overflow: 'hidden',
				},
				'text'
			)
			.to(
				[this.elements.text[0], this.elements.text[4]],
				{
					delay: 1,
					width: 'auto',
				},
				'text'
			)
			.to(this.elements.h1, {
				backgroundColor: 'white',
			})
			.to([this.element], {
				delay: 0.5,
				autoAlpha: 0,
			})
			.call(() => {
				this.emit('completed')
			})
	}

	destroy() {
		// this.element.parentNode.removeChild(this.element)
		setTimeout(() => {
			clearInterval(this.interval)
		}, 4000)
	}
}
