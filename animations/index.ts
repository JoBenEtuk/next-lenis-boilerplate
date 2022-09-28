type Props = {
	page: string
}

import { Home } from './pages/home'
import { Preloader } from './components/preloader'

export class App {
	currentpage: any
	preloader: any
	pages: any
	pagetitle: string
	frame: any

	// constructor receiving props from react
	constructor({ page }: Props) {
		// set current page name
		this.pagetitle = page
		// call create preloader method
		this.createPreloader()
		// this.onResize()
		this.update()
	}

	createPreloader() {
		this.preloader = new Preloader()
		this.preloader.once('completed', this.onPreloaded.bind(this))
	}

	createPages() {
		// save a list of all pages
		this.pages = {
			home: new Home(),
		}

		// set current page to current page
		this.currentpage = this.pages[this.pagetitle]
		// initialize current page
		this.currentpage.create()
	}

	onPreloaded() {
		this.createPages()

		// this.currentpage.show()
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

	// onResize() {
	// 	if (this.currentpage && this.currentpage.onResize) {
	// 		this.currentpage.onResize()
	// 	}
	// }
}
