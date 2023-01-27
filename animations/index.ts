type Props = {
	page: string
}
import Lenis from '@studio-freight/lenis'
import { each, map } from 'lodash'

import { Home } from './pages/home'
import { Preloader } from './components/preloader'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.normalizeScroll(true)
export class App {
	currentpage: any
	preloader: any
	pages: any
	pagetitle: string
	frame: any

	animations: any[]
	animationsParagraphs: any
	animationsParallax: any

	lenis: any

	// constructor receiving props from react
	constructor({ page }: Props) {
		this.pagetitle = page
		this.animations = []
		this.createPages()
		this.onResize()
		this.update()
		this.reset()
		this.initLenis()
	}

	createPreloader() {
		if (!sessionStorage.getItem('preloader')) {
			this.preloader = new Preloader()
			this.preloader.once('completed', this.onPreloaded.bind(this))
		}
	}

	async reset() {
		if (sessionStorage.getItem('preloader')) {
			await this.currentpage.reset()
			setTimeout(() => {
				this.currentpage.show()
			}, 1000)
		} else {
			this.createPreloader()
		}
	}

	initLenis() {
		this.lenis = new Lenis({
			duration: 1.25,
			easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: 'vertical',
			gestureDirection: 'vertical',
			smooth: true,
			mouseMultiplier: 0.8,
			smoothTouch: false,
			infinite: false,
		})

		this.lenis.on('scroll', ({ scroll }) => {
			ScrollTrigger.update()
			each(this.animations, (animation) => {
				animation.update && animation.update({ current: scroll })
			})
		})

		const raf = (time: any) => {
			this.lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}

	createComponents(): void {
		this.createAnimations()
	}

	createAnimations(): void {}

	createPages() {
		this.pages = {
			home: new Home(),
		}

		this.currentpage = this.pages[this.pagetitle]
		this.currentpage.create()
		this.currentpage.reset()
		this.createComponents()
		this.addEventListeners()
	}

	onPreloaded() {
		this.preloader.destroy()
		this.currentpage.show()
	}

	/**
	 * Loop
	 **/
	update() {
		if (this.currentpage && this.currentpage.update) {
			this.currentpage.update()
		}

		this.frame = window.requestAnimationFrame(this.update.bind(this))
	}

	onResize() {
		if (this.currentpage && this.currentpage.onResize) {
			this.currentpage.onResize()
		}
	}

	addEventListeners() {}
}

console.log(
	'%c 💛 & 💡 Josiah — https://jobenetuk.dev/',
	'background: #000; color: #ff873c;'
)
