import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import { useState, useContext } from 'react'
import { TransitionContext } from './TransitionContext'

export default function TransitionLayout({ children }: any) {
	const [displayChildren, setDisplayChildren] = useState(children)
	const { timeline } = useContext(TransitionContext)

	useIsomorphicLayoutEffect(() => {
		if (children !== displayChildren) {
			if (timeline.duration() === 0) {
				setDisplayChildren(children)
			} else {
				timeline.play().then(() => {
					setDisplayChildren(children)
					timeline.seek(0).pause().clear()
				})
			}
		}
	}, [children])

	return <>{displayChildren}</>
}
