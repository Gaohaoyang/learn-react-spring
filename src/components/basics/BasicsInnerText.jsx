import React from 'react'
import { useSpring, animated } from 'react-spring'

function BasicsInnerText() {
  const { number } = useSpring({
    number: 10,
    from: {
      number: 0,
    },
  })
  return (
    <animated.div>
      { number }
    </animated.div>
  )
}

export default BasicsInnerText
