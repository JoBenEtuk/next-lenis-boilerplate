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
