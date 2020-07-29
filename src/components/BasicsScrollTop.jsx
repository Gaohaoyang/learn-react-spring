/* eslint-disable max-len */
import React from 'react'
import { useSpring, animated } from 'react-spring'

function BasicsScrollTop() {
  const { scroll } = useSpring({
    scroll: 200,
    from: {
      scroll: 0,
    },
  })
  return (
    <animated.div
      scrollTop={scroll}
      style={{
        height: '100px',
        overflowY: 'auto',
      }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe in quae dolorum deleniti recusandae, quisquam perspiciatis quod officia quos, nam aliquam! Neque, tempore voluptatum illo libero quos obcaecati ipsum.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus iure alias eum nemo magni aspernatur facere excepturi ducimus esse quidem, sint assumenda aut rem nobis maxime. Numquam, eligendi hic?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ex ullam. Voluptatem ad quis maiores alias perspiciatis sunt adipisci hic cum quam labore, laudantium reprehenderit optio molestias exercitationem, sed eaque?
      </p>
    </animated.div>
  )
}

export default BasicsScrollTop
