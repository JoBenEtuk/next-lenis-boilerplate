import FrontLayout from '@/layout/frontLayout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<FrontLayout page='home'>
			<section>
				<h1>Hero</h1>
			</section>
		</FrontLayout>
	)
}

export default Home

export async function getServerSideProps() {
	await waitload(2)
	return {
		props: {},
	}
}

function waitload(sec: number) {
	return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}
