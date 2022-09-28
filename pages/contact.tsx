import type { NextPage } from 'next'

const Contact: NextPage = () => {
	return (
		<section>
			<h1>Contact</h1>
		</section>
	)
}

export default Contact

export async function getServerSideProps() {
	await waitload(2)
	return {
		props: { dummy: 'dummy' },
	}
}

function waitload(sec: number) {
	return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}
