/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useDrag } from 'react-use-gesture'
import { useSpring, animated } from 'react-spring'
import './Spring3DCard.css'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Spring3DCard() {
  // Set the drag hook and define component movement based on gesture data
  const [cssProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 5,
      tension: 350,
      friction: 40,
    },
  }))

  const bind = useDrag(({ down, movement: [x, y] }) => {
    console.log(down, x, y, calc(x, y))
    set({
      xys: down
        ? calc(x, y)
        : [0, 0, 1],
    })
  })


  return (
    <div className="container">
      <animated.div
        {...bind()}
        className="card"
        // onTouchMove={(clientX, clientY) => {
        //   console.log(clientX, clientY)
        // }}
        style={{
          transform: cssProps.xys.interpolate(trans),
        }}
      />
    </div>
  )
}

export default Spring3DCard
