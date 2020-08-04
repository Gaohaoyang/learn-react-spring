import React from 'react'
import { useSpring, animated } from 'react-spring'

let toggle = false

function SpringPassAFun() {
  const [{ opacity }, set] = useSpring(() => ({
    opacity: 1,
  }))
  return (
    <animated.div
      style={{
        opacity,
      }}
      onClick={() => {
        set({
          opacity: toggle ? 1 : 0,
        })
        toggle = !toggle
      }}
    >
      click me! SpringPassAFunction
    </animated.div>
  )
}

export default SpringPassAFun
