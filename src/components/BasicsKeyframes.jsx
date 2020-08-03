import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'

function BasicsKeyframes() {
  const [state, setState] = useState(true)
  const { x } = useSpring({
    x: state ? 1 : 0,
    from: {
      x: 0,
    },
    config: {
      duration: 1000,
    },
  })
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <animated.div
        onClick={() => {
          setState(!state)
        }}
        style={{
          transform: x.interpolate({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          }).interpolate((scale) => `scale(${scale})`),
        }}
      >
        kkkkeyframes click me!
      </animated.div>
    </div>
  )
}

export default BasicsKeyframes
