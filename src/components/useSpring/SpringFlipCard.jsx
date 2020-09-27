/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import './SpringFlipCard.css'

function SpringFlipCard() {
  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(1000px) rotateY(${flipped ? -180 : 0}deg)`,
    config: { mass: 1, tension: 180, friction: 16 },
  })
  return (
    <div
      onClick={() => {
        setFlipped((pre) => !pre)
      }}
      className="wrap"
    >
      <animated.div
        className="card front"
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
        }}
      />
      <animated.div
        className="card back"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(-180deg)`),
        }}
      />
    </div>
  )
}

export default SpringFlipCard
