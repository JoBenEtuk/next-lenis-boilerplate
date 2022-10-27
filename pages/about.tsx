import FrontLayout from '@/layout/frontLayout'
import type { NextPage } from 'next'

const About: NextPage = () => {
	return (
		<FrontLayout page='about'>
			<section>
				<h1>About</h1>
			</section>
		</FrontLayout>
	)
}

export default About

export async function getServerSideProps() {
	await waitload(2)
	return {
		props: {},
	}
}

function waitload(sec: number) {
	return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}
