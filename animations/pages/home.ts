import { Page } from '../classes/page'

export class Home extends Page {
	constructor() {
		super({
			heroTitle: '[data-animation="heroTitle"]',
		})
	}

	resetElements(): void {}

	createComponentAnimations() {}
}
