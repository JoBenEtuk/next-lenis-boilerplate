import FrontLayout from '@/layout/frontLayout'
import type { NextPage } from 'next'

const Contact: NextPage = () => {
	return (
		<FrontLayout page='contact'>
			<section>
				<h1>Contact</h1>
			</section>
		</FrontLayout>
	)
}

export default Contact

export async function getServerSideProps() {
	await waitload(2)
	return {
		props: {},
	}
}

function waitload(sec: number) {
	return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}
