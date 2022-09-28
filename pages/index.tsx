import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<section>
			<h1>Hero</h1>
		</section>
	)
}

export default Home

export async function getServerSideProps() {
	await waitload(2)
	return {
		props: { dummy: 'dummy' },
	}
}

function waitload(sec: number) {
	return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}
