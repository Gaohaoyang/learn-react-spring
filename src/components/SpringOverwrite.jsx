import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

function SpringOverwrite() {
  const [toggle, setToggle] = useState(false)
  const { opacity } = useSpring({
    opacity: toggle ? 0 : 1,
  })
  return (
    <animated.div
      onClick={() => {
        setToggle(!toggle)
      }}
      style={{ opacity }}
    >
      click me, overwrite values to change the animation
    </animated.div>
  )
}

export default SpringOverwrite
