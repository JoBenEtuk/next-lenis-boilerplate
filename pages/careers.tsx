import type { NextPage } from 'next'

const Careers: NextPage = () => {
	return (
		<section>
			<h1>Careers</h1>
		</section>
	)
}

export default Careers

export async function getServerSideProps() {
	await waitload(2)
	return {
		props: { dummy: 'dummy' },
	}
}

function waitload(sec: number) {
	return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}
