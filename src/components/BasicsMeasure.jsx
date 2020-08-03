import React, { Fragment } from 'react'
import useMeasure from 'react-use-measure'
import { animated, useSpring } from 'react-spring'

function BasicsMeasure() {
  const [ref, bounds] = useMeasure()
  const { opacity } = useSpring({
    from: {
      opacity: 1,
    },
    opacity: bounds.width < 249 ? 0 : 1,
  })
  return (
    <animated.div
      ref={ref}
      style={{
        position: 'relative',
        opacity,
      }}
    >
      {Object.keys(bounds).map((key) => (
        <Fragment key={key}>
          <span>
            {
              key
            }
            ---
          </span>
          <span>
            {
              Math.round(bounds[key])
            }
            px
          </span>
          <br />
        </Fragment>
      ))}
    </animated.div>
  )
}

export default BasicsMeasure
