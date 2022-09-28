import type { NextPage } from 'next'

const About: NextPage = () => {
	return (
		<section>
			<h1>About</h1>
		</section>
	)
}

export default About

export async function getServerSideProps() {
	await waitload(2)
	return {
		props: { dummy: 'dummy' },
	}
}

function waitload(sec: number) {
	return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}
