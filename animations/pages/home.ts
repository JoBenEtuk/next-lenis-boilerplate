import { Page } from '../classes/page'

export class Home extends Page {
	constructor() {
		super({
			element: '[data-animation="home"]',
			elements: {},
		})
	}

	resetElements(): void {}

	create() {
		super.create()
		// this.resetElements()
	}
}
