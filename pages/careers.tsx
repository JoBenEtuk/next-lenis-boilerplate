import FrontLayout from '@/layout/frontLayout'
import type { NextPage } from 'next'

const Careers: NextPage = () => {
	return (
		<FrontLayout page='careers'>
			<section>
				<h1>Careers</h1>
			</section>
		</FrontLayout>
	)
}

export default Careers

export async function getServerSideProps() {
	await waitload(2)
	return {
		props: {},
	}
}

function waitload(sec: number) {
	return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}
