/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import './SpringGiftAndBubble.css'

const assets = {
  bg: 'https://gw.alicdn.com/tfs/TB1MiWOjk9l0K4jSZFKXXXFjpXa-750-58.png',
  gift: 'https://gw.alicdn.com/tfs/TB13QKieSslXu8jSZFuXXXg7FXa-240-240.png',
  holeBack: 'https://gw.alicdn.com/tfs/TB1jzUWSkL0gK0jSZFAXXcA9pXa-320-40.png',
  holeFront: 'https://gw.alicdn.com/tfs/TB1VawIfkcx_u4jSZFlXXXnUFXa-1600-110.png',
  bubble: 'https://gw.alicdn.com/tfs/TB1I.OFSvb2gK0jSZK9XXaEgFXa-588-260.png',
}

let currIndex = 0

function SpringGiftAndBubble({ duration = 3000, listData = [] }) {
  const [startAnimation, setStartAnimation] = useState(false)
  const [giftInAnimationEnd, setGiftInAnimationEnd] = useState(false)
  const [bubbleData, setBubbleData] = useState({})

  useEffect(() => {
    setBubbleData(listData[currIndex])
    console.log(listData)
    setTimeout(() => {
      setStartAnimation(true)
    }, 300)
  }, [])

  /**
   * 礼物入场动画
   */
  const springPropsGiftIn = useSpring({
    from: {
      transformValue: 0,
    },
    transformValue: startAnimation ? -0.9 : 0,
    immediate: !startAnimation,
    onRest() {
      if (startAnimation) {
        setGiftInAnimationEnd(true)
      }
    },
    config: { mass: 1, tension: 224, friction: 16 },
  })

  /**
   * 气泡展示动画
   */
  const springPropsBubbleIn = useSpring({
    from: {
      transformValue: 0,
    },
    transformValue: startAnimation ? 1 : 0,
    delay: startAnimation ? 240 : 0,
    immediate: !startAnimation,
    config: { mass: 1, tension: 220, friction: 22 },
  })

  /**
   * 移出动画
   */
  const springPropsFadeOut = useSpring({
    from: {
      transformValue: 1,
    },
    transformValue: startAnimation ? 0 : 1,
    delay: duration,
    reset: true,
    onRest() {
      if (startAnimation) {
        setStartAnimation(false)
        setGiftInAnimationEnd(false)
        if (currIndex + 1 === listData.length) {
          currIndex = 0
        } else {
          currIndex += 1
        }
        setBubbleData(listData[currIndex])
        setTimeout(() => {
          setStartAnimation(true)
        }, 20)
      }
    },
    // config: { mass: 1, tension: 220, friction: 22 },
  })

  return (
    <div className="container">
      <div className="gift-wrap">
        <div
          className="hole-back"
          style={{
            backgroundImage: `url(${assets.holeBack})`,
          }}
        />
        <animated.div
          className="gift"
          style={{
            backgroundImage: `url(${assets.gift})`,
            transform: giftInAnimationEnd
              ? springPropsFadeOut.transformValue.interpolate(
                (value) => `translateY(${(value - 1.9) * 100}px)`,
              )
              : springPropsGiftIn.transformValue.interpolate(
                (value) => `translateY(${value * 100}px)`,
              ),
            opacity: springPropsFadeOut.transformValue,
          }}
        />
        <div
          className="hole-front"
          style={{
            backgroundImage: `url(${assets.holeFront})`,
          }}
        />
      </div>
      <animated.div
        className="bubble"
        style={{
          backgroundImage: `url(${assets.bubble})`,
          transform: springPropsBubbleIn.transformValue.interpolate((value) => `scale(${value})`),
          opacity: springPropsFadeOut.transformValue,
        }}
      >
        <div className="bubble-inner">
          <div className="profile-wrap">
            {bubbleData.profile && (
              <div
                className="profile"
                style={{
                  backgroundImage: `url(${bubbleData.profile})`,
                }}
              />
            )}
            <div className="profile-title">
              {bubbleData.nick}
              已拿到好礼
            </div>
          </div>
          <div className="row2">
            <div className="sign-left">「</div>
            <div className="row2-title">{bubbleData.itemName}</div>
            <div className="sign-right">」</div>
          </div>
        </div>
      </animated.div>
    </div>
  )
}

export default SpringGiftAndBubble
