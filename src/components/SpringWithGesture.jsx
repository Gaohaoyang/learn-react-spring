/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useGesture } from 'react-use-gesture'
import { useSpring, animated, interpolate } from 'react-spring'

import './SpringWithGesture.css'

const lockScroll = (e) => {
  e.preventDefault()
}

function SpringWithGesture() {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useGesture({
    onDrag: ({
      down,
      movement: [mx, my],
    }) => {
      set({
        x: down
          ? mx
          : 0,
        y: down
          ? my
          : 0,
      })
    },
    onDragStart: () => {
      document.body.addEventListener('touchmove', lockScroll, { passive: false })
    },
    onDragEnd: () => {
      document.body.removeEventListener('touchmove', lockScroll, { passive: false })
    },
  })

  return (
    <animated.div
      className="springWithGesture"
      {...bind()}
      style={{
        transform: interpolate([x, y], (xx, yy) => `translateX(${xx}px) translateY(${yy}px)`),
      }}
    >
      drag me
    </animated.div>
  )
}

export default SpringWithGesture
