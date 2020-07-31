import React from 'react'

import BasicsFadeIn from './BasicsFadeIn'
import BasicsInnerText from './BasicsInnerText'
import BasicsScrollTop from './BasicsScrollTop'
import BasicsInterpolate from './BasicsInterpolate'

function Basics() {
  // const [clickKeyframes, setClickKeyframes] = useState(false)
  // const props = useSpring({
  //   opacity: 1,
  //   from: {
  //     opacity: 0,
  //   },
  // })
  // const numberProps = useSpring({
  //   number: 1,
  //   from: {
  //     number: 0,
  //   },
  // })
  // const keyframes = useSpring({
  //   x: clickKeyframes ? 1 : 0,
  // })
  return (
    <>
      <h2>Basics</h2>
      <div className="panel">
        <BasicsFadeIn />
      </div>
      <div className="panel">
        <BasicsInnerText />
      </div>
      <div className="panel">
        <BasicsScrollTop />
      </div>
      <h2>interpolate</h2>
      <div className="panel">
        <BasicsInterpolate />
      </div>
      {/* <animated.div style={props}>I will fade in</animated.div>
      <br />
      <animated.div>{numberProps.number.interpolate((n) => n.toFixed(2))}</animated.div>
      <br />
      <animated.div
        onClick={() => {
          setClickKeyframes((pre) => !pre)
        }}
        style={{
          transform: keyframes.x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .interpolate((x) => `scale(${x})`),
        }}
      >
        keyframes Click me!
      </animated.div> */}
    </>
  )
}

export default Basics
