import React, { useState, createContext } from 'react'
import gsap from 'gsap'

const TransitionContext = createContext<any>({})

const TransitionProvider = ({ children }: any): JSX.Element => {
	const [timeline, setTimeline] = useState(() => gsap.timeline({ paused: true }))

	return (
		<TransitionContext.Provider
			value={{
				timeline,
				setTimeline,
			}}>
			{children}
		</TransitionContext.Provider>
	)
}

export { TransitionContext, TransitionProvider }
