import React from 'react'
import { useSpring, animated, interpolate } from 'react-spring'

function BasicsInterpolate() {
  const {
    color,
    o,
    xyz,
  } = useSpring({
    from: {
      color: '#ef5350',
      o: 0,
      xyz: [0, 0, 0],
    },
    color: '#283593',
    o: 1,
    xyz: [10, 6, 5],
  })

  return (
    <animated.div
      style={{
        color,
        background: o.interpolate((value) => `rgba(253, 216, 53, ${value})`),
        transform: xyz.interpolate((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`),
        border: interpolate([o, color], (oo, c) => `${oo * 5}px solid ${c}`),
        // You can also form ranges, even chain multiple interpolations
        padding: o.interpolate({
          range: [0, 0.8, 1],
          output: [0, 0, 10],
        }).interpolate((oo) => `${oo}%`),
        // Interpolating strings (like up-front) through ranges is allowed ...
        borderColor: o.interpolate({
          range: [0, 1],
          output: ['red', '#ffaabb'],
        }),
        // There's also a shortcut for plain, optionless ranges ...
        opacity: o.interpolate(
          [0.1, 0.2, 0.6, 1],
          [1, 0.1, 0.5, 1],
        ),
      }}
    >
      {
        o.interpolate((n) => n.toFixed(2))
      }
    </animated.div>
  )
}

export default BasicsInterpolate
