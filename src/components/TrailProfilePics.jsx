/* eslint-disable react/prop-types */
import React from 'react'
import { useTrail, animated } from 'react-spring'
import './TrailProfilePics.css'

const profiles = [{
  pic: 'https://gw.alicdn.com/tfs/TB1sR4pQ.H1gK0jSZSyXXXtlpXa-708-644.png',
}, {
  pic: 'https://gw.alicdn.com/tfs/TB1bjlXd7cx_u4jSZFlXXXnUFXa-224-224.png',
}, {
  pic: 'https://gw.alicdn.com/tfs/TB1PjhfQ7L0gK0jSZFtXXXQCXXa-509-509.png',
}, {
  pic: 'https://gw.alicdn.com/tfs/TB1aupge6MZ7e4jSZFOXXX7epXa-300-199.png',
}, {
  pic: 'https://gw.alicdn.com/tfs/TB1XQtqQVT7gK0jSZFpXXaTkpXa-549-366.png',
}, {
  pic: 'https://gw.alicdn.com/tfs/TB1Qs8qQ.H1gK0jSZSyXXXtlpXa-602-570.png',
}, {
  pic: 'https://gw.alicdn.com/tfs/TB1rCtqQWL7gK0jSZFBXXXZZpXa-496-280.png',
}, {
  pic: 'https://gw.alicdn.com/tfs/TB1tzbPhA9l0K4jSZFKXXXFjpXa-274-184.png',
}, {
  pic: 'https://gw.alicdn.com/tfs/TB1wW4rQVT7gK0jSZFpXXaTkpXa-225-225.png',
}, {
  pic: 'https://gw.alicdn.com/tfs/TB1UZprQWL7gK0jSZFBXXXZZpXa-610-610.png',
}, {
  pic: 'https://gw.alicdn.com/tfs/TB1JT0EQVP7gK0jSZFjXXc5aXXa-720-480.png',
}, {
  pic: 'https://gw.alicdn.com/tfs/TB175OrhnM11u4jSZPxXXahcXXa-275-183.png',
}, {
  pic: 'https://gw.alicdn.com/tfs/TB1LI4Miz39YK4jSZPcXXXrUFXa-650-488.png',
}, {
  pic: 'https://gw.alicdn.com/tfs/TB1qvBhQ7L0gK0jSZFtXXXQCXXa-995-935.png',
}, {
  pic: 'https://gw.alicdn.com/tfs/TB1EGxuQYr1gK0jSZFDXXb9yVXa-600-900.png',
}, {
  pic: 'https://gw.alicdn.com/tfs/TB1ibVhQ4z1gK0jSZSgXXavwpXa-640-520.png',
}]

let top = 0
let left = 0
const trans = (x, y) => {
  if (document.querySelector('.trail-prof-container') && top === 0 && left === 0) {
    const clientSize = document.querySelector('.trail-prof-container').getBoundingClientRect()
    top = clientSize.top
    left = clientSize.left
  }
  return `translate3d(${x - left}px,${y - top}px,0) translate3d(-50%,-50%,0)`
}

function TrailProfilePics() {
  const [trail, set] = useTrail(profiles.length, () => ({
    xy: [0, 0],
    // config: { mass: 1, tension: 180, friction: 26},
    // config: { mass: 10, tension: 180, friction: 26}, // 质量越大、惯性越大
    // config: { mass: 1, tension: 180, friction: 200}, // 大摩擦力（阻尼）
    // config: { mass: 1, tension: 180, friction: 18}, // 小摩擦力（阻尼）
    // config: { mass: 1, tension: 280, friction: 26 }, // 胡克定律，劲度系数
  }))

  return (
    <div
      className="trail-prof-container"
      onMouseMove={(e) => {
        set({
          xy: [e.clientX, e.clientY],
        })
      }}
    >
      {
        trail.map((props, index) => (
          <animated.div
            className="trail-prof"
            key={profiles[index].pic}
            style={{
              zIndex: profiles.length - index,
              backgroundImage: `url(${profiles[index].pic})`,
              transform: props.xy.interpolate(trans),
            }}
          />
        ))
      }

    </div>
  )
}

export default TrailProfilePics
